'use client'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'

interface Submission {
  id: string
  title: string
  author_name: string
  author_email: string
  field: string
  abstract: string
  status: string
  payment_confirmed: boolean
  file_path: string
  created_at: string
}

export default function SubmissionDetail() {
  const params = useParams()
  const [submission, setSubmission] = useState<Submission | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchSubmission()
  }, [])

  const fetchSubmission = async () => {
    try {
      const response = await fetch(`/api/admin/submissions/${params.id}`)
      const data = await response.json()
      setSubmission(data.submission)
    } catch (error) {
      console.error('Error fetching submission:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div className="p-8">Loading...</div>
  if (!submission) return <div className="p-8">Submission not found</div>

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">{submission.title}</h1>
            <p className="text-gray-600 mt-2">ID: {submission.id}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="font-semibold mb-2">Author Information</h3>
              <p><strong>Name:</strong> {submission.author_name}</p>
              <p><strong>Email:</strong> {submission.author_email}</p>
              <p><strong>Field:</strong> {submission.field}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Submission Status</h3>
              <p><strong>Status:</strong> 
                <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                  submission.status === 'completed' ? 'bg-green-100 text-green-800' :
                  submission.status === 'in_review' ? 'bg-purple-100 text-purple-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {submission.status.replace('_', ' ')}
                </span>
              </p>
              <p><strong>Payment:</strong> 
                <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                  submission.payment_confirmed ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {submission.payment_confirmed ? 'Confirmed' : 'Pending'}
                </span>
              </p>
              <p><strong>Submitted:</strong> {new Date(submission.created_at).toLocaleDateString()}</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-semibold mb-2">Abstract</h3>
            <p className="text-gray-700 bg-gray-50 p-4 rounded">{submission.abstract}</p>
          </div>

          <div className="flex gap-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
              Download PDF
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Assign Reviewer
            </button>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700">
              Generate Certificate
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}