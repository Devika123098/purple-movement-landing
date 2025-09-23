import Image from 'next/image';
import { FaXTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
const links = [
    { name: "Home", href: "/#" },
    { name: "About", href: "/#about" },
    { name: "Events", href: "/#events" },
    // { name: "Manifesto", href: "/#manifesto" },
    // { name: "Vision", href: "/#vision" },
  ];
export const Footer = () => {
    return (
        <>
        <div className="self-stretch h-24 bg-gradient-to-b from-black to-slate-950" />
        <footer className="w-full bg-slate-950 py-12 px-8 relative">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-2">
                <Image width={183} height={59} className="w-44 h-14 left-7" src="/logos/logo_pm.png" alt="Logo" />
                    <h3 className="text-white/75 text-2xl font-bold font-poppins leading-loose">
                        The Purple Movement
                    </h3>
                    <p className="text-white/75 text-lg font-normal font-poppins leading-loose">
                        Rebuilding how India learns
                    </p>
                     <div className="flex space-x-4">
                        <a href="#" className="group">
                            <FaXTwitter className="w-8 h-8 text-white/60 group-hover:text-blue-400 transition-colors" />
                        </a>
                        <a href="#" className="group">
                            <FaInstagram className="w-8 h-8 text-white/60 group-hover:text-pink-500 transition-colors" />
                        </a>
                        <a href="#" className="group">
                            <FaLinkedinIn className="w-8 h-8 text-white/60 group-hover:text-blue-600 transition-colors" />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h4 className="text-white text-xl font-semibold font-poppins leading-loose">
                        Quick Links
                    </h4>
                    <nav className="flex flex-col space-y-2">
                        {
                            links.map((item) => (
                                <a key={item.name} href={item.href} className="text-white text-xl font-normal font-poppins leading-loose hover:text-purple-400 transition-colors">
                                    {item.name}
                                </a>
                            ))
                        }
                    </nav>
                </div>

                {/* Social Media Icons */}
                <div className="space-y-4">
                    <h4 className="text-white text-xl font-semibold font-poppins leading-loose">
                        Feedback
                    </h4>
                    <textarea name="feedback" id="feedback" className="w-full h-24 p-2 border border-zinc-700 rounded resize-none" placeholder="Leave your feedback here..."></textarea>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 pt-8 border-t border-zinc-700">
                <p className="text-white/75 text-sm font-normal font-poppins leading-loose text-center">
                    © 2025 The Purple Movement. All rights reserved
                </p>
            </div>
        </footer>
        </>
    );
};