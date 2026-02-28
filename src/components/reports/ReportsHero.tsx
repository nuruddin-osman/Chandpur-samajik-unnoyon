// components/reports/ReportsHero.tsx
import {
  FaChartLine,
  FaFileInvoiceDollar,
  FaHandHoldingUsd,
  FaPercentage,
} from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";

const ReportsHero = () => {
  const stats = [
    {
      label: "মোট আয় (২০২৪)",
      value: "৳ ১২,৫০,০০০",
      icon: FaHandHoldingUsd,
      change: "+১৫%",
    },
    {
      label: "মোট ব্যয় (২০২৪)",
      value: "৳ ৮,২০,০০০",
      icon: GiMoneyStack,
      change: "+১২%",
    },
    {
      label: "বর্তমান ব্যালেন্স",
      value: "৳ ৪,৩০,০০০",
      icon: FaChartLine,
      change: "সুস্থ",
    },
    {
      label: "স্বচ্ছতা সূচক",
      value: "১০০%",
      icon: FaPercentage,
      change: "A+ রেটিং",
    },
  ];
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
            <span className="text-[#F2A65A]">আর্থিক প্রতিবেদন</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#25343F] mb-6">
            স্বচ্ছ <span className="text-[#F2A65A]">আর্থিক</span> হিসাব
          </h1>

          {/* Description */}
          <p className="font-inter text-lg md:text-xl text-[#25343F]/80 leading-relaxed max-w-2xl mx-auto">
            আপনার দেওয়া প্রতিটি টাকার হিসাব আমরা প্রকাশ করি পাবলিক ড্যাশবোর্ডে।
            দেখুন কোথায় এবং কীভাবে ব্যয় হচ্ছে আপনার অর্থ।
          </p>

          {/* Decorative Line */}
          <div className="w-24 h-1 bg-[#F2A65A] mx-auto mt-8"></div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition group"
                >
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-[#F2A65A]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-[#F2A65A]" />
                    </div>
                  </div>
                  <div className="font-display text-lg md:text-xl text-[#25343F] mb-1">
                    {stat.value}
                  </div>
                  <div className="font-inter text-sm text-[#25343F]/70">
                    {stat.label}
                  </div>
                  <div className="mt-2 text-xs font-montserrat text-green-600">
                    {stat.change}
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

export default ReportsHero;
