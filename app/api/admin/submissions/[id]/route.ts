import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/aws'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    
    const query = `
      SELECT * FROM submissions 
      WHERE id = $1
    `
    
    const result = await db.query(query, [id])
    
    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Submission not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({ submission: result.rows[0] })
  } catch (error) {
    console.error('Error fetching submission:', error)
    return NextResponse.json(
      { error: 'Failed to fetch submission' },
      { status: 500 }
    )
  }
}