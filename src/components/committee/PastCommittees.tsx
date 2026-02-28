

// components/committee/PastCommittees.tsx
import { useState } from 'react';
import { FaCalendarAlt, FaUsers, FaChevronDown, FaChevronUp, FaUserTie } from 'react-icons/fa';
import { GiTrophy } from 'react-icons/gi';

interface PastCommittee {
  year: string;
  president: string;
  secretary: string;
  members: number;
  achievements: string[];
}

const pastCommittees: PastCommittee[] = [
  {
    year: '২০২২-২০২৪',
    president: 'মোঃ ইউনুস',
    secretary: 'আমিনুল ইসলাম',
    members: 11,
    achievements: [
      '৫০০+ সদস্য সংগ্রহ',
      'শিক্ষাবৃত্তি চালু',
      'নিজস্ব কার্যালয় স্থাপন',
      'ত্রাণ তহবিল গঠন'
    ]
  },
  {
    year: '২০২০-২০২২',
    president: 'ফরিদা ইয়াসমিন',
    secretary: 'জিয়াউর রহমান',
    members: 11,
    achievements: [
      'কোভিড-১৯ ত্রাণ বিতরণ',
      'বিনামূল্যে চিকিৎসা ক্যাম্প',
      'বৃক্ষরোপণ কর্মসূচি'
    ]
  },
  {
    year: '২০১৮-২০২০',
    president: 'আব্দুল্লাহ আল মামুন',
    secretary: 'শামসুন্নাহার',
    members: 9,
    achievements: [
      'যুব প্রশিক্ষণ কেন্দ্র স্থাপন',
      'নারী উদ্যোক্তা সৃষ্টি',
      'শীতবস্ত্র বিতরণ'
    ]
  }
];

const PastCommittees = () => {
      const [expandedYear, setExpandedYear] = useState<string | null>(null);
  return (
    <section className="py-20 bg-[#EAEFEF]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-montserrat text-sm text-[#F2A65A] uppercase tracking-wider">ইতিহাস</span>
          <h2 className="font-display text-3xl md:text-4xl text-[#25343F] mt-2 mb-4">
            বিগত <span className="text-[#F2A65A]">কমিটিসমূহ</span>
          </h2>
          <div className="w-20 h-1 bg-[#F2A65A] mx-auto mb-4"></div>
          <p className="font-inter text-[#25343F]/70">
            অতীতের কমিটিগুলোর অর্জন ও অবদান
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {pastCommittees.map((committee, index) => (
            <div key={committee.year} className="relative mb-8 last:mb-0">
              {/* Timeline Line */}
              {index < pastCommittees.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-1 bg-[#F2A65A]/20"></div>
              )}

              <div className="relative flex gap-6">
                {/* Year Circle */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#F2A65A] rounded-full flex items-center justify-center shadow-lg">
                    <FaCalendarAlt className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-display text-2xl text-[#25343F]">{committee.year}</h3>
                    <button 
                      onClick={() => setExpandedYear(expandedYear === committee.year ? null : committee.year)}
                      className="p-2 hover:bg-[#EAEFEF] rounded-lg transition"
                    >
                      {expandedYear === committee.year ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <FaUserTie className="w-4 h-4 text-[#F2A65A]" />
                      <span className="font-inter text-sm text-[#25343F]">সভাপতি: {committee.president}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaUsers className="w-4 h-4 text-[#F2A65A]" />
                      <span className="font-inter text-sm text-[#25343F]">সদস্য: {committee.members}</span>
                    </div>
                  </div>

                  {expandedYear === committee.year && (
                    <div className="mt-4 pt-4 border-t border-[#EAEFEF] animate-fadeIn">
                      <h4 className="font-display text-lg text-[#25343F] mb-3 flex items-center gap-2">
                        <GiTrophy className="w-5 h-5 text-[#F2A65A]" />
                        অর্জনসমূহ
                      </h4>
                      <ul className="space-y-2">
                        {committee.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-[#F2A65A] rounded-full mt-2"></span>
                            <span className="font-inter text-sm text-[#25343F]/70">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PastCommittees
