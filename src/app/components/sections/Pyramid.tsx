import Image from "next/image"

export const Pyramid = () => {
    return (
        <section className="flex items-center justify-center w-full overflow-hidden mt-8">
            <div className="relative w-full max-w-7xl h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] mx-auto">
                <Image
                    src="/svgs/pyramid.svg"
                    alt="Pyramid Background"
                    fill
                    className="object-contain"
                    priority
                />

                {/* overlaid boxes positioned relative to the image using percentages */}
                <div className="absolute inset-0 z-10 pointer-events-none px-4 scale-50 xs:scale-60 sm:scale-75 md:scale-95">
                    {/* Box 1 - top */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-[10%] w-64 max-w-[90vw] text-center p-4 rounded-lg shadow-md pointer-events-auto scale-95 md:scale-100">
                        <div className="text-purple-700 text-xl md:text-2xl font-bold font-montserrat leading-tight text-center">
                            Beyond<br />Borders
                        </div>
                        <div className="mt-2 text-white text-xs md:text-sm font-normal font-poppins leading-relaxed mx-[8%]">
                            &quot;Early access to the right information is the key to a bright future.&quot;
                            <br />We unite change-makers, professionals, and communities across the globe.
                        </div>
                    </div>

                    {/* Box 2 - bottom-left */}
                    <div className="absolute left-[28%] top-[51%] w-64 max-w-[40vw] text-right p-4 rounded-lg shadow-md pointer-events-auto scale-95 md">
                        <div className="text-purple-700 text-xl md:text-2xl font-bold font-montserrat leading-tight text-right">
                            Beyond<br />Gatekeepers
                        </div>
                        <div className="mt-2 text-white text-xs md:text-sm font-normal font-poppins leading-relaxed text-right ml-[-5%]">
                            &quot;Opportunities shouldn&rsquo;t be locked by privilege.&quot; <br /> We remove barriers, democratize access, and let talent shine through proof of work.
                        </div>
                    </div>

                    {/* Box 3 - bottom-right */}
                    <div className="absolute md:right-[28%] md:top-[51%] xs:right-[1%] w-64 max-w-[40vw] text-left p-4 rounded-lg shadow-md pointer-events-auto scale-95 ">
                        <div className="text-purple-700 text-xl md:text-2xl font-bold font-montserrat leading-tight text-left">
                            Beyond<br />Syllabus
                        </div>
                        <div className="mt-2 text-white text-xs md:text-sm font-normal font-poppins leading-relaxed text-left mr-[-1%]">
                            &quot;Learning doesn&apos;t end where textbooks stop.&quot;
                            <br />We open doors to curiosity, skills, and real-world learning beyond the classroom.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}