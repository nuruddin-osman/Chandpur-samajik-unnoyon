

// components/committee/CommitteeMeetings.tsx
import { FaCalendarCheck, FaClock, FaMapMarkerAlt, FaVideo, FaFilePdf } from 'react-icons/fa';
import { GiDiscussion } from 'react-icons/gi';

interface Meeting {
  id: number;
  date: string;
  time: string;
  type: 'নিয়মিত' | 'জরুরি' | 'বার্ষিক';
  venue: string;
  agenda: string[];
  status: 'upcoming' | 'completed' | 'cancelled';
}

const meetings: Meeting[] = [
  {
    id: 1,
    date: '১৫ মার্চ, ২০২৪',
    time: 'বিকাল ৪:০০টা',
    type: 'নিয়মিত',
    venue: 'সংগঠনের কার্যালয়, চাঁদপুর',
    agenda: [
      'আগের সভার কার্যবিবরণী পাঠ',
      'চলমান প্রকল্পের অগ্রগতি পর্যালোচনা',
      'নতুন সদস্য সংগ্রহ পরিকল্পনা',
      'আগামী ঈদ উপলক্ষে বিশেষ কর্মসূচি'
    ],
    status: 'upcoming'
  },
  {
    id: 2,
    date: '২০ ফেব্রুয়ারি, ২০২৪',
    time: 'বিকাল ৪:৩০টা',
    type: 'নিয়মিত',
    venue: 'সংগঠনের কার্যালয়, চাঁদপুর',
    agenda: [
      'শীতবস্ত্র বিতরণ কর্মসূচির মূল্যায়ন',
      'আর্থিক প্রতিবেদন পর্যালোচনা',
      'শিক্ষাবৃত্তির জন্য প্রার্থী নির্বাচন'
    ],
    status: 'completed'
  },
  {
    id: 3,
    date: '৫ জানুয়ারি, ২০২৪',
    time: 'সকাল ১০:০০টা',
    type: 'বার্ষিক',
    venue: 'চাঁদপুর শহীদ মিনার মিলনায়তন',
    agenda: [
      'বার্ষিক প্রতিবেদন উপস্থাপন',
      'আর্থিক বিবরণী অনুমোদন',
      'নতুন কমিটি গঠন',
      'আগামী বছরের কর্মপরিকল্পনা প্রণয়ন'
    ],
    status: 'completed'
  }
];

const CommitteeMeetings = () => {
  return (
    <section className="py-20 bg-[#EAEFEF]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-montserrat text-sm text-[#F2A65A] uppercase tracking-wider">সভার সময়সূচী</span>
          <h2 className="font-display text-3xl md:text-4xl text-[#25343F] mt-2 mb-4">
            কমিটির <span className="text-[#F2A65A]">সভা</span>
          </h2>
          <div className="w-20 h-1 bg-[#F2A65A] mx-auto mb-4"></div>
          <p className="font-inter text-[#25343F]/70">
            নিয়মিত সভার সময়সূচী ও কার্যবিবরণী
          </p>
        </div>

        {/* Meetings List */}
        <div className="max-w-4xl mx-auto">
          {meetings.map((meeting) => (
            <div key={meeting.id} className="relative mb-6 last:mb-0">
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
                {/* Status Badge */}
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-montserrat
                    ${meeting.status === 'upcoming' ? 'bg-[#F2A65A] text-[#25343F]' : 
                      meeting.status === 'completed' ? 'bg-green-100 text-green-700' : 
                      'bg-red-100 text-red-700'}`}>
                    {meeting.status === 'upcoming' ? 'আসন্ন' : 
                     meeting.status === 'completed' ? 'সম্পন্ন' : 'বাতিল'}
                  </span>
                  <span className="text-sm font-inter text-[#F2A65A]">{meeting.type} সভা</span>
                </div>

                {/* Date & Venue */}
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <FaCalendarCheck className="w-4 h-4 text-[#F2A65A]" />
                    <span className="font-inter text-sm text-[#25343F]">{meeting.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="w-4 h-4 text-[#F2A65A]" />
                    <span className="font-inter text-sm text-[#25343F]">{meeting.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="w-4 h-4 text-[#F2A65A]" />
                    <span className="font-inter text-sm text-[#25343F]">{meeting.venue}</span>
                  </div>
                </div>

                {/* Agenda */}
                <div className="mb-4">
                  <h4 className="font-display text-lg text-[#25343F] mb-3 flex items-center gap-2">
                    <GiDiscussion className="w-5 h-5 text-[#F2A65A]" />
                    আলোচ্য সূচি
                  </h4>
                  <ul className="space-y-2">
                    {meeting.agenda.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#F2A65A] rounded-full mt-2"></span>
                        <span className="font-inter text-sm text-[#25343F]/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-[#EAEFEF]">
                  {meeting.status === 'completed' ? (
                    <button className="flex items-center gap-2 text-sm font-inter text-[#F2A65A] hover:text-[#25343F] transition">
                      <FaFilePdf className="w-4 h-4" />
                      কার্যবিবরণী ডাউনলোড
                    </button>
                  ) : meeting.status === 'upcoming' ? (
                    <button className="flex items-center gap-2 text-sm font-inter text-[#F2A65A] hover:text-[#25343F] transition">
                      <FaVideo className="w-4 h-4" />
                      অনলাইনে যোগ দিন
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Calendar Button */}
        <div className="text-center mt-8">
          <button className="font-montserrat bg-[#25343F] text-white px-8 py-3 rounded-md hover:bg-[#F2A65A] hover:text-[#25343F] transition">
            সম্পূর্ণ সময়সূচী দেখুন
          </button>
        </div>
      </div>
    </section>
  )
}

export default CommitteeMeetings
