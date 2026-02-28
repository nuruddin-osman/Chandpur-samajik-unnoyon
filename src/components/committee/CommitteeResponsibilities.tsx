

// components/committee/CommitteeResponsibilities.tsx
import { FaShieldAlt, FaHandHoldingHeart, FaChartLine, FaUsers, FaFileAlt, FaBullhorn } from 'react-icons/fa';
import { GiTakeMyMoney, GiVote } from 'react-icons/gi';

const responsibilities = [
  {
    category: 'প্রশাসনিক দায়িত্ব',
    icon: FaShieldAlt,
    items: [
      'সংগঠনের নীতি নির্ধারণ ও দিকনির্দেশনা প্রদান',
      'সভা আহ্বান ও সঞ্চালন',
      'সিদ্ধান্ত বাস্তবায়ন তদারকি',
      'বার্ষিক প্রতিবেদন প্রস্তুত'
    ],
    color: 'from-[#F2A65A] to-[#F2A65A]/80'
  },
  {
    category: 'আর্থিক দায়িত্ব',
    icon: GiTakeMyMoney,
    items: [
      'আয়-ব্যয় ব্যবস্থাপনা',
      'বাজেট প্রণয়ন ও অনুমোদন',
      'আর্থিক প্রতিবেদন প্রকাশ',
      'অডিট পরিচালনা'
    ],
    color: 'from-[#25343F] to-[#25343F]/80'
  },
  {
    category: 'সাংগঠনিক দায়িত্ব',
    icon: FaUsers,
    items: [
      'সদস্য সংগ্রহ ও নথিভুক্তকরণ',
      'শাখা সম্প্রসারণ',
      'সদস্যদের মধ্যে সমন্বয়',
      'প্রশিক্ষণ ও কর্মশালা আয়োজন'
    ],
    color: 'from-[#F2A65A] to-[#F2A65A]/80'
  },
  {
    category: 'প্রকল্প বাস্তবায়ন',
    icon: FaHandHoldingHeart,
    items: [
      'সমাজকল্যাণমূলক প্রকল্প গ্রহণ',
      'তহবিল সংগ্রহ ও বিতরণ',
      'প্রকল্প পর্যবেক্ষণ',
      'প্রভাব মূল্যায়ন'
    ],
    color: 'from-[#25343F] to-[#25343F]/80'
  },
  {
    category: 'গবেষণা ও পরিকল্পনা',
    icon: FaChartLine,
    items: [
      'সম্প্রদায়ের চাহিদা নির্ণয়',
      'দীর্ঘমেয়াদী পরিকল্পনা প্রণয়ন',
      'কার্যক্রম মূল্যায়ন',
      'নতুন উদ্যোগ গ্রহণ'
    ],
    color: 'from-[#F2A65A] to-[#F2A65A]/80'
  },
  {
    category: 'যোগাযোগ ও প্রচার',
    icon: FaBullhorn,
    items: [
      'সংগঠনের কার্যক্রম প্রচার',
      'গণমাধ্যমে সংযোগ',
      'বার্ষিক প্রতিবেদন প্রকাশ',
      'সামাজিক যোগাযোগ মাধ্যম ব্যবস্থাপনা'
    ],
    color: 'from-[#25343F] to-[#25343F]/80'
  },
];

const CommitteeResponsibilities = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-montserrat text-sm text-[#F2A65A] uppercase tracking-wider">দায়িত্ব ও কর্তব্য</span>
          <h2 className="font-display text-3xl md:text-4xl text-[#25343F] mt-2 mb-4">
            কমিটির <span className="text-[#F2A65A]">ভূমিকা</span>
          </h2>
          <div className="w-20 h-1 bg-[#F2A65A] mx-auto mb-4"></div>
          <p className="font-inter text-[#25343F]/70">
            কার্যনির্বাহী কমিটির মূল দায়িত্ব ও কর্তব্যসমূহ
          </p>
        </div>

        {/* Responsibilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {responsibilities.map((resp, index) => {
            const Icon = resp.icon;
            return (
              <div key={index} className="group relative">
                <div className="bg-[#EAEFEF] p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                  {/* Icon */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${resp.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl text-[#25343F] mb-4">{resp.category}</h3>
                  <ul className="space-y-3">
                    {resp.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <GiVote className="w-4 h-4 text-[#F2A65A] mt-1 flex-shrink-0" />
                        <span className="font-inter text-sm text-[#25343F]/70">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Decorative Element */}
                  <div className="absolute bottom-4 right-4 w-16 h-16 bg-[#F2A65A]/5 rounded-full blur-xl"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <div className="mt-12 bg-[#25343F] rounded-2xl p-8 text-white">
          <div className="flex items-start gap-4">
            <FaFileAlt className="w-8 h-8 text-[#F2A65A] flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-display text-xl mb-2">গঠনতন্ত্র ও নীতিমালা</h4>
              <p className="font-inter text-white/80">
                কমিটির সকল সদস্য সংগঠনের গঠনতন্ত্র ও নীতিমালা মেনে চলতে বাধ্য। বার্ষিক সাধারণ সভায় কমিটির কার্যক্রমের মূল্যায়ন করা হয় এবং প্রয়োজনীয় নির্দেশনা প্রদান করা হয়।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommitteeResponsibilities
