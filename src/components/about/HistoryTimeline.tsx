

// components/about/HistoryTimeline.tsx
"use client";
import { FaCalendar, FaHeart, FaAward, FaUsers, FaBuilding, FaBullseye } from 'react-icons/fa';

const timelineEvents = [
  {
    year: '২০১০',
    title: 'যাত্রা শুরু',
    description: 'চাঁদপুরের কয়েকজন উদ্যোক্তা তরুণ মিলে ফোরামের প্রতিষ্ঠা করেন',
    icon: FaCalendar,
  },
  {
    year: '২০১৩',
    title: 'প্রথম বড় উদ্যোগ',
    description: '৫০টি পরিবারের মাঝে শীতবস্ত্র বিতরণ ও বিনামূল্যে চিকিৎসা ক্যাম্প',
    icon: FaHeart,
  },
  {
    year: '২০১৬',
    title: 'শিক্ষাবৃত্তি চালু',
    description: 'মেধাবী অথচ দরিদ্র শিক্ষার্থীদের জন্য বৃত্তি কর্মসূচি শুরু',
    icon: FaAward,
  },
  {
    year: '২০১৯',
    title: 'সদস্য সংখ্যা ৫০০',
    description: 'সংগঠনের সদস্য সংখ্যা ৫০০-এ পৌঁছায়, কমিটি পুনর্গঠন',
    icon: FaUsers,
  },
  {
    year: '২০২২',
    title: 'নিজস্ব কার্যালয়',
    description: 'চাঁদপুর সদরে নিজস্ব কার্যালয় স্থাপন ও নিয়মিত কার্যক্রম',
    icon: FaBuilding,
  },
  {
    year: '২০২৪',
    title: 'ডিজিটাল প্ল্যাটফর্ম',
    description: 'স্বচ্ছ আর্থিক ব্যবস্থাপনা ও অনলাইন পেমেন্ট চালু',
    icon: FaBullseye,
  },
];


const HistoryTimeline = () => {
  return (
    <section className="py-20 bg-[#EAEFEF]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-[#25343F] mb-4">
            আমাদের <span className="text-[#F2A65A]">ইতিহাস</span>
          </h2>
          <div className="w-20 h-1 bg-[#F2A65A] mx-auto mb-4"></div>
          <p className="font-inter text-[#25343F]/70">
            এক যুগেরও বেশি সময় ধরে চাঁদপুরের মানুষের পাশে
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#F2A65A]/20"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`relative flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-5/12 ${isEven ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition ${
                      isEven ? 'hover:-translate-x-2' : 'hover:translate-x-2'
                    }`}>
                      <span className="font-display text-[#F2A65A] text-xl mb-2 block">{event.year}</span>
                      <h3 className="font-display text-lg text-[#25343F] mb-2">{event.title}</h3>
                      <p className="font-inter text-sm text-[#25343F]/70">{event.description}</p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 w-2/12 flex justify-center">
                    <div className="w-12 h-12 bg-[#F2A65A] rounded-full flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Empty Space */}
                  <div className="w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HistoryTimeline
