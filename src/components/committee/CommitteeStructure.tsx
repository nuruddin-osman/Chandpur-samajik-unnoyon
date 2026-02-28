


// components/committee/CommitteeStructure.tsx
import { FaSitemap, FaUsers, FaUserTie, FaHandshake, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import { GiOrganigram } from 'react-icons/gi';

const structureData = [
  {
    title: 'সভাপতি',
    description: 'কমিটির প্রধান, সকল কার্যক্রমের তত্ত্বাবধান ও দিকনির্দেশনা প্রদান',
    icon: FaUserTie,
    color: 'from-[#F2A65A] to-[#F2A65A]/80',
  },
  {
    title: 'সাধারণ সম্পাদক',
    description: 'দৈনন্দিন কার্যক্রম পরিচালনা, সভা আয়োজন ও সদস্যদের মধ্যে সমন্বয়',
    icon: FaUsers,
    color: 'from-[#25343F] to-[#25343F]/80',
  },
  {
    title: 'সাংগঠনিক সম্পাদক',
    description: 'সদস্য সংগ্রহ, শাখা সম্প্রসারণ ও সাংগঠনিক কার্যক্রম তত্ত্বাবধান',
    icon: FaSitemap,
    color: 'from-[#F2A65A] to-[#F2A65A]/80',
  },
  {
    title: 'অর্থ সম্পাদক',
    description: 'আয়-ব্যয় ব্যবস্থাপনা, বাজেট প্রণয়ন ও আর্থিক প্রতিবেদন তৈরি',
    icon: FaChartLine,
    color: 'from-[#25343F] to-[#25343F]/80',
  },
  {
    title: 'উপদেষ্টা',
    description: 'গুরুত্বপূর্ণ সিদ্ধান্ত গ্রহণে পরামর্শ ও দিকনির্দেশনা প্রদান',
    icon: FaHandshake,
    color: 'from-[#F2A65A] to-[#F2A65A]/80',
  },
  {
    title: 'নির্বাহী সদস্য',
    description: 'বিভিন্ন কার্যক্রম বাস্তবায়ন ও প্রকল্প পরিচালনায় সহায়তা',
    icon: FaShieldAlt,
    color: 'from-[#25343F] to-[#25343F]/80',
  },
];

const CommitteeStructure = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-montserrat text-sm text-[#F2A65A] uppercase tracking-wider">কমিটি কাঠামো</span>
          <h2 className="font-display text-3xl md:text-4xl text-[#25343F] mt-2 mb-4">
            আমাদের <span className="text-[#F2A65A]">গঠনতন্ত্র</span>
          </h2>
          <div className="w-20 h-1 bg-[#F2A65A] mx-auto mb-4"></div>
          <p className="font-inter text-[#25343F]/70">
            ১১ সদস্যের কার্যনির্বাহী কমিটি ও উপদেষ্টা পরিষদ নিয়ে আমাদের কাঠামো
          </p>
        </div>

        {/* Structure Diagram */}
        <div className="relative mb-16">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#F2A65A] via-[#F2A65A]/50 to-transparent transform -translate-x-1/2"></div>
          
          <div className="relative grid grid-cols-2 gap-8">
            {/* Left Side - Executive */}
            <div className="space-y-8">
              {structureData.slice(0, 3).map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="group relative">
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-x-2 border border-[#EAEFEF]">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-display text-lg text-[#25343F]">{item.title}</h3>
                          <p className="font-inter text-sm text-[#25343F]/70">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Side - Advisory */}
            <div className="space-y-8 mt-12">
              {structureData.slice(3, 6).map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="group relative">
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-x-2 border border-[#EAEFEF]">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-display text-lg text-[#25343F]">{item.title}</h3>
                          <p className="font-inter text-sm text-[#25343F]/70">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Organization Chart Preview */}
        <div className="bg-[#25343F] rounded-2xl p-8 text-white">
          <div className="flex items-center gap-4 mb-6">
            <GiOrganigram className="w-8 h-8 text-[#F2A65A]" />
            <h3 className="font-display text-2xl">সাংগঠনিক কাঠামো</h3>
          </div>
          <div className="grid md:grid-cols-5 gap-4 text-center">
            {['সভাপতি', 'সাধারণ সম্পাদক', 'সাংগঠনিক', 'অর্থ', 'সদস্য'].map((role, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition">
                  <p className="font-inter text-sm">{role}</p>
                </div>
                {idx < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-[#F2A65A]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommitteeStructure
