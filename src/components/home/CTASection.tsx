
// components/home/CTASection.tsx
"use client";
import Link from 'next/link';
import { CiCreditCard1 } from "react-icons/ci";
import { FaUserPlus } from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="py-20 bg-[#EAEFEF]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-[#25343F] mb-4">
            আমাদের সাথে যুক্ত হোন
          </h2>
          <p className="font-inter text-[#25343F] opacity-80 mb-8 text-lg">
            চাঁদপুরের উন্নয়নে অংশ নিন। সদস্য হয়ে বা অর্থ অনুদান দিয়ে আমাদের সহায়তা করুন।
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="font-montserrat bg-[#25343F] text-white px-8 py-4 rounded-md hover:bg-[#F2A65A] hover:text-[#25343F] transition flex items-center justify-center gap-2"
            >
              <FaUserPlus size={20} />
              সদস্য হোন
            </Link>
            <Link
              href="#"
              className="font-montserrat bg-[#F2A65A] text-[#25343F] px-8 py-4 rounded-md hover:bg-opacity-90 transition flex items-center justify-center gap-2"
            >
              <CiCreditCard1 size={20} />
              অনলাইনে অনুদান
            </Link>
          </div>

          {/* Payment Partners */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="text-sm text-[#25343F] opacity-60">পেমেন্ট পার্টনার:</span>
            <div className="flex gap-2">
              <div className="bg-white px-3 py-1 rounded text-sm font-montserrat">bKash</div>
              <div className="bg-white px-3 py-1 rounded text-sm font-montserrat">Nagad</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
