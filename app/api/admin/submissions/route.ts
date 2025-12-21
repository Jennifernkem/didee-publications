import { NextResponse } from 'next/server'
import { db } from '@/lib/aws'

export async function GET() {
  try {
    const query = `
      SELECT * FROM submissions 
      ORDER BY created_at DESC
    `
    
    const result = await db.query(query)
    
    return NextResponse.json({ submissions: result.rows })
  } catch (error) {
    console.error('Error fetching submissions:', error)
    return NextResponse.json(
      { error: 'Failed to fetch submissions' },
      { status: 500 }
    )
  }
}