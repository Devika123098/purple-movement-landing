'use client'

import { FaWhatsapp } from "react-icons/fa6"

interface StepFourProps {
  userName?: string
}

export default function StepFour({ userName = "Friend" }: StepFourProps) {
  const handleWhatsAppJoin = () => {
    window.open('https://chat.whatsapp.com/your-group-link', '_blank')
  }

  return (
    <div className="w-full px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-slate-900 rounded-xl px-6 py-10 sm:px-12 sm:py-12 text-center space-y-8 sm:space-y-10 shadow-md">
          {/* Thank you heading */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-montserrat text-white capitalize transition-all">
            Thank you {userName}
          </h1>

          {/* Subtext */}
          <p className="text-sm sm:text-base md:text-lg font-poppins text-white/90 max-w-xl mx-auto leading-relaxed">
            We've received your message. Our team will get back to you shortly.
          </p>

          {/* WhatsApp Join Button */}
          <button
            onClick={handleWhatsAppJoin}
            className="w-full sm:w-auto px-6 py-3 bg-violet-700 hover:bg-violet-600 text-white text-sm sm:text-lg font-bold font-montserrat rounded-3xl flex items-center justify-center gap-2 transition-all duration-300"
          >
            <span>Join WhatsApp</span>
            <FaWhatsapp className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}