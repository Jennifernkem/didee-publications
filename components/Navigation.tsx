'use client';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b shadow-sm relative z-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3 md:space-x-4">
            <img src="/Black Elegant Modern Name Initials Monogram Logo.png" alt="Didee Publications" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">Didee Publications</h1>
              <p className="text-xs md:text-sm text-gray-600">International Journal Publishing</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="/articles" className="text-gray-700 hover:text-blue-600">Articles</a>
            <a href="/reviewers" className="text-gray-700 hover:text-blue-600">Editorial Board</a>
            <a href="/journal-info" className="text-gray-700 hover:text-blue-600">Journal Info</a>
            <a href="/submit" className="text-gray-700 hover:text-blue-600">Submit Article</a>
          </nav>
          
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <a href="/" className="text-gray-700 hover:text-blue-600 py-2">Home</a>
              <a href="/about" className="text-gray-700 hover:text-blue-600 py-2">About</a>
              <a href="/articles" className="text-gray-700 hover:text-blue-600 py-2">Articles</a>
              <a href="/reviewers" className="text-gray-700 hover:text-blue-600 py-2">Editorial Board</a>
              <a href="/journal-info" className="text-gray-700 hover:text-blue-600 py-2">Journal Info</a>
              <a href="/submit" className="text-gray-700 hover:text-blue-600 py-2">Submit Article</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}