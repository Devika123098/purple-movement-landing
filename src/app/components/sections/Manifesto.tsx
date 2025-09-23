"use client";

import { useState, useEffect } from "react";

const sections = [
  [
    "We are the Manifestors of Change.",
    "We are not waiting for the future.",
    "We are building it with courage, code, creativity, and clarity.",
    "We are the voice of a generation that refuses to settle.",
  ],
  [
    "We are not consumers of culture.",
    "We are producers of purpose.",
    "We break barriers, not just for ourselves, but for every young mind daring to dream.",
    "We believe in ecosystems that empower, not limit.",
  ],
  [
    "In access, not gatekeeping.",
    "In bold visions, not borrowed templates.",
    "We are here to reclaim the narrative, To give confidence to the curious, Networks to the bold, And direction to the determined.",
    "This is The Purple Movement.",
    "A wave of youth power, purpose, and possibility.",
  ],
  [
    "A signal that change is not coming it's already here.",
    "We are the energy.",
    "We are the strategy.",
    "We are the spark.",
  ],
  [
    "And it starts now.",
  ],
];


const flatText: { line: string; section: number }[] = sections.flatMap(
  (section, sectionIndex) =>
    section.map((line) => ({
      line,
      section: sectionIndex,
    }))
);

export const Manifesto = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const lineHeight = 35; 
  const sectionGap = 40; 


  const lineOffsets = flatText.map((item, i) => {
    const section = item.section;
    const linesBefore = i;
    const gapsBefore = section; 
    return linesBefore * lineHeight + gapsBefore * sectionGap;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % flatText.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-10 bg-black flex flex-col justify-center items-center gap-5">
      {/* Title */}
      <div className="w-96 h-10 text-center flex justify-center items-center">
        <span className="text-white text-5xl font-bold font-montserrat">
          Our{" "}
          <span className="bg-gradient-to-r from-[#7F39FD] via-[#A462FD] to-[#DA9EFD] bg-clip-text text-transparent text-5xl font-bold font-montserrat">
            Manifesto
          </span>
        </span>
      </div>

      {/* Intro */}
      <div className="w-[500px] text-center text-white text-lg font-normal font-poppins">
        We are not waiting for the future. We are building it. With courage, code,
        creativity, and community.
      </div>

      <div className="w-6 h-16 flex justify-center items-center text-white text-5xl font-bold font-montserrat">
         “
      </div>

      {/* Scrolling text */}
      <div className="w-[784px] h-72 relative bg-slate-900 rounded-[20px] overflow-hidden flex items-center justify-center">
        <div
          className="transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateY(calc(50% - ${lineOffsets[currentIndex] + lineHeight / 2}px))`,
          }}
        >
          {flatText.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-center px-8 transition-all duration-1000 text-center will-change-transform
                ${
                  index === currentIndex
                    ? "text-violet-400 font-bold font-poppins scale-110"
                    : "text-white opacity-60 italic scale-95"
                }`}
              style={{
                fontSize: "18px",
                height: `${lineHeight}px`,
                marginBottom:
                  index < flatText.length - 1 &&
                  flatText[index + 1].section !== item.section
                    ? `${sectionGap}px`
                    : "0px", 
              }}
            >
              {item.line}
            </div>
          ))}
        </div>
      </div>

      <div className="w-6 h-16 flex justify-center items-center rotate-180 text-white text-5xl font-bold font-montserrat">
        “
      </div>

      <div className="w-[492.15px] text-center text-white text-xl font-normal font-poppins">
        This is The Purple Movement. <br />Learning with purpose. Powered by people.
      </div>
    </div>
  );
};