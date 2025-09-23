export const VisionMission = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center gap-8 ml-[-7px]">
            {/* Left column - Vision */}
            <div className="flex flex-col items-start w-[477px]">
                <h2 className="text-white text-5xl font-bold font-['Montserrat'] capitalize">VISION</h2>
                <p className="mt-4 text-white/75 text-lg font-normal font-['Poppins'] text-left">
                    Purple Movement connects the energy of youth with the wisdom of experts to break barriers in learning and creation. By removing limits of cost, access, and geography, we open up fast, practical, and inclusive ways for people to share ideas, gain skills, and build real-world solutions.
                </p>
            </div>

            {/* Center line: vertical on md+, horizontal on small */}
            <div className="hidden md:block w-px h-72 bg-gradient-to-t from-[#6F00CD]  to-[#F7D8FA]" />
            <div className="block md:hidden w-48 h-px bg-fuchsia-200" />

            {/* Right column - Mission */}
            <div className="flex flex-col items-end w-[470px]">
                <h2 className="text-white text-5xl font-bold font-['Montserrat'] capitalize">MISSION</h2>
                <p className="mt-4 text-white/75 text-lg font-normal font-['Poppins'] text-right">
                    Purple Movement connects the energy of youth with the wisdom of experts to break barriers in learning and creation. By removing limits of cost, access, and geography, we open up fast, practical, and inclusive ways for people to share ideas, gain skills, and build real-world solutions.
                </p>
            </div>
        </section>
    )
}