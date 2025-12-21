import { NextRequest, NextResponse } from 'next/server'
import { PutObjectCommand } from '@aws-sdk/client-s3'
import { SendEmailCommand } from '@aws-sdk/client-ses'
import { s3Client, sesClient, db, S3_BUCKET } from '@/lib/aws'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    const title = formData.get('title') as string
    const field = formData.get('field') as string
    const serviceType = formData.get('service_type') as string
    const abstract = formData.get('abstract') as string
    const authorEmail = formData.get('email') as string
    const authorName = formData.get('name') as string
    const file = formData.get('file') as File

    // Generate submission ID
    const submissionId = `SUB-${Date.now()}`
    const fileKey = `submissions/${submissionId}/${file.name}`

    // Upload file to S3
    const fileBuffer = Buffer.from(await file.arrayBuffer())
    const uploadCommand = new PutObjectCommand({
      Bucket: S3_BUCKET,
      Key: fileKey,
      Body: fileBuffer,
      ContentType: file.type,
    })
    
    await s3Client.send(uploadCommand)

    // Save submission to RDS
    const query = `
      INSERT INTO submissions (id, title, field, service_type, abstract, author_email, author_name, file_key, status, created_at)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING *
    `
    
    const values = [
      submissionId,
      title,
      field,
      serviceType,
      abstract,
      authorEmail,
      authorName,
      fileKey,
      'pending_payment',
      new Date()
    ]

    const result = await db.query(query, values)

    // Send confirmation email via SES
    const emailCommand = new SendEmailCommand({
      Source: process.env.SES_FROM_EMAIL,
      Destination: {
        ToAddresses: [authorEmail],
      },
      Message: {
        Subject: {
          Data: `Submission Received - ${submissionId}`,
        },
        Body: {
          Html: {
            Data: `
              <h2>Submission Received</h2>
              <p>Dear ${authorName},</p>
              <p>Your submission "${title}" has been received with ID: <strong>${submissionId}</strong></p>
              <p>Service: ${serviceType === 'review_only' ? 'Peer Review & Certification ($100)' : 'Full Publishing Services ($150)'}</p>
              <p>Please complete payment and send proof to support@didee-publications.com</p>
              <p>Include your submission ID: ${submissionId}</p>
            `,
          },
        },
      },
    })

    await sesClient.send(emailCommand)

    return NextResponse.json({ 
      success: true, 
      submissionId,
      message: 'Submission received successfully' 
    })

  } catch (error) {
    console.error('Submission error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to process submission' },
      { status: 500 }
    )
  }
}