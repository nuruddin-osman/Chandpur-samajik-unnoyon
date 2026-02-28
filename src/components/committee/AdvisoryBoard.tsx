
// components/committee/AdvisoryBoard.tsx
import Image from 'next/image';
import { FaUserTie, FaGraduationCap, FaBriefcase, FaQuoteRight } from 'react-icons/fa';
import { GiMedicalPack, GiTeacher } from 'react-icons/gi';

interface Advisor {
  id: number;
  name: string;
  designation: string;
  expertise: string;
  image?: string;
  quote: string;
  icon: React.ComponentType<{ className?: string }>;
}

const advisors: Advisor[] = [
  {
    id: 1,
    name: 'ডা. আবুল হাসান',
    designation: 'প্রধান উপদেষ্টা',
    expertise: 'চিকিৎসা ও স্বাস্থ্য বিশেষজ্ঞ',
    quote: 'মানুষের সেবাই মহৎ কাজ। চাঁদপুরের মানুষের পাশে থাকতে পেরে আমি গর্বিত।',
    icon: GiMedicalPack,
  },
  {
    id: 2,
    name: 'প্রফেসর শাহিনা আক্তার',
    designation: 'উপদেষ্টা',
    expertise: 'শিক্ষা ও গবেষণা',
    quote: 'শিক্ষাই জাতির মেরুদণ্ড। আমাদের তরুণ প্রজন্মকে শিক্ষিত করে গড়ে তুলতে হবে।',
    icon: GiTeacher,
  },
  {
    id: 3,
    name: 'মোঃ হানিফ',
    designation: 'উপদেষ্টা',
    expertise: 'ব্যাংকিং ও অর্থনীতি',
    quote: 'আর্থিক স্বচ্ছতা ও জবাবদিহিতা নিশ্চিত করাই আমাদের মূল লক্ষ্য।',
    icon: FaBriefcase,
  },
  {
    id: 4,
    name: 'অ্যাড. নুরুল ইসলাম',
    designation: 'আইনি উপদেষ্টা',
    expertise: 'আইন ও বিচার',
    quote: 'সুশাসন ও আইনের শাসন নিশ্চিত করলে সমাজ এগিয়ে যায়।',
    icon: FaUserTie,
  },
  {
    id: 5,
    name: 'ইঞ্জি. রফিকুল আলম',
    designation: 'কারিগরি উপদেষ্টা',
    expertise: 'প্রকৌশল ও পরিকল্পনা',
    quote: 'টেকসই উন্নয়ন ও পরিকল্পিত নগরায়ণ আমাদের ভবিষ্যৎ।',
    icon: FaBriefcase,
  },
];

const AdvisoryBoard = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-montserrat text-sm text-[#F2A65A] uppercase tracking-wider">উপদেষ্টা পরিষদ</span>
          <h2 className="font-display text-3xl md:text-4xl text-[#25343F] mt-2 mb-4">
            আমাদের <span className="text-[#F2A65A]">পরামর্শক</span>
          </h2>
          <div className="w-20 h-1 bg-[#F2A65A] mx-auto mb-4"></div>
          <p className="font-inter text-[#25343F]/70">
            বিভিন্ন ক্ষেত্রের অভিজ্ঞ ব্যক্তিবর্গ যারা আমাদের পথ দেখান
          </p>
        </div>

        {/* Advisors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advisors.map((advisor) => {
            const Icon = advisor.icon;
            return (
              <div key={advisor.id} className="group relative">
                <div className="bg-gradient-to-br from-[#EAEFEF] to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  {/* Quote Icon */}
                  <FaQuoteRight className="absolute top-4 right-4 w-8 h-8 text-[#F2A65A]/20" />
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-[#F2A65A]/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-[#F2A65A]" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl text-[#25343F] mb-1">{advisor.name}</h3>
                  <p className="font-montserrat text-sm text-[#F2A65A] font-semibold mb-2">{advisor.designation}</p>
                  <p className="font-inter text-sm text-[#25343F]/60 mb-4">{advisor.expertise}</p>
                  
                  {/* Quote */}
                  <div className="relative">
                    <p className="font-inter text-sm text-[#25343F]/80 italic">"{advisor.quote}"</p>
                  </div>

                  {/* Decorative Line */}
                  <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-[#F2A65A] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default AdvisoryBoard
