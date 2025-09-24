'use client'

import { useState } from 'react'

interface StepThreeProps {
    selectedFromPrevious?: string | null
    onNext?: () => void
    onBack?: () => void
    onNameChange?: (name: string) => void
}

export default function StepThree({ selectedFromPrevious, onNext, onBack, onNameChange }: StepThreeProps) {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [notInterested, setNotInterested] = useState<boolean>(false)
    const [interested, setInterested] = useState<boolean>(false)

    const isFormValid = name.trim() && email.trim() && phone.trim()

    return (
        <div className="space-y-12">
            {/* Header */}
            <div className="space-y-8 ml-50">
                <h1 className="text-5xl font-bold font-montserrat capitalize text-white text-left">
                    Your Details
                </h1>
                
                {/* Interest Checkboxes */}
                <div className="flex items-center justify-start gap-16">
                    <label className="flex items-center space-x-3 cursor-pointer">
                        <div className="relative">
                            <input 
                                type="checkbox" 
                                checked={notInterested}
                                onChange={(e) => setNotInterested(e.target.checked)}
                                className="w-5 h-5 rounded-sm border border-white bg-transparent focus:ring-violet-500 appearance-none focus:outline-none"
                            />
                            {notInterested && (
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            )}
                        </div>
                        <span className="text-white text-xl font-medium font-poppins capitalize">Not Interested</span>
                    </label>
                    
                    <label className="flex items-center space-x-3 cursor-pointer">
                        <div className="relative">
                            <input 
                                type="checkbox" 
                                checked={interested}
                                onChange={(e) => setInterested(e.target.checked)}
                                className="w-5 h-5 rounded-sm border border-white bg-transparent focus:ring-violet-500 appearance-none focus:outline-none"
                            />
                            {interested && (
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            )}
                        </div>
                        <span className="text-white text-xl font-medium font-poppins capitalize">Interested</span>
                    </label>
                </div>
            </div>

            {/* Form Fields */}
            <div className="max-w-[864px] mx-auto space-y-12">
                {/* Name Field */}
                <div className="space-y-4">
                    <label className="block text-white text-2xl font-bold font-montserrat capitalize text-left">
                        Name:
                    </label>
                    <div className="relative">
                        <input 
                            type="text" 
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                                onNameChange?.(e.target.value)
                            }}
                            className="w-full h-12 px-4 bg-transparent border-[1.5px] border-white rounded text-white placeholder-white/60 focus:border-violet-700 focus:outline-none transition-colors"
                            placeholder="Enter your full name"
                        />
                    </div>
                </div>

                {/* Email Field */}
                <div className="space-y-4">
                    <label className="block text-white text-2xl font-bold font-montserrat capitalize text-left">
                        Email:
                    </label>
                    <div className="relative">
                        <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full h-12 px-4 bg-transparent border-[1.5px] border-white rounded text-white placeholder-white/60 focus:border-violet-700 focus:outline-none transition-colors"
                            placeholder="Enter your email address"
                        />
                    </div>
                </div>

                {/* Phone Field */}
                <div className="space-y-4">
                    <label className="block text-white text-2xl font-bold font-montserrat capitalize text-left">
                        Ph.No:
                    </label>
                    <div className="relative">
                        <input 
                            type="tel" 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full h-12 px-4 bg-transparent border-[1.5px] border-white rounded text-white placeholder-white/60 focus:border-violet-700 focus:outline-none transition-colors"
                            placeholder="Enter your phone number"
                        />
                    </div>
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
                    disabled={!isFormValid}
                    className={`w-32 p-2.5 rounded flex justify-center items-center gap-2.5 transition-colors ${
                        isFormValid 
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