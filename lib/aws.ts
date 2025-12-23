import { S3Client } from '@aws-sdk/client-s3'
import { SESClient } from '@aws-sdk/client-ses'
import { Pool } from 'pg'

// Use Amplify's built-in AWS credentials (no manual keys needed)
const awsConfig = {
  region: 'us-east-1'
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