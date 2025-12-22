import { NextRequest, NextResponse } from 'next/server'
import { SendEmailCommand } from '@aws-sdk/client-ses'
import { sesClient, db } from '@/lib/aws'

export async function POST(request: NextRequest) {
  try {
    const { submissionId } = await request.json()

    // Update payment status
    const query = `
      UPDATE submissions 
      SET payment_confirmed = true, 
          status = 'payment_confirmed',
          updated_at = $1
      WHERE id = $2
      RETURNING *
    `
    
    const result = await db.query(query, [new Date(), submissionId])
    
    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Submission not found' },
        { status: 404 }
      )
    }

    const submission = result.rows[0]

    // Send confirmation email via SES
    const emailCommand = new SendEmailCommand({
      Source: process.env.SES_FROM_EMAIL,
      Destination: {
        ToAddresses: [submission.author_email],
      },
      Message: {
        Subject: {
          Data: `Payment Confirmed - ${submissionId}`,
        },
        Body: {
          Html: {
            Data: `
              <h2>Payment Confirmed</h2>
              <p>Dear ${submission.author_name},</p>
              <p>Your payment for submission "${submission.title}" has been confirmed.</p>
              <p>Your article is now being assigned to a reviewer. You will receive updates on the review progress.</p>
              <p>Submission ID: ${submissionId}</p>
            `,
          },
        },
      },
    })

    await sesClient.send(emailCommand)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error confirming payment:', error)
    return NextResponse.json(
      { error: 'Failed to confirm payment' },
      { status: 500 }
    )
  }
}