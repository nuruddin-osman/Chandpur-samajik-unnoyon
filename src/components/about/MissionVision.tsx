

// components/about/MissionVision.tsx
"use client";
import { GiTargetArrows, GiEyeTarget } from 'react-icons/gi';
import { FaHeart, FaUsers } from 'react-icons/fa';
import { MdOutlineHandshake } from 'react-icons/md';

const MissionVision = () => {
      const missionData = {
    title: 'আমাদের লক্ষ্য',
    description: 'চাঁদপুরের আর্থ-সামাজিক উন্নয়ন ও সম্প্রদায়ের কল্যাণে কাজ করা',
    points: [
      'শিক্ষার প্রসার ও মেধাবী শিক্ষার্থীদের সহায়তা',
      'চিকিৎসা সেবা প্রদান ও স্বাস্থ্য সচেতনতা বৃদ্ধি',
      'দুর্যোগকালীন ত্রাণ ও পুনর্বাসন কার্যক্রম',
      'নারী ও শিশু উন্নয়নে বিশেষ উদ্যোগ'
    ]
  };

  const visionData = {
    title: 'আমাদের স্বপ্ন',
    description: 'একটি সমৃদ্ধ, শিক্ষিত ও সুখী চাঁদপুর গড়ে তোলা',
    points: [
      'প্রত্যেক পরিবারে একজন উচ্চশিক্ষিত সদস্য',
      'দারিদ্র্যমুক্ত চাঁদপুর গঠন',
      'তরুণ উদ্যোক্তা তৈরি ও কর্মসংস্থান সৃষ্টি',
      'আধুনিক ও টেকসই সম্প্রদায় গঠন'
    ]
  };
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Mission Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#F2A65A]/20 to-transparent rounded-2xl transform group-hover:scale-105 transition duration-300"></div>
            <div className="relative bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-[#EAEFEF]">
              <div className="w-16 h-16 bg-[#F2A65A]/10 rounded-xl flex items-center justify-center mb-6">
                <GiTargetArrows className="w-8 h-8 text-[#F2A65A]" />
              </div>
              <h2 className="font-display text-3xl text-[#25343F] mb-4">{missionData.title}</h2>
              <p className="font-inter text-lg text-[#25343F]/80 mb-6">{missionData.description}</p>
              <ul className="space-y-4">
                {missionData.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#F2A65A] rounded-full mt-2"></div>
                    <span className="font-inter text-[#25343F]/70">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-l from-[#25343F]/10 to-transparent rounded-2xl transform group-hover:scale-105 transition duration-300"></div>
            <div className="relative bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-[#EAEFEF]">
              <div className="w-16 h-16 bg-[#25343F]/10 rounded-xl flex items-center justify-center mb-6">
                <GiEyeTarget className="w-8 h-8 text-[#25343F]" />
              </div>
              <h2 className="font-display text-3xl text-[#25343F] mb-4">{visionData.title}</h2>
              <p className="font-inter text-lg text-[#25343F]/80 mb-6">{visionData.description}</p>
              <ul className="space-y-4">
                {visionData.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#25343F] rounded-full mt-2"></div>
                    <span className="font-inter text-[#25343F]/70">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { icon: FaHeart, title: 'মানবিকতা', desc: 'মানুষের জন্য, মানুষের পাশে' },
            { icon: FaUsers, title: 'সম্প্রদায়', desc: 'সকলের অংশগ্রহণে উন্নয়ন' },
            { icon: MdOutlineHandshake, title: 'স্বচ্ছতা', desc: 'প্রতিটি কার্যক্রমে জবাবদিহিতা' },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-[#EAEFEF] p-6 rounded-xl text-center hover:shadow-md transition">
                <Icon className="w-8 h-8 text-[#F2A65A] mx-auto mb-3" />
                <h3 className="font-display text-lg text-[#25343F] mb-2">{item.title}</h3>
                <p className="font-inter text-sm text-[#25343F]/70">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default MissionVision
