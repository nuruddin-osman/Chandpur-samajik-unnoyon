

// components/about/Achievements.tsx
"use client";
import { FaTrophy, FaAward, FaStar, FaMedal, FaHeart, FaHandsHelping } from 'react-icons/fa';
import { GiAchievement } from 'react-icons/gi';

const achievements = [
  {
    year: '২০২৩',
    title: 'শ্রেষ্ঠ সামাজিক সংগঠন',
    organization: 'চাঁদপুর জেলা প্রশাসন',
    icon: FaTrophy,
    description: 'চাঁদপুর জেলার সেরা সামাজিক সংগঠন হিসেবে সম্মাননা',
  },
  {
    year: '২০২২',
    title: 'ন্যাশনাল ভলান্টিয়ার অ্যাওয়ার্ড',
    organization: 'যুব উন্নয়ন অধিদপ্তর',
    icon: FaAward,
    description: 'স্বেচ্ছাসেবী কার্যক্রমে অসামান্য অবদানের জন্য জাতীয় পুরস্কার',
  },
  {
    year: '২০২১',
    title: 'শিক্ষায় বিশেষ অবদান',
    organization: 'শিক্ষা মন্ত্রণালয়',
    icon: GiAchievement,
    description: 'মেধাবী দরিদ্র শিক্ষার্থীদের বৃত্তি প্রদান কর্মসূচির স্বীকৃতি',
  },
  {
    year: '২০২০',
    title: 'কোভিড-১৯ ত্রাণ কার্যক্রম',
    organization: 'স্বাস্থ্য অধিদপ্তর',
    icon: FaHandsHelping,
    description: 'মহামারিতে ত্রাণ ও চিকিৎসা সহায়তায় বিশেষ ভূমিকা',
  },
];

const Achievements = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-montserrat text-sm text-[#F2A65A] uppercase tracking-wider">গর্বের মুহূর্ত</span>
          <h2 className="font-display text-3xl md:text-4xl text-[#25343F] mt-2 mb-4">
            আমাদের <span className="text-[#F2A65A]">স্বীকৃতি</span>
          </h2>
          <div className="w-20 h-1 bg-[#F2A65A] mx-auto mb-4"></div>
          <p className="font-inter text-[#25343F]/70">
            বিভিন্ন সংস্থা ও প্রতিষ্ঠানের কাছ থেকে প্রাপ্ত সম্মাননা
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div key={index} className="group relative">
                <div className="bg-[#EAEFEF] rounded-2xl p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  {/* Icon */}
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md">
                      <Icon className="w-8 h-8 text-[#F2A65A]" />
                    </div>
                    
                    {/* Year Badge */}
                    <div className="absolute -top-2 -right-2 bg-[#25343F] text-white px-3 py-1 rounded-full text-sm font-montserrat">
                      {achievement.year}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl text-[#25343F] mb-2">{achievement.title}</h3>
                  <p className="font-montserrat text-sm text-[#F2A65A] mb-3">{achievement.organization}</p>
                  <p className="font-inter text-sm text-[#25343F]/70">{achievement.description}</p>

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

export default Achievements
