'use client';
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger & close icons
import BlurryButton from "./BlurryButton";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { text: "Home", href: "/" },
    { text: "About Us", href: "/about" },
    { text: "Gallery", href: "/gallery" },
    { text: "Services", href: "/services" },
  ];

  return (
    <nav className="w-full px-4 py-2 bg-transparent">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <img
            src="/logo.png"
            alt="logo"
            className="w-[100px] h-[100px] object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map(({ text, href }, i) => (
            <Link
              key={i}
              href={href}
              className="relative group text-white text-[1rem]"
            >
              {text}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link href="/contact-us">
            <BlurryButton
              text="Contact Us"
              className="w-[145px] text-[1rem] h-[55px] rounded"
            />
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="mt-4 md:hidden flex flex-col gap-4 items-start px-2">
          {navLinks.map(({ text, href }, i) => (
            <Link
              key={i}
              href={href}
              onClick={() => setIsOpen(false)}
              className="text-white text-[1rem]"
            >
              {text}
            </Link>
          ))}
          <Link href="/contact-us" onClick={() => setIsOpen(false)}>
            <BlurryButton
              text="Contact Us"
              className="w-full text-[1rem] h-[50px] rounded p-2"
            />
          </Link>
        </div>
      )}
    </nav>
  );
}
