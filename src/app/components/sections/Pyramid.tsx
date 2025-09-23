import Image from "next/image"

export const Pyramid = () => {
    return (
        <section className="flex items-center justify-center w-full ml-[2px] overflow-x-hidden">
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] overflow-hidden">
            <Image
                src="/svgs/pyramid.svg"
                alt="Pyramid Background"
                fill
                className="object-contain"
                priority
            />

            {/* overlaid boxes positioned relative to the image using percentages */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                {/* Box 1 - top (adjust percentages as needed) */}
                <div className="absolute left-156 top-20 w-60 text-center p-4 rounded-lg shadow-md pointer-events-auto scale-90">
                <div className="text-purple-700 w-50 text-2xl font-bold font-montserrat leading-tight text-center">
                    Beyond Borders
                </div>
                <div className="mt-2 text-white text-sm font-semibold font-poppins leading-relaxed">
                    &quot;Early access to the right information is the key to a bright future.&quot;
                    <br />We unite change-makers, professionals, and communities across the globe.
                </div>
                </div>
                {/* Box 2 - bottom-left */}
                <div className="absolute left-120 top-90 w-60 text-right p-4 rounded-lg shadow-md pointer-events-auto scale-90">
                <div className="text-purple-700 w-50 text-2xl font-bold font-montserrat leading-tight text-right">
                    Beyond Gatekeepers
                </div>
                <div className="mt-2 text-white text-sm font-semibold font-poppins leading-relaxed text-right  ml-[-35px]">
                    &quot;Opportunities shouldn&rsquo;t be locked by privilege.&quot; <br /> We remove barriers, democratize access, and let talent shine through proof of work.
                </div>
                </div>

                {/* Box 3 - bottom-right  */}
                <div className="absolute right-120 top-90 w-60 text-left p-4 rounded-lg shadow-md pointer-events-auto scale-90">
                  <div className="text-purple-700 w-50 text-2xl font-bold font-montserrat leading-tight text-left ">
                    Beyond Syllabus
                  </div>
                  <div className="mt-2 text-white text-sm font-semibold font-poppins leading-relaxed text-left mr-[-5px]">
                    &quot;Learning doesn&apos;t end where textbooks stop.&quot;
                    <br />We open doors to curiosity, skills, and real-world learning beyond the classroom.
                  </div>
                </div>
            </div>
            </div>
        </section>
    )
}