'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Submission {
  id: string
  title: string
  author_name: string
  author_email: string
  field: string
  status: string
  payment_confirmed: boolean
  created_at: string
}

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchSubmissions()
  }, [])

  const fetchSubmissions = async () => {
    try {
      const response = await fetch('/api/admin/submissions')
      const data = await response.json()
      setSubmissions(data.submissions || [])
    } catch (error) {
      console.error('Error fetching submissions:', error)
    } finally {
      setLoading(false)
    }
  }

  const confirmPayment = async (submissionId: string) => {
    try {
      const response = await fetch('/api/admin/confirm-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ submissionId })
      })
      
      if (response.ok) {
        fetchSubmissions() // Refresh list
      }
    } catch (error) {
      console.error('Error confirming payment:', error)
    }
  }

  if (loading) return <div className="p-8">Loading...</div>

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <nav className="mt-4 space-x-6">
            <Link href="/admin" className="text-blue-600 font-medium">Dashboard</Link>
            <Link href="/admin/submissions" className="text-gray-600 hover:text-blue-600">All Submissions</Link>
            <Link href="/admin/reviewers" className="text-gray-600 hover:text-blue-600">Reviewers</Link>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">Total Submissions</h3>
            <p className="text-3xl font-bold text-blue-600">{submissions.length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">Pending Payment</h3>
            <p className="text-3xl font-bold text-yellow-600">
              {submissions.filter(s => !s.payment_confirmed).length}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">In Review</h3>
            <p className="text-3xl font-bold text-purple-600">
              {submissions.filter(s => s.status === 'in_review').length}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">Completed</h3>
            <p className="text-3xl font-bold text-green-600">
              {submissions.filter(s => s.status === 'completed').length}
            </p>
          </div>
        </div>

        {/* Recent Submissions */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">Recent Submissions</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Author</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Field</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Payment</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {submissions.slice(0, 10).map((submission) => (
                  <tr key={submission.id}>
                    <td className="px-6 py-4 text-sm font-mono">{submission.id}</td>
                    <td className="px-6 py-4 text-sm">{submission.title}</td>
                    <td className="px-6 py-4 text-sm">{submission.author_name}</td>
                    <td className="px-6 py-4 text-sm">{submission.field}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        submission.status === 'completed' ? 'bg-green-100 text-green-800' :
                        submission.status === 'in_review' ? 'bg-purple-100 text-purple-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {submission.status.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        submission.payment_confirmed ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {submission.payment_confirmed ? 'Confirmed' : 'Pending'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm space-x-2">
                      {!submission.payment_confirmed && (
                        <button
                          onClick={() => confirmPayment(submission.id)}
                          className="bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700"
                        >
                          Confirm Payment
                        </button>
                      )}
                      <Link
                        href={`/admin/submissions/${submission.id}`}
                        className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}