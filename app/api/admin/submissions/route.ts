import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    const { data: submissions, error } = await supabase
      .from('submissions')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error

    return NextResponse.json({ submissions })
  } catch (error: any) {
    console.error('Error fetching submissions:', error)
    return NextResponse.json(
      { error: 'Failed to fetch submissions' },
      { status: 500 }
    )
  }
}