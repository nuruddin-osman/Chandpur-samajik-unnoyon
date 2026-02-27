

// components/layout/Footer.tsx
"use client";
import Link from 'next/link';
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa";
import { RiMapPin2Fill } from "react-icons/ri";

interface FooterLink {
  label: string;
  href: string;
}

const quickLinks: FooterLink[] = [
  { label: 'আমাদের সম্পর্কে', href: '/about' },
  { label: 'কমিটি', href: '/committee' },
  { label: 'আর্থিক প্রতিবেদন', href: '/reports' },
  { label: 'যোগাযোগ', href: '/contact' },
];

const Footer = () => {
      const currentYear: number = new Date().getFullYear();
  return (
    <footer className="bg-[#25343F] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-[#F2A65A] rounded-full"></div>
              <span className="font-display text-xl">Chandpur Forum</span>
            </div>
            <p className="font-inter text-sm text-[#EAEFEF] mb-4">
              চাঁদপুরের উন্নয়নে নিবেদিত একটি অরাজনৈতিক সামাজিক সংগঠন।
            </p>
            <div className="flex space-x-3">
              <FaFacebookF className="w-5 h-5 text-[#F2A65A] hover:text-white cursor-pointer" />
              <FaYoutube className="w-5 h-5 text-[#F2A65A] hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg mb-4">গুরুত্বপূর্ণ লিংক</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-inter text-sm hover:text-[#F2A65A] transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg mb-4">যোগাযোগ</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <RiMapPin2Fill size={18} className="text-[#F2A65A] flex-shrink-0 mt-1" />
                <span className="font-inter text-sm">চাঁদপুর সদর, চাঁদপুর, বাংলাদেশ</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneVolume size={18} className="text-[#F2A65A]" />
                <span className="font-inter text-sm">০১৮১২-৩৪৫৬৭৮</span>
              </li>
              <li className="flex items-center gap-2">
                <IoMailSharp size={18} className="text-[#F2A65A]" />
                <span className="font-inter text-sm">info@chandpurforum.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display text-lg mb-4">নিউজলেটার</h3>
            <p className="font-inter text-sm text-[#EAEFEF] mb-3">আপডেট পেতে সাবস্ক্রাইব করুন</p>
            <div className="flex">
              <input
                type="email"
                placeholder="আপনার ইমেইল"
                className="font-inter px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-l-md focus:outline-none focus:border-[#F2A65A] w-full"
                aria-label="Email for newsletter"
              />
              <button className="bg-[#F2A65A] text-[#25343F] px-4 py-2 rounded-r-md font-montserrat text-sm">
                সাবস্ক্রাইব
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="font-inter text-sm text-[#EAEFEF]">
            © {currentYear} চাঁদপুর উন্নয়ন ফোরাম। সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
