
// components/layout/Navbar.tsx
"use client";
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Logo from "@/assets/logo.png";

const navItems: Array<{ label: string; href: string }> = [
  { label: "হোম", href: "/" },
  { label: "সম্পর্কে", href: "/about" },
  { label: "কমিটি", href: "/committee" },
  { label: "আর্থিক প্রতিবেদন", href: "/reports" },
  { label: "যোগাযোগ", href: "/contact-us" },
];


const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav className="bg-[#25343F] text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-20 h-20 md:w-24 md:h-24">
              <Image
                src={Logo}
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-display text-xl md:text-2xl text-[#25343F]">
              Chandpur Samajik Unnoyon
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-[#F2A65A] transition"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex space-x-3">
            <Link
              href="#"
              className="font-montserrat px-4 py-2 text-sm border border-[#F2A65A] text-[#F2A65A] hover:bg-[#F2A65A] hover:text-[#25343F] rounded transition"
            >
              লগইন
            </Link>
            <Link
              href="#"
              className="font-montserrat px-4 py-2 text-sm bg-[#F2A65A] text-[#25343F] hover:bg-opacity-90 rounded transition"
            >
              রেজিস্ট্রেশন
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <IoMdClose size={24} /> : <CiMenuFries size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-[#F2A65A]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 space-y-2">
                <Link
                  href="/login"
                  className="block font-montserrat text-center border border-[#F2A65A] text-[#F2A65A] px-4 py-2 rounded"
                  onClick={() => setIsOpen(false)}
                >
                  লগইন
                </Link>
                <Link
                  href="/register"
                  className="block font-montserrat text-center bg-[#F2A65A] text-[#25343F] px-4 py-2 rounded"
                  onClick={() => setIsOpen(false)}
                >
                  রেজিস্ট্রেশন
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
