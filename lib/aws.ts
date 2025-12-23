import { S3Client } from '@aws-sdk/client-s3'
import { SESClient } from '@aws-sdk/client-ses'
import { Pool } from 'pg'

// Debug all environment variables
console.log('All env vars:', {
  ACCESS_KEY_ID: process.env.ACCESS_KEY_ID ? 'SET' : 'MISSING',
  SECRET_ACCESS_KEY: process.env.SECRET_ACCESS_KEY ? 'SET' : 'MISSING',
  DATABASE_URL: process.env.DATABASE_URL ? 'SET' : 'MISSING',
  NODE_ENV: process.env.NODE_ENV,
  allKeys: Object.keys(process.env).filter(k => k.includes('ACCESS') || k.includes('SECRET') || k.includes('AWS'))
})

// AWS Configuration with explicit credentials
const awsConfig = {
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID || 'missing',
    secretAccessKey: process.env.SECRET_ACCESS_KEY || 'missing',
  }
}

// S3 Client
export const s3Client = new S3Client(awsConfig)

// SES Client  
export const sesClient = new SESClient(awsConfig)

// PostgreSQL Connection Pool
export const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
})

// S3 Bucket Name
export const S3_BUCKET = 'didee-publications-files'