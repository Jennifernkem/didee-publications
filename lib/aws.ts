import { S3Client } from '@aws-sdk/client-s3'
import { SESClient } from '@aws-sdk/client-ses'
import { Pool } from 'pg'

// AWS Configuration
const awsConfig = {
  region: process.env.REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID!,
    secretAccessKey: process.env.SECRET_ACCESS_KEY!,
  },
}

// S3 Client
export const s3Client = new S3Client(awsConfig)

// SES Client
export const sesClient = new SESClient(awsConfig)

// PostgreSQL Connection Pool
export const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
})

// S3 Bucket Name
export const S3_BUCKET = process.env.S3_BUCKET_NAME || 'didee-publications-files'