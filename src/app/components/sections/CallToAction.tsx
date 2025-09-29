import Image from "next/image";

export const CallToAction = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-14 p-6 md:p-8 mt-16 md:mt-32">
      {/* Text Section */}
      <div className="max-w-full md:max-w-[701px] flex flex-col justify-start items-start gap-4">
        <div className="w-full bg-gradient-to-t from-[#D6A4FF] to-[#6F00CD] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl font-bold font-montserrat">
          This isn&apos;t the end.
        </div>
        <div className="w-full">
          <span className="text-white text-base sm:text-lg md:text-xl font-semibold font-montserrat">
            It&apos;s only the beginning. <br />
            The spark has just been ignited — and with every learner, teacher, and changemaker who joins us, it grows into a fire.
            <br /><br />
          </span>
          <span className="bg-gradient-to-l from-[#D6A4FF] to-[#6F00CD] bg-clip-text text-transparent text-lg sm:text-xl md:text-2xl font-bold font-montserrat">
            Together, we are the Purple Movement.
          </span>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 relative">
        <Image 
          fill
          src="/images/spiral.png"
          alt="Purple Movement spiral illustration"
          className="object-contain"
        />
      </div>
    </div>
  );
};
