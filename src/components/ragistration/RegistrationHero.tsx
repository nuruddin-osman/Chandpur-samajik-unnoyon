// components/registration/RegistrationHero.tsx
import { FaUserPlus, FaCrown, FaUser, FaCheckCircle } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";

const RegistrationHero = () => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[#EAEFEF]">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #25343F 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#F2A65A]/20 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm font-inter text-[#25343F]/60 mb-6">
            <span>হোম</span>
            <span>•</span>
            <span className="text-[#F2A65A]">সদস্য নিবন্ধন</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#25343F] mb-6">
            সদস্য <span className="text-[#F2A65A]">নিবন্ধন</span>
          </h1>

          {/* Description */}
          <p className="font-inter text-lg md:text-xl text-[#25343F]/80 leading-relaxed max-w-2xl mx-auto">
            চাঁদপুর উন্নয়ন ফোরামের সদস্য হয়ে সমাজ পরিবর্তনের অংশীদার হোন।
            আপনার অংশগ্রহণেই সম্ভব সমৃদ্ধ চাঁদপুর গড়া।
          </p>

          {/* Decorative Line */}
          <div className="w-24 h-1 bg-[#F2A65A] mx-auto mt-8"></div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { icon: FaUser, label: "সক্রিয় সদস্য", value: "৫০০+" },
              { icon: FaCrown, label: "পেইড সদস্য", value: "৩৫০+" },
              { icon: FaUser, label: "নন-পেইড", value: "১৫০+" },
              { icon: FaCheckCircle, label: "নতুন সদস্য", value: "২৫/মাস" },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="bg-white rounded-xl p-4 shadow-lg">
                  <Icon className="w-6 h-6 text-[#F2A65A] mx-auto mb-2" />
                  <div className="font-display text-xl text-[#25343F]">
                    {stat.value}
                  </div>
                  <div className="font-inter text-xs text-[#25343F]/70">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
};

export default RegistrationHero;
