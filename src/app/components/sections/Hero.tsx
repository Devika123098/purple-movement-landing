import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-img.png"
        alt="Hero background"
        fill
        className="object-cover w-full h-full"
        priority
      />

      {/* Content overlay */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <main className="flex flex-col items-center">
          <div className="w-full max-w-3xl flex flex-col justify-start items-center gap-4">
            {/* Heading 1 */}
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold uppercase">
              We Are the
            </h1>

            {/* Heading 2 */}
            <h2 className="bg-gradient-to-t from-[#8E00FF] to-[#D8B0FA] bg-clip-text text-transparent 
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase font-['Montserrat']">
              Purple Movement
            </h2>

            {/* Subtext */}
            <p className="text-white/75 text-base sm:text-lg md:text-xl font-thin font-['Poppins'] capitalize px-2">
              We&rsquo;re building more than a movement — we&rsquo;re uniting dreamers, doers, and
              changemakers to shape a borderless future. A future where what you create
              speaks louder than what you claim. Be part of the change.
            </p>

            {/* CTA Button */}
            <Link
              href="/join"
              className="mt-4 w-32 sm:w-40 h-10 px-4 py-2 bg-purple-700 rounded-full 
              flex justify-center items-center hover:bg-black hover:border hover:border-purple-500 
              transition-all duration-300 text-stone-50 text-base sm:text-lg font-semibold uppercase"
            >
              Join Us
            </Link>
          </div>
        </main>
      </div>
    </section>
  )
}
