

// components/about/CoreValues.tsx
"use client";
import { FaShieldAlt, FaHeart, FaUsers, FaChartLine, FaGlobeAsia, FaStar } from 'react-icons/fa';

const values = [
  {
    icon: FaShieldAlt,
    title: 'স্বচ্ছতা',
    description: 'প্রতিটি কার্যক্রম ও আর্থিক লেনদেনে স্বচ্ছতা বজায় রাখা আমাদের মূলনীতি',
    color: 'from-[#F2A65A] to-[#F2A65A]/80',
  },
  {
    icon: FaHeart,
    title: 'মানবিকতা',
    description: 'মানুষের সেবাই আমাদের প্রধান লক্ষ্য, কোনো রাজনীতি নয়',
    color: 'from-[#25343F] to-[#25343F]/80',
  },
  {
    icon: FaUsers,
    title: 'সম্প্রদায়',
    description: 'সকলের অংশগ্রহণে সিদ্ধান্ত গ্রহণ ও বাস্তবায়ন',
    color: 'from-[#F2A65A] to-[#F2A65A]/80',
  },
  {
    icon: FaChartLine,
    title: 'উন্নয়ন',
    description: 'টেকসই ও যুগোপযোগী উন্নয়ন কর্মসূচি বাস্তবায়ন',
    color: 'from-[#25343F] to-[#25343F]/80',
  },
  {
    icon: FaGlobeAsia,
    title: 'সামাজিক দায়বদ্ধতা',
    description: 'সমাজের প্রতি দায়বদ্ধতা ও নৈতিকতা বজায় রাখা',
    color: 'from-[#F2A65A] to-[#F2A65A]/80',
  },
  {
    icon: FaStar,
    title: 'নবীন চিন্তা',
    description: 'তরুণদের নতুন আইডিয়া ও উদ্যোগকে উৎসাহিত করা',
    color: 'from-[#25343F] to-[#25343F]/80',
  },
];


const CoreValues = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-montserrat text-sm text-[#F2A65A] uppercase tracking-wider">আমাদের মূলমন্ত্র</span>
          <h2 className="font-display text-3xl md:text-4xl text-[#25343F] mt-2 mb-4">
            যে <span className="text-[#F2A65A]">মূল্যবোধে</span> আমরা বিশ্বাসী
          </h2>
          <p className="font-inter text-[#25343F]/70">
            এই পাঁচটি মূল্যবোধ আমাদের পথ দেখায়, আমাদের কাজের দিশা নির্ধারণ করে
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#EAEFEF] overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className="w-14 h-14 bg-[#F2A65A]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-[#F2A65A]" />
                </div>
                
                {/* Content */}
                <h3 className="font-display text-xl text-[#25343F] mb-3">{value.title}</h3>
                <p className="font-inter text-[#25343F]/70 leading-relaxed">{value.description}</p>
                
                {/* Decorative Dot */}
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-[#F2A65A] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default CoreValues
