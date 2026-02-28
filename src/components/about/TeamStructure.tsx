

// components/about/TeamStructure.tsx
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { FaUsers, FaUserCircle, FaChevronRight } from 'react-icons/fa';

interface TeamMember {
  name: string;
  role: string;
  image?: string;
  bio?: string;
}

interface TeamCategory {
  title: string;
  members: TeamMember[];
  icon: React.ComponentType<{ className?: string }>;
}

const teamData: TeamCategory[] = [
  {
    title: 'কার্যনির্বাহী কমিটি',
    icon: FaUsers,
    members: [
      { name: 'আব্দুর রহিম', role: 'সভাপতি', image: '' },
      { name: 'নাজমা আক্তার', role: 'সাধারণ সম্পাদক', image: '' },
      { name: 'মোঃ জাহিদ', role: 'সাংগঠনিক সম্পাদক', image: '' },
      { name: 'ফাতেমা বেগম', role: 'অর্থ সম্পাদক', image: '' },
      { name: 'রফিকুল ইসলাম', role: 'দপ্তর সম্পাদক', image: '' },
    ]
  },
  {
    title: 'উপদেষ্টা পরিষদ',
    icon: FaUserCircle,
    members: [
      { name: 'ডা. আবুল হাসান', role: 'প্রধান উপদেষ্টা', image: '' },
      { name: 'প্রফেসর শাহিনা আক্তার', role: 'উপদেষ্টা', image: '' },
      { name: 'মোঃ হানিফ', role: 'উপদেষ্টা', image: '' },
    ]
  },
];

const TeamStructure = () => {
  return (
    <section className="py-20 bg-[#EAEFEF]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-[#25343F] mb-4">
            আমাদের <span className="text-[#F2A65A]">টিম</span>
          </h2>
          <div className="w-20 h-1 bg-[#F2A65A] mx-auto mb-4"></div>
          <p className="font-inter text-[#25343F]/70">
            যারা নিবেদিতভাবে কাজ করে যাচ্ছেন সংগঠনের লক্ষ্য অর্জনে
          </p>
        </div>

        {/* Team Categories */}
        <div className="space-y-16">
          {teamData.map((category, categoryIdx) => {
            const Icon = category.icon;
            return (
              <div key={categoryIdx}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-[#F2A65A] rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display text-2xl text-[#25343F]">{category.title}</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                  {category.members.map((member, memberIdx) => (
                    <div key={memberIdx} className="group relative">
                      <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                        {/* Image Placeholder */}
                        <div className="w-24 h-24 mx-auto bg-[#EAEFEF] rounded-full mb-4 overflow-hidden border-4 border-transparent group-hover:border-[#F2A65A] transition-all">
                          {member.image ? (
                            <Image src={member.image} alt={member.name} width={96} height={96} className="object-cover" />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-[#F2A65A]/20 to-[#25343F]/20 flex items-center justify-center">
                              <span className="font-display text-2xl text-[#25343F]/30">
                                {member.name.charAt(0)}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Info */}
                        <h4 className="font-display text-lg text-[#25343F] mb-1">{member.name}</h4>
                        <p className="font-montserrat text-sm text-[#F2A65A]">{member.role}</p>
                        
                        {/* Social/Hover Effect */}
                        <div className="absolute inset-0 bg-white/90 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Link 
                            href={`/committee/${member.name}`} 
                            className="bg-[#F2A65A] text-[#25343F] px-4 py-2 rounded-md text-sm font-montserrat"
                          >
                            বিস্তারিত
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            href="/committee" 
            className="font-montserrat inline-flex items-center gap-2 bg-[#25343F] text-white px-8 py-3 rounded-md hover:bg-[#F2A65A] hover:text-[#25343F] transition group"
          >
            সম্পূর্ণ কমিটি দেখুন
            <FaChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TeamStructure
