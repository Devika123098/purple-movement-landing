import Image from 'next/image';

export const Contact = () => {
  return (
    <div className="w-full max-w-[1070px] bg-slate-900 rounded-[50px] overflow-hidden mx-auto mt-12 p-6 sm:p-10 relative flex flex-col sm:flex-row items-center gap-6 sm:gap-10 h-auto sm:h-96">
      
      {/* Image */}
      <div className="relative w-36 h-36 sm:w-80 sm:h-80 flex-shrink-0">
        <Image 
          src="/images/qtnmark.png" 
          alt="Question mark"
          fill
          className="object-contain"
        />
      </div>

      {/* Text and Input */}
      <div className="flex flex-col items-start w-full sm:w-auto">
        {/* Headings */}
        <div className="text-3xl sm:text-5xl font-semibold font-montserrat text-white sm:mb-4 leading-tight">
          Any <br />
          <span className="text-purple-600">Questions?</span>
        </div>

        {/* Subtext */}
        <div className="text-lg sm:text-2xl font-medium font-montserrat text-white mb-6 sm:mb-10 leading-snug">
          We&apos;re here to help, reach out anytime!
        </div>

        {/* Input */}
        <input 
          type="text"
          placeholder="Text here..."
          className="w-full sm:w-[544px] h-12 rounded border border-stone-500 bg-transparent px-4 text-zinc-300 text-base sm:text-lg font-poppins placeholder:text-zinc-400"
        />
      </div>

    </div>
  );
};
