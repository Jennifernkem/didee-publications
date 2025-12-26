import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  console.log('=== SUBMISSION START ===')
  try {
    const formData = await request.formData()
    console.log('Form data received')
    
    const title = formData.get('title') as string
    const field = formData.get('field') as string
    const serviceType = formData.get('service_type') as string
    const abstract = formData.get('abstract') as string
    const authorEmail = formData.get('email') as string
    const authorName = formData.get('name') as string

    console.log('Extracted data:', { title, field, serviceType, authorEmail, authorName })

    // Generate submission ID
    const submissionId = `SUB-${Date.now()}`
    console.log('Generated ID:', submissionId)

    // Save to Supabase
    console.log('Attempting Supabase insert...')
    const { data, error } = await supabase
      .from('submissions')
      .insert({
        id: submissionId,
        title,
        field,
        service_type: serviceType,
        abstract,
        author_email: authorEmail,
        author_name: authorName,
        file_path: 'no-file-uploaded',
        status: 'pending_payment',
        created_at: new Date().toISOString()
      })

    console.log('Supabase response:', { data, error })

    if (error) {
      console.error('Supabase error details:', error)
      throw error
    }

    console.log('Success! Returning response')
    const response = {
      success: true, 
      submissionId,
      message: 'Submission received successfully!' 
    }
    console.log('Response object:', response)
    return NextResponse.json(response)

  } catch (error: any) {
    console.error('=== SUBMISSION ERROR ===', {
      message: error?.message,
      details: error?.details,
      hint: error?.hint,
      code: error?.code,
      stack: error?.stack
    })
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to process submission' },
      { status: 500 }
    )
  }
}