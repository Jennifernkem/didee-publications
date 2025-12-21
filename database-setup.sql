-- Create submissions table
CREATE TABLE submissions (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  field TEXT NOT NULL,
  service_type TEXT NOT NULL DEFAULT 'review_only',
  abstract TEXT NOT NULL,
  author_email TEXT NOT NULL,
  author_name TEXT NOT NULL,
  file_path TEXT NOT NULL,
  status TEXT DEFAULT 'pending_payment',
  reviewer_id TEXT,
  payment_confirmed BOOLEAN DEFAULT FALSE,
  doi TEXT,
  published_date TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create reviewers table
CREATE TABLE reviewers (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  field TEXT NOT NULL,
  credentials TEXT,
  experience TEXT,
  specialties TEXT[],
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create reviews table
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  submission_id TEXT REFERENCES submissions(id),
  reviewer_id INTEGER REFERENCES reviewers(id),
  status TEXT DEFAULT 'assigned',
  feedback TEXT,
  decision TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
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

-- Create storage bucket for submissions
INSERT INTO storage.buckets (id, name, public) VALUES ('submissions', 'submissions', false);