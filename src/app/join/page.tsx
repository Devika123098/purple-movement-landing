'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Navbar } from '../components/layout/Navbar'
import StepOne from './components/StepOne'
import StepTwo from './components/StepTwo'
import StepThree from './components/StepThree'
import StepFour from './components/StepFour'

export default function JoinUsPage() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [selectedFromPrevious, setSelectedFromPrevious] = useState<string | null>(null)
  const [currentStep, setCurrentStep] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [userName, setUserName] = useState<string>('Friend')

  const steps = [
    { number: 1, active: true },
    { number: 2, active: false },
    { number: 3, active: false },
    { number: 4, active: false }
  ]

  const handleCardClick = (optionId: string) => {
    setSelectedOption(optionId)
    setSelectedFromPrevious(optionId)
    setIsTransitioning(true)

    setTimeout(() => {
      setCurrentStep(prev => Math.min(prev + 1, 4))
      setSelectedOption(null)
      setIsTransitioning(false)
    }, 300)
  }

  const handleNextStep = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentStep(prev => Math.min(prev + 1, 4))
      setIsTransitioning(false)
    }, 300)
  }

  const handleBackStep = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentStep(prev => Math.max(prev - 1, 1))
      setIsTransitioning(false)
    }, 300)
  }

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne selectedOption={selectedOption} onCardClick={handleCardClick} />
      case 2:
        return <StepTwo selectedFromPrevious={selectedFromPrevious} onNext={handleNextStep} onBack={handleBackStep} />
      case 3:
        return <StepThree selectedFromPrevious={selectedFromPrevious} onNext={handleNextStep} onBack={handleBackStep} onNameChange={setUserName} />
      case 4:
        return <StepFour userName={userName} />
      default:
        return <StepOne selectedOption={selectedOption} onCardClick={handleCardClick} />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#020309] via-[#05041b] to-[#020309] text-white">
      <Navbar />

      <main className="flex items-start justify-center pt-24 pb-12 px-4 sm:px-6 md:px-8">
        <div className="relative w-full max-w-7xl mx-auto z-10">
          {/* Background Image */}
          <div className="absolute top-[160px] left-0 w-full h-[70vh] sm:h-[90vh] z-0 overflow-hidden hidden xs:block">
            <Image
              src="/images/formbg.png"
              alt="Background"
              fill
              className="object-cover opacity-40"
            />
          </div>

          {/* Form Content */}
          <div className={`relative z-10 transition-opacity duration-300 ${
            isTransitioning ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}>
            {renderCurrentStep()}

            {/* Progress Steps */}
            <div className="flex items-center justify-center gap-2 xs:gap-4 pt-10 flex-wrap">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  {/* Step Circle */}
                  <div className="relative">
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 ${
                        step.number === currentStep
                          ? 'border-white'
                          : step.number < currentStep
                          ? 'border-violet-700'
                          : 'border-white/40'
                      }`}
                    />
                    <div
                      className={`absolute inset-1 rounded-full ${
                        step.number <= currentStep
                          ? 'bg-violet-700'
                          : 'bg-violet-800/50'
                      }`}
                    />
                    <span
                      className={`absolute inset-0 flex items-center justify-center text-xs sm:text-sm font-bold font-montserrat ${
                        step.number <= currentStep ? 'text-white' : 'text-white/50'
                      }`}
                    >
                      {step.number < currentStep ? '✓' : step.number}
                    </span>
                  </div>

                  {/* Connector */}
                  {index < steps.length - 1 && (
                    <div
                      className={`w-6 sm:w-10 h-0.5 mx-1 sm:mx-2 ${
                        step.number < currentStep
                          ? 'bg-violet-700'
                          : 'bg-white/30'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}