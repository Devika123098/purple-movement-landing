import Image from "next/image"; 
export const CallToAction = () => {
    return (
        <div className="w-full flex justify-center items-center gap-14 p-8 mt-32">
            <div className="max-w-[701px] flex flex-col justify-start items-start gap-4">
                <div className="w-full bg-gradient-to-t from-[#D6A4FF]  to-[#6F00CD] bg-clip-text text-transparent text-4xl font-bold font-montserrat">
                    This isn't the end.
                </div>
                <div className="w-full">
                    <span className="text-white text-xl font-semibold font-montserrat">
                        It's only the beginning. <br />
                        The spark has just been ignited — and with every learner, teacher, and changemaker who joins us, it grows into a fire.
                        <br/><br/>
                    </span>
                    <span className=" bg-gradient-to-l from-[#D6A4FF]  to-[#6F00CD] bg-clip-text text-transparent text-2xl font-bold font-montserrat">
                        Together, we are the Purple Movement.
                    </span>
                </div>
            </div>
            <Image 
                width={288}
                height={288}
                src="/images/spiral.png" 
                alt="Purple Movement spiral illustration"
            />
        </div>
    )
}