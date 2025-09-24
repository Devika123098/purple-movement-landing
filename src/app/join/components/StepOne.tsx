'use client'

import Image from 'next/image'

interface StepOneProps {
    selectedOption: string | null
    onCardClick: (optionId: string) => void
}

export default function StepOne({ selectedOption, onCardClick }: StepOneProps) {
    const options = [
        { 
          id: 'organization', 
          label: 'Organization', 
          text:"We're building more than a movement — we're uniting dreamers, doers, and changemakers to shape a borderless future. A future where what you create speaks louder than what you claim. Be part of the change.",
          svgPath: "/svgs/org.svg"
        },
        { 
          id: 'government', 
          label: 'Government', 
          text:"We're building more than a movement — we're uniting dreamers, doers, and changemakers to shape a borderless future. A future where what you create speaks louder than what you claim. Be part of the change.", 
          svgPath: "/svgs/gov.svg" 
        },
        { 
          id: 'individual', 
          label: 'Individual', 
          text:"We're building more than a movement — we're uniting dreamers, doers, and changemakers to shape a borderless future. A future where what you create speaks louder than what you claim. Be part of the change.", 
          svgPath: "/svgs/ind.svg" 
        }
    ]

    return (
        <div className="space-y-12">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-5xl font-bold font-montserrat capitalize">
                    What Defines You?
                </h1>
                <p className="text-lg font-normal font-poppins text-white/80 capitalize">
                    Understanding The things that define you.
                </p>
            </div>

            {/* Selection Cards */}
            <div className="flex justify-center items-center gap-8 flex-wrap">
                {options.map((option) => (
                    <button
                        key={option.id}
                        onClick={() => onCardClick(option.id)}
                        className={`w-60 h-64 relative bg-slate-900/75 rounded-lg shadow-lg border transition-all duration-300 group ${
                            selectedOption === option.id 
                                ? 'border-violet-700 bg-slate-800/90' 
                                : 'border-black/50 hover:border-violet-700/50'
                        }`}
                    >
                        {/* Icon Container - Only visible on hover */}
                        <div className="absolute top-[35px] left-[20px] w-10 h-10 bg-white rounded flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Image
                                src={option.svgPath}
                                alt={option.label}
                                width={24}
                                height={24}
                            />
                        </div>

                        {/* Arrow - Only visible on hover */}
                        <div className="absolute bottom-[19px] right-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Image
                                src="/svgs/arrow1.svg"
                                alt="Arrow"
                                width={20}
                                height={20}
                            />
                        </div>

                        {/* Default Label */}
                        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                            <span className="text-xl font-bold font-montserrat text-white">
                                {option.label}
                            </span>
                        </div>
                        
                        {/* Hover Text - Left aligned */}
                        <div className="absolute inset-0 flex items-start justify-start p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-52 justify-start text-left text-white/75 text-xs font-normal font-Poppins capitalize mt-16">
                                {option.text}
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}