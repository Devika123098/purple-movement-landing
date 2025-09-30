'use client'

import { useState } from 'react'

interface StepTwoProps {
  selectedFromPrevious?: string | null
  onNext?: () => void
  onBack?: () => void
}

export default function StepTwo({
  selectedFromPrevious,
  onNext,
  onBack,
}: StepTwoProps) {
  const [selectedDefining, setSelectedDefining] = useState('')
  const [whyHereText, setWhyHereText] = useState('')

  const definingOptions = [
    'Innovation & Technology',
    'Social Impact & Change',
    'Creative Expression',
    'Business & Entrepreneurship',
    'Education & Learning',
    'Community Building',
    'Environmental Sustainability',
    'Cultural Preservation',
  ]

  return (
    <div className="w-full space-y-8 px-4 sm:px-6">
      {/* First Question */}
      <div className="space-y-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold font-montserrat capitalize text-white text-left">
          What defines you?
        </h1>

        <div className="max-w-[864px] w-full mx-auto">
          <div className="relative">
            <select
              value={selectedDefining}
              onChange={(e) => setSelectedDefining(e.target.value)}
              className="w-full h-10 px-3 py-2 pr-10 rounded-md border border-white bg-transparent text-white text-sm font-semibold font-roboto capitalize appearance-none cursor-pointer focus:outline-none focus:border-violet-700 transition-colors"
            >
              <option value="" className="bg-slate-900 text-white/75">
                Select...
              </option>
              {definingOptions.map((option) => (
                <option
                  key={option}
                  value={option}
                  className="bg-slate-900 text-white"
                >
                  {option}
                </option>
              ))}
            </select>

            {/* Custom Arrow */}
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
              <svg
                className="w-4 h-4 text-white/75"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Second Question */}
      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold font-montserrat capitalize text-white text-left">
          Why are you here?
        </h2>

        <div className="max-w-[864px] w-full mx-auto">
          <textarea
            value={whyHereText}
            onChange={(e) => setWhyHereText(e.target.value)}
            placeholder="I'm here for Purple Movement to learn, share, and turn ideas into real-world solutions without barriers..."
            className="w-full h-36 sm:h-40 pl-4 pr-4 py-3 bg-slate-900 rounded-md text-white text-sm font-medium font-roboto placeholder-white/60 resize-none focus:outline-none focus:ring-2 focus:ring-violet-700 transition"
            rows={5}
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 max-w-[864px] w-full mx-auto">
        <button
          onClick={onBack}
          className="w-full sm:w-32 py-2 bg-purple-700/60 rounded-md flex justify-center items-center gap-2 hover:bg-purple-700 transition-colors"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-white text-sm font-inter">Back</span>
        </button>

        <button
          onClick={onNext}
          disabled={!selectedDefining || !whyHereText.trim()}
          className={`w-full sm:w-32 py-2 rounded-md flex justify-center items-center gap-2 transition-colors ${
            selectedDefining && whyHereText.trim()
              ? 'bg-purple-700 hover:bg-purple-600'
              : 'bg-purple-700/40 cursor-not-allowed'
          }`}
        >
          <span className="text-white text-sm font-inter">Next</span>
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Summary */}
      {selectedFromPrevious && (
        <div className="text-xs sm:text-sm text-white/60 text-center mt-4">
          Joining as:{' '}
          <span className="text-violet-500 capitalize font-semibold">
            {selectedFromPrevious}
          </span>
        </div>
      )}
    </div>
  )
}