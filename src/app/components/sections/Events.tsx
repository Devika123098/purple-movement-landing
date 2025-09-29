"use client";

import Image from "next/image";

export const Events = () => {
  return (
    <div
      className="w-full py-16 bg-black flex flex-col justify-center items-center gap-8 px-4"
      id="events"
    >
      {/* Title */}
      <div className="text-center text-white text-3xl sm:text-4xl md:text-5xl font-semibold font-montserrat">
        Events
      </div>

      {/* Subtitle */}
      <div className="max-w-2xl md:max-w-4xl text-center text-white/75 text-base sm:text-lg md:text-xl font-normal font-poppins">
        From creative challenges to impactful experiences, our events are
        designed to inspire, push boundaries, and open doors to new
        opportunities.
      </div>

      {/* Events Container */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 mt-8">
        {/* Enter the Flow Event - Left */}
        <div className="w-full max-w-sm md:w-72 md:h-80 opacity-80 md:opacity-25 bg-gray-900 rounded-lg shadow-md shadow-black/25 border border-white/50 relative hover:opacity-100 hover:scale-105 transition-all duration-300 z-10 md:-mr-14 group cursor-pointer">
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-gray-900/50" />
            <div className="flex flex-col items-center justify-center h-full p-6">
              <div className="mb-12">
                <Image
                  src="/images/flow.png"
                  alt="Enter the Flow Event"
                  width={140}
                  height={120}
                  className="object-contain rounded-lg border border-white/50"
                />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="text-left text-white text-lg sm:text-xl font-semibold font-montserrat mb-2">
                Enter the Flow
              </div>
              <div className="text-left text-white/75 text-sm font-poppins">
                A flash UI/UX hackathon where creativity meets speedy
              </div>
            </div>
            {/* Arrow */}
            <div className="absolute bottom-6 right-6">
              <Image
                src="/svgs/arrow.svg"
                alt="Arrow"
                width={24}
                height={24}
                className="opacity-60"
              />
            </div>
          </div>
        </div>

        {/* Saddle Up Event - Center */}
        <div className="w-full max-w-md md:w-96 md:h-96 bg-gray-900 rounded-lg shadow-md shadow-black/25 border border-white/50 relative z-20 group cursor-pointer hover:scale-105 transition-transform duration-300">
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <div className="flex flex-col items-center justify-center h-full p-6">
              <div className="mb-10">
                <Image
                  src="/images/saddle.jpg"
                  alt="Saddle Up Event"
                  width={175}
                  height={200}
                  className="object-contain rounded-lg border border-white/50"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-left text-white text-xl sm:text-2xl font-bold font-montserrat mb-2">
                Saddle
              </div>
              <div className="text-left text-white/90 text-base sm:text-lg font-poppins">
                A skill-building event series to <br /> gear you up for
                opportunities.
              </div>
            </div>
            {/* Arrow */}
            <div className="absolute bottom-6 right-6">
              <Image
                src="/svgs/arrow.svg"
                alt="Arrow"
                width={24}
                height={24}
                className="opacity-100"
              />
            </div>
          </div>
        </div>

        {/* Stay Tuned Event - Right */}
        <div className="w-full max-w-sm md:w-72 md:h-80 opacity-80 md:opacity-25 bg-gray-900 rounded-lg shadow-md shadow-black/25 border border-white/50 flex flex-col items-center justify-center hover:opacity-100 hover:scale-105 transition-all duration-300 z-10 md:-ml-16 group cursor-pointer relative">
          <div className="text-center text-white/70 text-xl sm:text-2xl font-semibold font-montserrat">
            Stay Tuned...
          </div>
          {/* Arrow */}
          <div className="absolute bottom-6 right-6">
            <Image
              src="/svgs/arrow.svg"
              alt="Arrow"
              width={24}
              height={24}
              className="opacity-40"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
