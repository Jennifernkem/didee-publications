import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    
    const { data: submission, error } = await supabase
      .from('submissions')
      .select('*')
      .eq('id', id)
      .single()

    if (error) throw error

    return NextResponse.json({ submission })
  } catch (error: any) {
    console.error('Error fetching submission:', error)
    return NextResponse.json(
      { error: 'Failed to fetch submission' },
      { status: 500 }
    )
  }
}