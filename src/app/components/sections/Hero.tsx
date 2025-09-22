import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-img.png"
        alt="Hero background"
        fill
        className="object-cover w-full mt-20"
        priority
      />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 transform scale-125 md:scale-125">
        <main className="flex flex-col items-center md:static relative md:top-0 mt-[-175px]">
          <div className="w-[866px] py-[5px] inline-flex flex-col justify-start items-center gap-4">
            <div className="self-stretch text-center justify-start text-white text-4xl font-bold font-['Helvetica'] uppercase">
              We Are the
            </div>
            <div className="self-stretch text-center justify-start bg-gradient-to-t from-[#8E00FF] to-[#D8B0FA] bg-clip-text
    text-transparent text-7xl font-extrabold font-['Montserrat'] uppercase">
              Purple Movement
            </div>
            <div className="w-[831.17px] text-center justify-start text-white/75 text-xl font-thin font-['Poppins'] capitalize">
              We&rsquo;re building more than a movement — we&rsquo;re uniting dreamers, doers, and
              changemakers to shape a borderless future. A future where what you create
              speaks louder than what you claim. Be part of the change.
            </div>
            <button
              type="button"
              className="w-40 h-10 p-2.5 bg-purple-700 rounded-[20px] inline-flex justify-center items-center gap-2.5"
              aria-label="Join Us"
            >
              <span className="text-center justify-start text-stone-50 text-xl font-semibold font-['Poppins'] uppercase">
                Join Us
              </span>
            </button>
          </div>
        </main>
      </div>
    </section>
  )
}