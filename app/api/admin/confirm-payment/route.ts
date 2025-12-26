import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { submissionId } = await request.json()

    // Update payment status in Supabase
    const { data, error } = await supabase
      .from('submissions')
      .update({ 
        payment_confirmed: true, 
        status: 'payment_confirmed',
        updated_at: new Date().toISOString()
      })
      .eq('id', submissionId)
      .select()

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Error confirming payment:', error)
    return NextResponse.json(
      { error: 'Failed to confirm payment' },
      { status: 500 }
    )
  }
}