
// components/about/AboutCTA.tsx
"use client";
import Link from 'next/link';
import { FaUserPlus, FaCreditCard, FaPhone, FaEnvelope } from 'react-icons/fa';

const AboutCTA = () => {
  return (
    <section className="py-20 bg-[#F2A65A] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #25343F 1px, transparent 0)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-[#25343F] mb-4">
            আমাদের যাত্রার অংশ হোন
          </h2>
          <p className="font-inter text-lg text-[#25343F]/80 mb-8">
            চাঁদপুরের উন্নয়নের এই অগ্রযাত্রায় আপনিও অংশীদার হোন। আপনার সামান্য অবদানও পারে অনেকের জীবন বদলে দিতে।
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/register"
              className="font-montserrat bg-[#25343F] text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition flex items-center justify-center gap-2 group"
            >
              <FaUserPlus className="w-5 h-5 group-hover:rotate-12 transition" />
              সদস্য হোন
            </Link>
            <Link
              href="/donate"
              className="font-montserrat bg-white text-[#25343F] px-8 py-4 rounded-md hover:bg-opacity-90 transition flex items-center justify-center gap-2 group"
            >
              <FaCreditCard className="w-5 h-5 group-hover:scale-110 transition" />
              অনলাইনে অনুদান
            </Link>
          </div>

          {/* Contact Options */}
          <div className="flex flex-wrap justify-center gap-6 text-[#25343F]/80">
            <div className="flex items-center gap-2">
              <FaPhone className="w-4 h-4" />
              <span className="font-inter text-sm">০১৮১২-৩৪৫৬৭৮</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="w-4 h-4" />
              <span className="font-inter text-sm">info@chandpurforum.org</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
                fill="#FFFFFF"/>
        </svg>
      </div>
    </section>
  )
}

export default AboutCTA
