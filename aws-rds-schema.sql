-- AWS RDS PostgreSQL Schema for Didee Publications

-- Create database (run this first)
-- CREATE DATABASE didee_publications;

-- Connect to didee_publications database, then run below:

-- Create submissions table
CREATE TABLE submissions (
  id VARCHAR(50) PRIMARY KEY,
  title TEXT NOT NULL,
  field VARCHAR(100) NOT NULL,
  service_type VARCHAR(50) NOT NULL DEFAULT 'review_only',
  abstract TEXT NOT NULL,
  author_email VARCHAR(255) NOT NULL,
  author_name VARCHAR(255) NOT NULL,
  file_key VARCHAR(500) NOT NULL, -- S3 object key
  status VARCHAR(50) DEFAULT 'pending_payment',
  reviewer_id INTEGER,
  payment_confirmed BOOLEAN DEFAULT FALSE,
  doi VARCHAR(100),
  published_date TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create reviewers table
CREATE TABLE reviewers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  field VARCHAR(100) NOT NULL,
  credentials TEXT,
  experience VARCHAR(100),
  specialties TEXT[],
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create reviews table
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  submission_id VARCHAR(50) REFERENCES submissions(id),
  reviewer_id INTEGER REFERENCES reviewers(id),
  status VARCHAR(50) DEFAULT 'assigned',
  feedback TEXT,
  decision VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  completed_at TIMESTAMP
);

-- Insert sample reviewers
INSERT INTO reviewers (name, email, field, credentials, experience, specialties) VALUES
('Thaddius Ayogun', 'thaddius@didee-publications.com', 'Social Sciences', 'MSc - Social Sciences', '8+ years in social research', ARRAY['Social Theory', 'Research Methods', 'Community Studies']),
('Dr. Emmanuel', 'emmanuel@didee-publications.com', 'Clinical Psychology', 'PhD - Clinical Psychology', '9+ years in clinical practice', ARRAY['Therapy', 'Mental Health', 'Behavioral Analysis']),
('Daniel Ojotule OFFOR', 'daniel@didee-publications.com', 'Clinical Psychology', 'MSc - Clinical Psychology', '10+ years in clinical research', ARRAY['Cognitive Therapy', 'Psychological Assessment', 'Clinical Research']),
('Hongjing Lin', 'hongjing@didee-publications.com', 'Clinical Psychology', 'MSc - Clinical Psychology', '8+ years in psychological research', ARRAY['Cross-Cultural Psychology', 'Clinical Interventions', 'Research Design']),
('Rev. Fr. Barrister Sanctus Ejeh', 'sanctus@didee-publications.com', 'Law and Art', 'LLB, BL - Law & Arts', '9+ years in legal practice', ARRAY['Legal Research', 'Art Law', 'Ethics']),
('Dr. Clementina Okeke', 'clementina@didee-publications.com', 'Law', 'PhD - Law', '10+ years in legal academia', ARRAY['Constitutional Law', 'Legal Theory', 'Jurisprudence']),
('Berna Simsek', 'berna@didee-publications.com', 'Psychology', 'MSc - Psychology', '8+ years in psychological research', ARRAY['Developmental Psychology', 'Research Methods', 'Statistical Analysis']),
('Obiageli Nwachukwu', 'obiageli@didee-publications.com', 'Science and Engineering', 'MSc - Engineering Sciences', '9+ years in engineering research', ARRAY['Applied Sciences', 'Engineering Design', 'Technical Research']);

-- Create indexes for better performance
CREATE INDEX idx_submissions_status ON submissions(status);
CREATE INDEX idx_submissions_author_email ON submissions(author_email);
CREATE INDEX idx_submissions_created_at ON submissions(created_at);
CREATE INDEX idx_reviewers_field ON reviewers(field);
CREATE INDEX idx_reviews_submission_id ON reviews(submission_id);