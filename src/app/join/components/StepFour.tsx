'use client'

import { FaWhatsapp } from "react-icons/fa6"

interface StepFourProps {
    onComplete?: () => void
    userName?: string
}

export default function StepFour({ onComplete, userName = "Friend" }: StepFourProps) {
    const handleWhatsAppJoin = () => {
        // Handle WhatsApp group join logic here
        window.open('https://chat.whatsapp.com/your-group-link', '_blank')
    }

    return (
        <div className="space-y-12">
            {/* Main Content Card */}
            <div className="max-w-[904px] mx-auto">
                <div className="bg-slate-900 rounded-[10px] p-16 text-center space-y-12">
                    {/* Thank You Message */}
                    <h1 className="text-5xl font-bold font-montserrat capitalize text-white">
                        Thank You {userName}
                    </h1>
                    
                    {/* Description */}
                    <div className="max-w-[463px] mx-auto">
                        <p className="text-white text-xl font-normal font-poppins capitalize">
                            We've received your message and our team will respond shortly.
                        </p>
                    </div>
                    
                    {/* WhatsApp Join Button */}
                    <button 
                        onClick={handleWhatsAppJoin}
                        className="px-7 py-3.5 bg-violet-700 hover:bg-violet-600 rounded-3xl inline-flex justify-center items-center gap-2.5 transition-colors"
                    >
                        <div className="text-center text-white text-xl font-bold font-montserrat capitalize">
                            Join Whatsapp
                        </div>
                        <div className="w-5 h-5  rounded-sm flex items-center justify-center">
                            <a href="#" className="group">
                                <FaWhatsapp className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors" />
                            </a>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}