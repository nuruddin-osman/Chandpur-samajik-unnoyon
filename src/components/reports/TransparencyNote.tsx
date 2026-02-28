// components/reports/TransparencyNote.tsx
import {
  FaShieldAlt,
  FaHandshake,
  FaFileSignature,
  FaUsers,
} from "react-icons/fa";
import { GiVote, GiCheckMark } from "react-icons/gi";

const TransparencyNote = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#25343F] to-[#1a2833] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, #F2A65A 1px, transparent 0)",
                  backgroundSize: "30px 30px",
                }}
              ></div>
            </div>

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <FaShieldAlt className="w-8 h-8 text-[#F2A65A]" />
                <h2 className="font-display text-2xl md:text-3xl">
                  আমাদের <span className="text-[#F2A65A]">স্বচ্ছতার</span>{" "}
                  অঙ্গীকার
                </h2>
              </div>

              <p className="font-inter text-white/90 text-lg mb-8">
                চাঁদপুর উন্নয়ন ফোরামের প্রতিটি টাকার হিসাব স্বচ্ছ ও
                জবাবদিহিমূলক। আমরা বিশ্বাস করি, জনগণের টাকার সঠিক ব্যবহার
                নিশ্চিত করা আমাদের নৈতিক দায়িত্ব।
              </p>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    icon: FaHandshake,
                    title: "নিরপেক্ষ অডিট",
                    desc: "বার্ষিক নিরপেক্ষ অডিট ফার্ম দ্বারা অডিট সম্পন্ন",
                  },
                  {
                    icon: FaFileSignature,
                    title: "প্রকাশিত প্রতিবেদন",
                    desc: "প্রতি মাসের আর্থিক প্রতিবেদন ওয়েবসাইটে প্রকাশিত",
                  },
                  {
                    icon: FaUsers,
                    title: "সদস্যদের অংশগ্রহণ",
                    desc: "বার্ষিক সাধারণ সভায় আর্থিক বিবরণী উপস্থাপন",
                  },
                  {
                    icon: GiVote,
                    title: "সিদ্ধান্ত গ্রহণ",
                    desc: "কমিটির সিদ্ধান্তে সদস্যদের মতামতের প্রতিফলন",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#F2A65A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-[#F2A65A]" />
                      </div>
                      <div>
                        <h4 className="font-display text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="font-inter text-sm text-white/70">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
                {[
                  { label: "অডিট সম্পন্ন", value: "২০২৩-২৪" },
                  { label: "স্বচ্ছতা স্কোর", value: "৯৮%" },
                  { label: "সন্তুষ্ট দাতা", value: "১০০০+" },
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="font-display text-xl text-[#F2A65A]">
                      {item.value}
                    </div>
                    <div className="font-inter text-xs text-white/60 mt-1">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Signature */}
              <div className="mt-8 flex items-center justify-between">
                <div>
                  <p className="font-inter text-sm text-white/60">সভাপতি</p>
                  <p className="font-display text-white">আব্দুর রহিম</p>
                </div>
                <div>
                  <p className="font-inter text-sm text-white/60">
                    অর্থ সম্পাদক
                  </p>
                  <p className="font-display text-white">ফাতেমা বেগম</p>
                </div>
                <GiCheckMark className="w-8 h-8 text-[#F2A65A]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparencyNote;
