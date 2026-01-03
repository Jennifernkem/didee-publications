'use client'
import { useState } from 'react'

export default function SubmitPage() {

  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const title = formData.get('title')
    const serviceType = formData.get('service_type')
    const field = formData.get('field')
    const abstract = formData.get('abstract')
    
    const submissionId = `SUB-${Date.now()}`
    
    const emailBody = `New Article Submission - ${submissionId}

Author: ${name}
Email: ${email}
Title: ${title}
Service: ${serviceType}
Field: ${field}

Abstract:
${abstract}

Please review and process this submission.`
    
    const mailtoLink = `mailto:support@didee-publications.com?subject=Article Submission - ${submissionId}&body=${encodeURIComponent(emailBody)}`
    
    window.open(mailtoLink)
    
    setMessage(`Success! Your submission ID is: ${submissionId}. An email has been opened for you to send. Please attach your PDF file to the email.`)
    e.currentTarget.reset()
  }

  const backgroundStyle = {
    backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-16 bg-cover bg-center" style={backgroundStyle}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Submit Your Research</h1>
          <p className="text-xl text-gray-200">Share your groundbreaking work with the academic community</p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto p-6 -mt-8">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg border">
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-gray-700">Your Name</label>
            <input 
              name="name"
              type="text" 
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-gray-700">Email Address</label>
            <input 
              name="email"
              type="email" 
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              placeholder="Enter your email"
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-gray-700">Article Title</label>
            <input 
              name="title"
              type="text" 
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              placeholder="Enter your article title"
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-gray-700">Service Type</label>
            <select name="service_type" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500">
              <option value="">Select service...</option>
              <option value="review_only">Peer Review & Certification</option>
              <option value="full_publishing">Full Publishing Services</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-gray-700">Field of Study</label>
            <select name="field" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500">
              <option value="">Select field...</option>
              <option value="Social Sciences">Social Sciences</option>
              <option value="Clinical Psychology">Clinical Psychology</option>
              <option value="Law and Art">Law and Art</option>
              <option value="Science and Engineering">Science and Engineering</option>
              <option value="Psychology">Psychology</option>
            </select>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-gray-700">Upload Article (PDF)</label>
            <input 
              name="file"
              type="file" 
              accept=".pdf"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-gray-700">Abstract</label>
            <textarea 
              name="abstract"
              rows={4}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              placeholder="Brief summary of your work..."
            />
          </div>
          
          <div className="bg-amber-50 p-6 rounded-lg mb-6 border border-amber-200">
            <h3 className="font-semibold mb-3 text-amber-900">Submission Process</h3>
            <div className="text-sm space-y-2 text-amber-800">
              <p><strong>Free Submission:</strong> No fees required</p>
              <p><strong>Review Process:</strong> Expert peer review</p>
              <p><strong>Timeline:</strong> 2-4 weeks for initial review</p>
            </div>
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
              <p className="text-sm font-medium text-green-800">After submission:</p>
              <p className="text-sm text-green-700">You will receive confirmation at: <strong>support@didee-publications.com</strong></p>
              <p className="text-xs text-green-600 mt-1">Include your submission ID in all correspondence</p>
            </div>
          </div>

          {message && (
            <div className={`p-4 rounded-lg mb-6 ${message.includes('Success') ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
              {message}
            </div>
          )}
          
          <button 
            type="submit"
            className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
          >
            Submit Article for Free
          </button>
          
          <p className="text-xs text-gray-500 text-center mt-3">
            This will open your email client. Please attach your PDF file and send the email to complete your submission.
          </p>
        </form>
      </div>
    </div>
  );
}