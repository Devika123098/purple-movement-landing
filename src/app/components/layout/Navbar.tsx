'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Events", href: "/#events" },
    // { name: "Manifesto", href: "/#manifesto" },
    // { name: "Vision", href: "/#vision" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle smooth scrolling for hash links
  const handleLinkClick = async (href: string) => {
    setIsOpen(false); // Close mobile menu

    if (href.startsWith('/#')) {
      const targetId = href.substring(2); // Remove '/#'
      
      // If we're not on the home page, navigate there first
      if (pathname !== '/') {
        router.push(href);
        return;
      }

      // If we're on the home page, smooth scroll to the section
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  // Check if link is active
  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    if (href.startsWith('/#')) {
      return pathname === '/'; // Hash links are active when on home page
    }
    return pathname.startsWith(href);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('nav')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`w-full fixed top-0 z-50 shadow-md scroll-smooth transition-all duration-300 
      ${isScrolled ? "backdrop-blur-md bg-black/40" : "bg-transparent"}`}
    >
      <div className="mx-auto flex items-center justify-between px-4 py-8 h-[10vh]">
        {/* Logo */}
        <div className="md:px-10">
          <Link href="/" className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 rounded">
            <Image 
              src="/logos/logo_pm.png" 
              width={100} 
              height={40} 
              alt="Purple Movement Logo"
              priority
              className="w-auto h-auto"
              sizes="(max-width: 768px) 80px, 100px"
            />
          </Link>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-20 px-20 text-white">
          <nav className="flex items-center gap-8" role="navigation">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith('/#')) {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }
                }}
                className={`font-bold text-lg text-white hover:text-[#6F00CD] transition-all ease duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded px-2 py-1 ${
                  isActiveLink(link.href) 
                    ? 'text-[#6F00CD]' 
                    : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Hamburger (mobile only) */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <X size={28} color="white" />
            ) : (
              <Menu size={28} color="white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden bg-black/90 backdrop-blur-md shadow-md"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col divide-y divide-gray-600">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith('/#')) {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    } else {
                      setIsOpen(false);
                    }
                  }}
                  className={`block px-6 py-4 hover:bg-purple-500 hover:text-white transition focus:outline-none focus:bg-purple-600 ${
                    isActiveLink(link.href) 
                      ? 'text-[#6F00CD] bg-purple-900/30' 
                      : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};