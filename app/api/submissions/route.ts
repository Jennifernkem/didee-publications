import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

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

    // Save to Supabase
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

    if (error) {
      console.error('Supabase error:', error)
      throw error
    }

    return NextResponse.json({ 
      success: true, 
      submissionId,
      message: 'Submission received successfully!' 
    })

  } catch (error: any) {
    console.error('Submission error:', error)
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to process submission' },
      { status: 500 }
    )
  }
}