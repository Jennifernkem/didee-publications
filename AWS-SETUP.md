# AWS Infrastructure Setup Guide

## 1. Create RDS PostgreSQL Database
```bash
# Create RDS instance via AWS Console or CLI
aws rds create-db-instance \
  --db-instance-identifier didee-publications-db \
  --db-instance-class db.t3.micro \
  --engine postgres \
  --master-username admin \
  --master-user-password YourSecurePassword123 \
  --allocated-storage 20 \
  --vpc-security-group-ids sg-xxxxxxxxx \
  --db-name didee_publications
```

## 2. Create S3 Bucket
```bash
# Create S3 bucket for file storage
aws s3 mb s3://didee-publications-files
aws s3api put-bucket-cors --bucket didee-publications-files --cors-configuration file://cors.json
```

## 3. Configure SES
```bash
# Verify your domain in SES
aws ses verify-domain-identity --domain didee-publications.com
```

## 4. IAM User Permissions
Create IAM user with these policies:
- AmazonS3FullAccess (or custom S3 policy)
- AmazonSESFullAccess (or custom SES policy)
- AmazonRDSDataFullAccess

## 5. Environment Variables for Production
```
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=AKIA...
AWS_SECRET_ACCESS_KEY=...
DATABASE_URL=postgresql://admin:password@your-rds-endpoint:5432/didee_publications
S3_BUCKET_NAME=didee-publications-files
SES_FROM_EMAIL=noreply@didee-publications.com
```

## 6. Deploy to AWS Amplify
1. Push code to GitHub
2. Connect GitHub to AWS Amplify
3. Add environment variables in Amplify console
4. Deploy automatically

## 7. Domain Setup
1. Add custom domain in Amplify
2. Update DNS records in Namecheap
3. SSL certificate auto-generated

## Cost Estimate (Monthly)
- RDS t3.micro: ~$15
- S3 storage: ~$1-5
- SES emails: ~$1
- Amplify hosting: Free tier
- **Total: ~$17-21/month**