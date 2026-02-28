

// components/committee/ExecutiveCommittee.tsx
import Image from 'next/image';
import { FaFacebook, FaEnvelope, FaPhone, FaUserCircle } from 'react-icons/fa';
import { GiPositionMarker } from 'react-icons/gi';

interface CommitteeMember {
  id: number;
  name: string;
  position: string;
  image?: string;
  email?: string;
  phone?: string;
  facebook?: string;
  responsibilities: string[];
}

const executiveMembers: CommitteeMember[] = [
  {
    id: 1,
    name: 'আব্দুর রহিম',
    position: 'সভাপতি',
    email: 'president@chandpurforum.org',
    phone: '০১৮১২-৩৪৫৬৭৮',
    facebook: '#',
    responsibilities: [
      'কমিটির প্রধান হিসেবে দায়িত্ব পালন',
      'সকল কার্যক্রমের তত্ত্বাবধান',
      'গুরুত্বপূর্ণ সিদ্ধান্ত গ্রহণ',
      'বহিঃসংযোগ ও প্রতিনিধিত্ব'
    ]
  },
  {
    id: 2,
    name: 'নাজমা আক্তার',
    position: 'সাধারণ সম্পাদক',
    email: 'gs@chandpurforum.org',
    phone: '০১৮১২-৩৪৫৬৭৯',
    facebook: '#',
    responsibilities: [
      'দৈনন্দিন কার্যক্রম পরিচালনা',
      'সভা আয়োজন ও সঞ্চালন',
      'সদস্যদের মধ্যে সমন্বয়',
      'বার্ষিক প্রতিবেদন প্রস্তুত'
    ]
  },
  {
    id: 3,
    name: 'মোঃ জাহিদ',
    position: 'সাংগঠনিক সম্পাদক',
    email: 'org@chandpurforum.org',
    phone: '০১৮১২-৩৪৫৬৮০',
    facebook: '#',
    responsibilities: [
      'সদস্য সংগ্রহ ও নথিভুক্তকরণ',
      'শাখা সম্প্রসারণ',
      'সাংগঠনিক প্রশিক্ষণ',
      'সদস্য সম্মেলন আয়োজন'
    ]
  },
  {
    id: 4,
    name: 'ফাতেমা বেগম',
    position: 'অর্থ সম্পাদক',
    email: 'finance@chandpurforum.org',
    phone: '০১৮১২-৩৪৫৬৮১',
    facebook: '#',
    responsibilities: [
      'আয়-ব্যয় ব্যবস্থাপনা',
      'বাজেট প্রণয়ন',
      'আর্থিক প্রতিবেদন তৈরি',
      'অডিট পরিচালনা'
    ]
  },
  {
    id: 5,
    name: 'রফিকুল ইসলাম',
    position: 'দপ্তর সম্পাদক',
    email: 'office@chandpurforum.org',
    phone: '০১৮১২-৩৪৫৬৮২',
    facebook: '#',
    responsibilities: [
      'দপ্তর ব্যবস্থাপনা',
      'নথিপত্র সংরক্ষণ',
      'সভার কার্যবিবরণী রাখা',
      'যোগাযোগ রক্ষা'
    ]
  },
  {
    id: 6,
    name: 'শাহিনা ইয়াসমিন',
    position: 'নারী ও শিশু বিষয়ক সম্পাদক',
    email: 'women@chandpurforum.org',
    phone: '০১৮১২-৩৪৫৬৮৩',
    facebook: '#',
    responsibilities: [
      'নারী উন্নয়ন কর্মসূচি',
      'শিশু কল্যাণ কার্যক্রম',
      'মাতৃস্বাস্থ্য সচেতনতা',
      'নারী উদ্যোক্তা সৃষ্টি'
    ]
  }
];

const ExecutiveCommittee = () => {
  return (
    <section className="py-20 bg-[#EAEFEF]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-montserrat text-sm text-[#F2A65A] uppercase tracking-wider">কার্যনির্বাহী কমিটি</span>
          <h2 className="font-display text-3xl md:text-4xl text-[#25343F] mt-2 mb-4">
            আমাদের <span className="text-[#F2A65A]">নেতৃত্ব</span>
          </h2>
          <div className="w-20 h-1 bg-[#F2A65A] mx-auto mb-4"></div>
          <p className="font-inter text-[#25343F]/70">
            ২০২৪-২০২৫ মেয়াদের জন্য নির্বাচিত কার্যনির্বাহী কমিটি
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {executiveMembers.map((member) => (
            <div key={member.id} className="group relative">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Header with Position */}
                <div className="relative h-32 bg-gradient-to-r from-[#F2A65A] to-[#25343F]">
                  <div className="absolute -bottom-12 left-6">
                    <div className="w-24 h-24 bg-[#EAEFEF] rounded-xl border-4 border-white shadow-lg overflow-hidden">
                      {member.image ? (
                        <Image src={member.image} alt={member.name} width={96} height={96} className="object-cover" />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#F2A65A]/20 to-[#25343F]/20 flex items-center justify-center">
                          <FaUserCircle className="w-12 h-12 text-[#25343F]/30" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-16 p-6">
                  <h3 className="font-display text-xl text-[#25343F] mb-1">{member.name}</h3>
                  <p className="font-montserrat text-sm text-[#F2A65A] font-semibold mb-4">{member.position}</p>

                  {/* Responsibilities */}
                  <div className="mb-4">
                    <p className="font-inter text-sm text-[#25343F]/70 mb-2">দায়িত্বসমূহ:</p>
                    <ul className="space-y-1">
                      {member.responsibilities.slice(0, 2).map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#25343F]/60">
                          <GiPositionMarker className="w-3 h-3 text-[#F2A65A] mt-1 flex-shrink-0" />
                          <span className="font-inter">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Icons */}
                  <div className="flex items-center gap-3 pt-4 border-t border-[#EAEFEF]">
                    {member.email && (
                      <a href={`mailto:${member.email}`} className="p-2 bg-[#EAEFEF] rounded-lg hover:bg-[#F2A65A] hover:text-white transition group">
                        <FaEnvelope className="w-4 h-4 text-[#25343F] group-hover:text-white" />
                      </a>
                    )}
                    {member.phone && (
                      <a href={`tel:${member.phone}`} className="p-2 bg-[#EAEFEF] rounded-lg hover:bg-[#F2A65A] hover:text-white transition group">
                        <FaPhone className="w-4 h-4 text-[#25343F] group-hover:text-white" />
                      </a>
                    )}
                    {member.facebook && (
                      <a href={member.facebook} className="p-2 bg-[#EAEFEF] rounded-lg hover:bg-[#F2A65A] hover:text-white transition group">
                        <FaFacebook className="w-4 h-4 text-[#25343F] group-hover:text-white" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover Overlay with Full Details */}
                <div className="absolute inset-0 bg-white/95 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                  <div className="text-center">
                    <h4 className="font-display text-lg text-[#25343F] mb-2">{member.name}</h4>
                    <p className="font-montserrat text-sm text-[#F2A65A] mb-4">{member.position}</p>
                    <div className="text-left">
                      <p className="font-inter text-sm font-semibold text-[#25343F] mb-2">সম্পূর্ণ দায়িত্ব:</p>
                      <ul className="space-y-1">
                        {member.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-[#25343F]/70">
                            <span className="w-1 h-1 bg-[#F2A65A] rounded-full mt-2"></span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExecutiveCommittee
