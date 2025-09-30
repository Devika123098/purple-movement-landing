export const VisionMission = () => {
  return (
    <section
      id="about"
      aria-label="Vision and Mission Section"
      className="flex flex-col md:flex-row items-center justify-center gap-12 px-4 sm:px-6 md:px-12 lg:px-20 md:py-16"
    >
      {/* Left - Vision */}
      <div className="flex flex-col items-start w-full max-w-xl text-left">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold font-['Montserrat'] capitalize">
          VISION
        </h2>
        <p className="mt-4 text-white/75 text-sm sm:text-base md:text-lg leading-relaxed font-['Poppins']">
          Purple Movement connects the energy of youth with the wisdom of experts
          to break barriers in learning and creation. By removing limits of cost,
          access, and geography, we open up fast, practical, and inclusive ways for
          people to share ideas, gain skills, and build real-world solutions.
        </p>
      </div>

      {/* Center Divider */}
      <div className="hidden md:block w-px h-72 bg-gradient-to-t from-[#6F00CD] to-[#F7D8FA]" />
      <div className="block md:hidden w-24 sm:w-36 h-px bg-fuchsia-200" />

      {/* Right - Mission */}
      <div className="flex flex-col items-start md:items-end w-full max-w-xl text-left md:text-right">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold font-['Montserrat'] capitalize">
          MISSION
        </h2>
        <p className="mt-4 text-white/75 text-sm sm:text-base md:text-lg leading-relaxed font-['Poppins']">
          Purple Movement connects the energy of youth with the wisdom of experts
          to break barriers in learning and creation. By removing limits of cost,
          access, and geography, we open up fast, practical, and inclusive ways for
          people to share ideas, gain skills, and build real-world solutions.
        </p>
      </div>
    </section>
  );
};