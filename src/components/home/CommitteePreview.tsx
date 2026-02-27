
// components/home/CommitteePreview.tsx
"use client";
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa6";
import { CommitteeMember } from '@/types';

const members: CommitteeMember[] = [
  { name: 'আব্দুর রহিম', role: 'সভাপতি', image: null },
  { name: 'নাজমা আক্তার', role: 'সাধারণ সম্পাদক', image: null },
  { name: 'মোঃ জাহিদ', role: 'সাংগঠনিক সম্পাদক', image: null },
  { name: 'ফাতেমা বেগম', role: 'অর্থ সম্পাদক', image: null },
];


const CommitteePreview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-[#25343F] mb-2">
            কমিটির সদস্যবৃন্দ
          </h2>
          <p className="font-inter text-[#25343F] opacity-80">
            ২০২৪-২০২৫ মেয়াদের কার্যনির্বাহী কমিটি
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {members.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto bg-[#EAEFEF] rounded-full mb-4 overflow-hidden border-4 border-transparent group-hover:border-[#F2A65A] transition"></div>
              <h3 className="font-display text-lg text-[#25343F]">{member.name}</h3>
              <p className="font-montserrat text-sm text-[#F2A65A]">{member.role}</p>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Link
            href="/committee"
            className="font-montserrat inline-flex items-center gap-2 bg-[#25343F] text-white px-6 py-3 rounded-md hover:bg-[#F2A65A] hover:text-[#25343F] transition"
          >
            সম্পূর্ণ কমিটি দেখুন
            <FaArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CommitteePreview
