'use client';

import Image from 'next/image';

export const Contact = () => {
  return (
    <div className="w-[90%] lg:w-[1070px] mx-auto mt-16 px-4 sm:px-6 py-10 sm:py-14 bg-slate-900 rounded-[28px] sm:rounded-[50px] flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8 sm:gap-12">
      
      {/* Image Section */}
      <div className="relative w-24 h-24 sm:w-48 sm:h-48 md:w-64 md:h-64 flex-shrink-0">
        <Image 
          src="/images/qtnmark.png" 
          alt="Question Mark"
          fill
          className="object-contain"
        />
      </div>

      {/* Content Section */}
      <div className="w-full flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold font-montserrat text-white leading-tight">
          Any <br />
          <span className="text-purple-600">Questions?</span>
        </h2>

        {/* Subtext */}
        <p className="text-sm sm:text-base md:text-lg text-white/80 font-medium font-poppins max-w-xl leading-relaxed">
          We're here to help — reach out anytime!
        </p>

        {/* Input */}
        <input 
          type="text"
          placeholder="Type your question..."
          className="w-full max-w-md h-11 sm:h-12 bg-transparent border border-stone-500 text-white text-sm sm:text-base px-4 rounded font-poppins placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
        />
      </div>
    </div>
  );
};