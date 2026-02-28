

// components/committee/JoinCommitteeCTA.tsx
import Link from 'next/link';
import { FaUserPlus, FaHandHoldingHeart, FaClipboardList, FaQuestionCircle } from 'react-icons/fa';

const JoinCommitteeCTA = () => {
  return (
    <section className="py-20 bg-[#25343F] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #F2A65A 1px, transparent 0)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            কমিটিতে <span className="text-[#F2A65A]">যোগ দিন</span>
          </h2>
          <p className="font-inter text-lg text-white/80 mb-8">
            আপনি কি নেতৃত্ব দিতে প্রস্তুত? চাঁদপুরের উন্নয়নে আপনার অবদান রাখুন। কমিটির সদস্য হয়ে সমাজ পরিবর্তনের অংশীদার হোন।
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Requirements */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-left">
              <h3 className="font-display text-xl text-[#F2A65A] mb-4 flex items-center gap-2">
                <FaClipboardList className="w-5 h-5" />
                যা যা প্রয়োজন
              </h3>
              <ul className="space-y-3">
                {[
                  'চাঁদপুরের স্থায়ী বাসিন্দা হতে হবে',
                  'বয়স কমপক্ষে ২১ বছর',
                  'সক্রিয় সদস্য হতে হবে (ন্যূনতম ১ বছর)',
                  'সুশাসন ও স্বচ্ছতায় বিশ্বাসী',
                  'সমাজসেবায় আগ্রহী'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FaHandHoldingHeart className="w-4 h-4 text-[#F2A65A] mt-1 flex-shrink-0" />
                    <span className="font-inter text-sm text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-left">
              <h3 className="font-display text-xl text-[#F2A65A] mb-4 flex items-center gap-2">
                <FaQuestionCircle className="w-5 h-5" />
                প্রক্রিয়া
              </h3>
              <ul className="space-y-3">
                {[
                  'আগ্রহের আবেদন জমা দিন',
                  'সাক্ষাৎকারে অংশ নিন',
                  'কমিটির সিদ্ধান্তের জন্য অপেক্ষা করুন',
                  'নির্বাচিত হলে দায়িত্ব গ্রহণ',
                  'প্রশিক্ষণে অংশ নিন'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-[#F2A65A] rounded-full flex items-center justify-center text-xs text-[#25343F] font-bold">
                      {idx + 1}
                    </span>
                    <span className="font-inter text-sm text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/committee/apply"
              className="font-montserrat bg-[#F2A65A] text-[#25343F] px-8 py-4 rounded-md hover:bg-opacity-90 transition flex items-center justify-center gap-2 group"
            >
              <FaUserPlus className="w-5 h-5 group-hover:scale-110 transition" />
              আবেদন করুন
            </Link>
            <Link
              href="/committee/requirements"
              className="font-montserrat border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-[#25343F] transition"
            >
              বিস্তারিত জানুন
            </Link>
          </div>

          {/* Note */}
          <p className="font-inter text-sm text-white/60 mt-6">
            * আগামী কমিটি গঠনের ৩ মাস আগে আবেদন প্রক্রিয়া শুরু হবে
          </p>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
                fill="#EAEFEF"/>
        </svg>
      </div>
    </section>
  )
}

export default JoinCommitteeCTA
