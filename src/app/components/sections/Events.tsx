"use client";

import Image from "next/image";

export const Events = () => {
  return (
    <div className="w-full py-16 bg-black flex flex-col justify-center items-center gap-8">
      <div className="text-center text-white text-5xl font-semibold font-montserrat">
        Events
      </div>

      <div className="max-w-4xl text-center text-white/75 text-lg font-normal font-poppins">
        From creative challenges to impactful experiences, our events are
        designed to inspire, push boundaries, and open doors to new
        opportunities.
      </div>

      {/* Events Container with overlapping layout */}
      <div className="relative flex items-center justify-center mt-8">
        {/* Enter the Flow Event - Left Side */}
        <div className="w-72 h-80 opacity-25 bg-gray-900 rounded-lg shadow-md shadow-black/25
 border-[0.45px] border-white/50 relative hover:opacity-100 hover:scale-105 transition-all duration-300 z-10 -mr-14 group cursor-pointer">
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-gray-900/50" />
            <div className="flex flex-col items-center justify-center h-full p-6">
              <div className="mb-12">
                <Image
                  src="/images/flow.png"
                  alt="Enter the Flow Event"
                  width={140}
                  height={120}
                  className="object-contain rounded-lg border-[0.5px] border-white/50"
                />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="text-left text-white text-xl font-semibold font-montserrat mb-2">
                Enter the Flow
              </div>
              <div className="text-left text-white/75 text-sm font-poppins">
                A flash UI/UX hackathon where creativity meets speedy
              </div>
            </div>
            {/* Arrow indicator */}
            <div className="absolute bottom-6 right-6">
              <Image
                src="/svgs/arrow.svg"
                alt="Arrow"
                width={30}
                height={30}
                className="opacity-60"
              />
            </div>
          </div>
        </div>

        {/* Saddle Up Event - Center (Main) */}
        <div className="w-96 h-96 bg-gray-900 rounded-[10px] shadow-md shadow-black/25 border border-white/50 relative z-20 group cursor-pointer hover:scale-105 transition-transform duration-300">
          <div className="relative w-full h-full rounded-[10px] overflow-hidden">
            <div className="flex flex-col items-center justify-center h-full p-6">
              <div className="mb-18">
                <Image
                  src="/images/saddle.jpg"
                  alt="Saddle Up Event"
                  width={175}
                  height={200}
                  className="object-contain rounded-lg border-[0.5px] border-white/50"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-left text-white text-2xl font-bold font-montserrat mb-2">
                Saddle
              </div>
              <div className="text-left text-white/90 text-lg font-poppins">
                A skill-building event series to <br />gear you up for opportunities.
              </div>
            </div>
            {/* Arrow indicator */}
            <div className="absolute bottom-6 right-6">
              <Image
                src="/svgs/arrow.svg"
                alt="Arrow"
                width={30}
                height={30}
                className="opacity-100"
              />
            </div>
          </div>
        </div>

        {/* Stay Tuned Event - Right Side */}
        <div className="w-72 h-80 opacity-25 bg-gray-900 rounded-lg shadow-md shadow-black/25 border border-white/50 flex flex-col items-center justify-center hover:opacity-100 hover:scale-105 transition-all duration-300 z-10 -ml-16 group cursor-pointer relative">
          <div className="ml-10 text-center text-white/60 text-3xl font-semibold font-montserrat">
            Stay Tuned...
          </div>
          <div className="absolute bottom-6 right-6">
            <Image
              src="/svgs/arrow.svg"
              alt="Arrow"
              width={30}
              height={30}
              className="opacity-40"
            />
          </div>
        </div>
      </div>
    </div>
  );
};