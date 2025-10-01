'use client'

import { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

// Custom styles for the phone input to match dark theme
const phoneInputStyles = `
  .react-tel-input {
    width: 100% !important;
  }

  .react-tel-input .form-control {
    width: 100% !important;
    background-color: transparent !important;
    border: 1px solid white !important;
    border-left: none !important;
    color: white !important;
    border-radius: 0 6px 6px 0 !important;
    height: 44px !important;
  }
  
  .react-tel-input .form-control:focus {
    border-color: #8b5cf6 !important;
    box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.5) !important;
  }
  
  .react-tel-input .flag-dropdown {
    background-color: transparent !important;
    border: 1px solid white !important;
    border-right: 1px solid white !important;
    border-radius: 6px 0 0 6px !important;
    height: 44px !important;
  }
  
  .react-tel-input .flag-dropdown:hover {
    background-color: transparent !important;
  }
  
  .react-tel-input .flag-dropdown.open {
    background-color: transparent !important;
  }
  
  .react-tel-input .selected-flag {
    height: 44px !important;
    padding: 0 12px !important;
    background-color: transparent !important;
  }
  
  .react-tel-input .selected-flag:hover {
    background-color: transparent !important;
  }
  
  .react-tel-input .country-list {
    background-color: #374151 !important;
    border: 1px solid #6b7280 !important;
    border-radius: 6px !important;
    color: white !important;
  }
  
  .react-tel-input .country-list::-webkit-scrollbar {
    width: 2px !important;
  }

  .react-tel-input .country-list::-webkit-scrollbar-track {
    background: rgb(33, 1, 46) !important;
  }

  .react-tel-input .country-list::-webkit-scrollbar-thumb {
    background: rgb(92, 0, 128) !important;
    border-radius: 20px !important;
  }
  
  .react-tel-input .country-list .country {
    background-color: #374151 !important;
    color: white !important;
  }
  
  .react-tel-input .country-list .country:hover {
    background-color: #4b5563 !important;
  }
  
  .react-tel-input .country-list .country.highlight {
    background-color: #8b5cf6 !important;
  }
  
  .react-tel-input .country-list .search {
    background-color: #374151 !important;
    border: 1px solid #6b7280 !important;
    color: white !important;
  }
  
  .react-tel-input .country-list .search::placeholder {
    color: #9ca3af !important;
  }
  
  .react-tel-input.error .form-control {
    border-color: #ef4444 !important;
  }
  
  .react-tel-input.error .flag-dropdown {
    border-color: #ef4444 !important;
  }
  
  .react-tel-input.error .form-control:focus {
    border-color: #ef4444 !important;
    box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.5) !important;
  }
  
  .react-tel-input.disabled .form-control {
    opacity: 0.5 !important;
    cursor: not-allowed !important;
  }
  
  .react-tel-input.disabled .flag-dropdown {
    opacity: 0.5 !important;
    cursor: not-allowed !important;
  }
`

interface StepThreeProps {
  selectedFromPrevious?: string | null
  onNext?: () => void
  onBack?: () => void
  onNameChange?: (name: string) => void
}

export default function StepThree({
  selectedFromPrevious,
  onNext,
  onBack,
  onNameChange,
}: StepThreeProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [notInterested, setNotInterested] = useState(false)
  const [interested, setInterested] = useState(false)

  // Validation functions
  const validateName = (name: string) => {
    if (!name.trim()) return "Name is required"
    if (name.trim().length < 2) return "Name must be at least 2 characters"
    if (!/^[a-zA-Z\s]+$/.test(name.trim())) return "Name can only contain letters and spaces"
    return ""
  }

  const validateEmail = (email: string) => {
    if (!email.trim()) return "Email is required"
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) return "Please enter a valid email address"
    return ""
  }

  const validatePhone = (phone: string) => {
    if (!phone.trim()) return "Phone number is required"
    // react-phone-input-2 returns formatted phone with country code
    if (phone.length < 7) return "Phone number is too short"
    if (phone.length > 15) return "Phone number is too long"
    return ""
  }

  // Get validation errors (only show for touched fields)
  const nameError = !notInterested && touchedFields.name ? validateName(name) : ""
  const emailError = !notInterested && touchedFields.email ? validateEmail(email) : ""
  const phoneError = !notInterested && touchedFields.phone ? validatePhone(phone) : ""

  const isFormValid = notInterested || (name.trim() && email.trim() && phone.trim() && !nameError && !emailError && !phoneError)

  return (
    <div className="w-full px-4 sm:px-6 space-y-8">
      {/* Inject custom styles */}
      <style dangerouslySetInnerHTML={{ __html: phoneInputStyles }} />
      
      {/* Header & Description */}
      <div className="space-y-6">
        <div className="max-w-[864px] w-full mx-auto space-y-3">
          <h1 className="text-2xl sm:text-4xl font-bold font-montserrat text-white capitalize text-left pl-3 sm:pl-4">
            Tell Us About You
          </h1>
          <div className="justify-start text-white text-base font-normal font-montserrat capitalize pl-3 sm:pl-4">
            We&apos;d love to hear from you, or you can stay anonymous.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-16 items-start sm:items-center">
          {/* Not Interested */}
          <label className="flex items-center space-x-3 cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                checked={notInterested}
                onChange={(e) => setNotInterested(e.target.checked)}
                className="w-5 h-5 border border-white bg-transparent appearance-none rounded-sm focus:ring-violet-500 focus:outline-none"
              />
              {notInterested && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
            <span className="text-white text-sm sm:text-base font-medium font-poppins capitalize">
              Not Interested
            </span>
          </label>

          {/* Interested */}
          <label className="flex items-center space-x-3 cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                checked={interested}
                onChange={(e) => setInterested(e.target.checked)}
                className="w-5 h-5 border border-white bg-transparent appearance-none rounded-sm focus:ring-violet-500 focus:outline-none"
              />
              {interested && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
            <span className="text-white text-sm sm:text-base font-medium font-poppins capitalize">
              Interested
            </span>
          </label>
        </div>
      </div>

      {/* Form Fields */}
      <div className="max-w-[864px] w-full mx-auto space-y-8">
        {/* Name */}
        <div className="space-y-2">
          <label className="block text-sm sm:text-lg text-white font-bold font-montserrat capitalize">
            Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
              onNameChange?.(e.target.value)
            }}
            className="w-full h-11 px-4 text-sm sm:text-base bg-transparent border border-white rounded text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-violet-700"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="block text-sm sm:text-lg text-white font-bold font-montserrat capitalize">
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-11 px-4 text-sm sm:text-base bg-transparent border border-white rounded text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-violet-700"
            placeholder="Enter your email address"
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label className="block text-sm sm:text-lg text-white font-bold font-montserrat capitalize">
            Phone:
          </label>
          <PhoneInput
            country={'us'}
            value={phone}
            onChange={(value) => onChange({ phone: value })}
            onFocus={() => setTouchedFields(prev => ({ ...prev, phone: true }))}
            disabled={notInterested}
            containerClass={`w-full ${phoneError && !notInterested ? 'error' : ''} ${notInterested ? 'disabled' : ''}`}
            inputProps={{
              placeholder: 'Enter your phone number',
              disabled: notInterested,
            }}
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-between items-center max-w-[864px] w-full mx-auto">
        <button
          onClick={onBack}
          className="w-full sm:w-32 py-2 bg-purple-700/60 hover:bg-purple-700 rounded flex justify-center items-center gap-1.5 transition-colors"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-white text-sm font-inter">Back</span>
        </button>

        <button
          onClick={onNext}
          disabled={!isFormValid}
          className={`w-full sm:w-32 py-2 rounded flex justify-center items-center gap-1.5 transition-colors ${
            isFormValid
              ? 'bg-purple-700 hover:bg-purple-600'
              : 'bg-purple-700/50 cursor-not-allowed'
          }`}
        >
          <span className="text-white text-sm font-inter">Next</span>
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Selected Role Footer */}
      {selectedFromPrevious && (
        <p className="text-xs sm:text-sm text-white/60 text-center mt-4">
          Joining as:{' '}
          <span className="text-violet-400 font-medium capitalize">
            {selectedFromPrevious}
          </span>
        </p>
      )}
    </div>
  )
}