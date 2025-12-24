import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/aws'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    const title = formData.get('title') as string
    const field = formData.get('field') as string
    const serviceType = formData.get('service_type') as string
    const abstract = formData.get('abstract') as string
    const authorEmail = formData.get('email') as string
    const authorName = formData.get('name') as string

    // Generate submission ID
    const submissionId = `SUB-${Date.now()}`

    // Save submission to database only (no S3, no SES)
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
      'no-file-uploaded', // placeholder
      'pending_payment',
      new Date()
    ]

    const result = await db.query(query, values)

    return NextResponse.json({ 
      success: true, 
      submissionId,
      message: 'Submission received successfully. File upload and emails will be added later.' 
    })

  } catch (error) {
    console.error('Detailed submission error:', {
      message: error.message,
      stack: error.stack,
      name: error.name,
      code: error.code
    })
    return NextResponse.json(
      { success: false, error: `Failed to process submission: ${error.message}` },
      { status: 500 }
    )
  }
}