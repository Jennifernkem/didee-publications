import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { submissionId } = await request.json()

    // Update payment status
    const { data, error } = await supabaseAdmin
      .from('submissions')
      .update({ 
        payment_confirmed: true, 
        status: 'payment_confirmed',
        updated_at: new Date().toISOString()
      })
      .eq('id', submissionId)
      .select()

    if (error) throw error

    const submission = data[0]

    // Send confirmation email to author
    await resend.emails.send({
      from: 'admin@didee-publications.com',
      to: submission.author_email,
      subject: `Payment Confirmed - ${submissionId}`,
      html: `
        <h2>Payment Confirmed</h2>
        <p>Dear ${submission.author_name},</p>
        <p>Your payment for submission "${submission.title}" has been confirmed.</p>
        <p>Your article is now being assigned to a reviewer. You will receive updates on the review progress.</p>
        <p>Submission ID: ${submissionId}</p>
      `
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error confirming payment:', error)
    return NextResponse.json(
      { error: 'Failed to confirm payment' },
      { status: 500 }
    )
  }
}