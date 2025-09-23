"use client";

import Image from "next/image";
import { useState } from "react";

const FAQs = [
    {
        question: "What is The Purple Movement?",
        answer: "We believe talent should never be locked behind privilege. We build platforms and networks where opportunities come from skills and proof of work, not background."
    },
    {
        question: "Who can join?",
        answer: "Everyone. If you're a student, teacher, professional, startup, or policymaker — we welcome you to learn, share, and grow with us."
    },
    {
        question: "What does 'Beyond Syllabus' mean?",
        answer: "It means going beyond textbooks — diving into curiosity, skills, collaboration, and proof of work that truly prepare you for the real world."
    },
    {
        question: "What does 'Beyond Gatekeepers' mean?",
        answer: "We believe talent should never be locked behind privilege. We build platforms and networks where opportunities come from skills and proof of work, not background."
    },
    {
        question: "What does 'Beyond Borders' mean?",
        answer: "Knowledge has no geography. We connect individuals, startups, and organizations across the world to learn, share, and solve problems without limits."
    },
    {
        question: "How can I contribute?",
        answer: "Just hit the Join Us button — that's where it begins."
    },
]

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
         <div className="w-full py-16 bg-black flex flex-col justify-center items-center gap-8">
             <div className="text-center text-white text-5xl font-semibold font-montserrat">FAQ</div>
             <div className="w-44 h-0 outline outline-2 -mt-2 outline-offset-[-1px] outline-purple-600"></div>
             <div className="w-[850.93px] text-center justify-start text-white/75 text-lg font-normal font-poppins">From creative challenges to impactful experiences, our events are designed to inspire, push boundaries, and open doors to new opportunities.</div>
             {FAQs.map((faq, index) => (
               <div
                 key={index}
                 className="w-[840px] rounded-2xl overflow-hidden bg-[linear-gradient(to_right,#7E22CE_0px,#7E22CE_19px,#0F172A_19px,#0F172A_100%)] transition-all duration-300 ease-in-out"
               >
                 <div
                   className="flex items-center justify-between px-6 h-24 cursor-pointer text-white transition-colors duration-200"
                   onClick={() => toggleFAQ(index)}
                 >
                   <div className="text-left text-lg pl-10 font-semibold font-montserrat">{faq.question}</div>
                   <Image
                     src={openIndex === index ? "/svgs/minusCircle.svg" : "/svgs/plusCircle.svg"}
                     alt={openIndex === index ? "Minus Circle" : "Plus Circle"}
                     width={30}
                     height={30}
                     className="opacity-60 transition-transform duration-200 hover:opacity-80"
                   />
                 </div>

                 <div 
                   className={`overflow-hidden transition-all duration-300 ease-in-out ${
                     openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                   }`}
                 ><div className="w-[634px] h-[0.08px] ml-12 outline outline-1 outline-offset-[-0.50px] outline-white" />
                   <div className="pl-15 pb-6 pt-4 pr-20 text-white/75 text-lg font-normal font-poppins">
                     {faq.answer}
                   </div>
                 </div>
               </div>
             ))}
         </div>
    )
}