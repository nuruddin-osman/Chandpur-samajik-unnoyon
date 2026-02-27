
// components/home/FinancialSummary.tsx
"use client";
import Link from 'next/link';
import { IoMdTrendingUp } from "react-icons/io";
import { FaDownload } from "react-icons/fa";
import { ExpenseCategory } from '@/types';

const expenseCategories: ExpenseCategory[] = [
  { cat: 'শিক্ষা', amount: '৪০%', color: 'bg-[#F2A65A]' },
  { cat: 'চিকিৎসা', amount: '৩০%', color: 'bg-[#F2A65A]' },
  { cat: 'ত্রাণ', amount: '২০%', color: 'bg-[#F2A65A]' },
  { cat: 'অন্যান্য', amount: '১০%', color: 'bg-[#F2A65A]' },
];

const FinancialSummary = () => {
  return (
    <section className="py-16 bg-[#25343F] text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              স্বচ্ছ আর্থিক
              <span className="text-[#F2A65A]"> হিসাব</span>
            </h2>
            <p className="font-inter text-[#EAEFEF] mb-6">
              আপনার দেওয়া প্রতিটি টাকার হিসাব আমরা প্রকাশ করি পাবলিক ড্যাশবোর্ডে। দেখুন কোথায় এবং কীভাবে ব্যয় হচ্ছে আপনার অর্থ।
            </p>

            {/* Stats */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                <span className="font-inter">মোট আয় (২০২৪)</span>
                <span className="font-display text-2xl text-[#F2A65A]">৳ ১২,৫০,০০০</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                <span className="font-inter">মোট ব্যয় (২০২৪)</span>
                <span className="font-display text-2xl">৳ ৮,২০,০০০</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg border-l-4 border-[#F2A65A]">
                <span className="font-inter">বর্তমান ব্যালেন্স</span>
                <span className="font-display text-2xl text-[#F2A65A]">৳ ৪,৩০,০০০</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              <Link
                href="/reports"
                className="font-montserrat bg-[#F2A65A] text-[#25343F] px-6 py-3 rounded-md hover:bg-opacity-90 transition flex items-center gap-2"
              >
                সম্পূর্ণ প্রতিবেদন
                <IoMdTrendingUp size={20} />
              </Link>
              <button className="font-montserrat border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-[#25343F] transition flex items-center gap-2">
                <FaDownload size={20} />
                পিডিএফ ডাউনলোড
              </button>
            </div>
          </div>

          {/* Right - Category Chart Preview */}
          <div className="bg-white/5 p-6 rounded-xl">
            <h3 className="font-display text-xl mb-4">ব্যয় বিতরণ</h3>
            <div className="space-y-3">
              {expenseCategories.map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-inter">{item.cat}</span>
                    <span className="font-montserrat">{item.amount}</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color}`}
                      style={{ width: item.amount }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinancialSummary
