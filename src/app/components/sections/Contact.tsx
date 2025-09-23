import Image from 'next/image';

export const Contact = () => {
    return (
        <div className="w-[1070px] h-96 relative bg-slate-900 rounded-[50px] overflow-hidden mx-auto mt-30">
            <Image 
                className="w-90 h-80 top-[35px] absolute" 
                src="/images/qtnmark.png" 
                alt="Question mark"
                width={360}
                height={320}
            />
            <div className="left-[335.33px] top-[70.60px] absolute justify-start">
                <span className="text-white text-5xl font-semibold font-montserrat tracking-wide">Any<br/></span>
                <span className="text-purple-600 text-5xl font-semibold font-montserrat tracking-wide">Questions?</span>
            </div>
            <div className="left-[335.33px] top-[197.60px] absolute justify-start text-white text-2xl font-medium font-montserrat leading-loose">
                We&apos;re here to help, reach out anytime!
            </div>
            <div className="w-[544.59px] h-12 left-[335.33px] top-[281.67px] absolute rounded border border-stone-500" />
            <input 
                className="w-[544.59px] h-12 left-[335.33px] top-[281.67px] absolute rounded border border-stone-500 bg-transparent px-4 text-zinc-300 text-lg font-normal font-poppins tracking-tight placeholder:text-zinc-300"
                placeholder="Text here.."
                type="text"
            />
        </div>
    )
}