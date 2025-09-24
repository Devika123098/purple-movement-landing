'use client'

import { useState } from 'react'

interface StepTwoProps {
    selectedFromPrevious?: string | null
    onNext?: () => void
    onBack?: () => void
}

export default function StepTwo({ selectedFromPrevious, onNext, onBack }: StepTwoProps) {
    const [selectedDefining, setSelectedDefining] = useState<string>('')
    const [whyHereText, setWhyHereText] = useState<string>('')

    const definingOptions = [
        'Innovation & Technology',
        'Social Impact & Change',
        'Creative Expression',
        'Business & Entrepreneurship',
        'Education & Learning',
        'Community Building',
        'Environmental Sustainability',
        'Cultural Preservation'
    ]

    return (
        <div className="space-y-12">
            {/* First Question */}
            <div className="space-y-6">
                <h1 className="text-5xl font-semibold font-montserrat capitalize text-white text-left ml-50">
                    What defines You?
                </h1>
                
                <div className="max-w-[864px] mx-auto">
                    <div className="relative">
                        <select 
                            value={selectedDefining}
                            onChange={(e) => setSelectedDefining(e.target.value)}
                            className="w-full h-11 px-2.5 py-2 pr-10 rounded border-[1.5px] border-white bg-transparent text-white text-base font-semibold font-roboto capitalize appearance-none cursor-pointer focus:outline-none focus:border-violet-700 transition-colors"
                        >
                            <option value="" className="bg-slate-900 text-white/75">Select...</option>
                            {definingOptions.map((option) => (
                                <option key={option} value={option} className="bg-slate-900 text-white">
                                    {option}
                                </option>
                            ))}
                        </select>
                        
                        {/* Custom Dropdown Arrow */}
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                            <svg className="w-4 h-4 text-white/75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            {/* Second Question */}
            <div className="space-y-6">
                <h2 className="text-5xl font-semibold font-montserrat capitalize text-white text-left ml-50">
                    Why are you here?
                </h2>
                
                <div className="max-w-[864px] mx-auto">
                    <textarea
                        value={whyHereText}
                        onChange={(e) => setWhyHereText(e.target.value)}
                        placeholder="I'm here for Purple Movement to learn, share, and turn ideas into real-world solutions without barriers...."
                        className="w-full h-48 pl-4 pr-11 py-6 bg-slate-900 rounded-[10px] text-white text-sm font-semibold font-roboto capitalize placeholder-white/75 resize-none focus:outline-none focus:ring-2 focus:ring-violet-700 transition-all"
                        rows={8}
                    />
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center max-w-[864px] mx-auto">
                <button 
                    onClick={onBack}
                    className="w-32 p-2.5 bg-purple-700/50 rounded flex justify-center items-center gap-2.5 hover:bg-purple-700/70 transition-colors"
                >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <div className="text-white text-xl font-normal font-inter">Back</div>
                </button>

                <button 
                    onClick={onNext}
                    disabled={!selectedDefining || !whyHereText.trim()}
                    className={`w-32 p-2.5 rounded flex justify-center items-center gap-2.5 transition-colors ${
                        selectedDefining && whyHereText.trim() 
                            ? 'bg-purple-700 hover:bg-purple-600' 
                            : 'bg-purple-700/50 cursor-not-allowed'
                    }`}
                >
                    <div className="text-white text-xl font-normal font-inter">Next</div>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {selectedFromPrevious && (
                <div className="text-sm text-white/60 text-center mt-8">
                    Joining as: <span className="text-violet-400 capitalize">{selectedFromPrevious}</span>
                </div>
            )}
        </div>
    )
}