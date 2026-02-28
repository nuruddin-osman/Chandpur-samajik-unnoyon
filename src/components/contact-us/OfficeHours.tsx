// components/contact/OfficeHours.tsx
import { FaClock, FaCoffee, FaUtensils, FaMoon } from "react-icons/fa";

interface DaySchedule {
  day: string;
  hours: string;
  status: "open" | "closed" | "limited";
  icon?: React.ComponentType<{ className?: string }>;
}

const schedule: DaySchedule[] = [
  {
    day: "শনিবার",
    hours: "সকাল ৯:০০ - বিকাল ৫:০০",
    status: "open",
    icon: FaClock,
  },
  {
    day: "রবিবার",
    hours: "সকাল ৯:০০ - বিকাল ৫:০০",
    status: "open",
    icon: FaClock,
  },
  {
    day: "সোমবার",
    hours: "সকাল ৯:০০ - বিকাল ৫:০০",
    status: "open",
    icon: FaClock,
  },
  {
    day: "মঙ্গলবার",
    hours: "সকাল ৯:০০ - বিকাল ৫:০০",
    status: "open",
    icon: FaClock,
  },
  {
    day: "বুধবার",
    hours: "সকাল ৯:০০ - বিকাল ৫:০০",
    status: "open",
    icon: FaClock,
  },
  {
    day: "বৃহস্পতিবার",
    hours: "সকাল ৯:০০ - বিকাল ৫:০০",
    status: "open",
    icon: FaClock,
  },
  { day: "শুক্রবার", hours: "বন্ধ", status: "closed", icon: FaMoon },
];

const OfficeHours = () => {
  const today = new Date().toLocaleDateString("bn-BD", { weekday: "long" });
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-[#EAEFEF] rounded-2xl p-8">
          <h3 className="font-display text-2xl text-[#25343F] mb-6 flex items-center gap-2">
            <FaClock className="w-6 h-6 text-[#F2A65A]" />
            কার্যালয়ের সময়সূচী
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Schedule List */}
            <div>
              {schedule.map((item, idx) => {
                const Icon = item.icon;
                const isToday = item.day === today;

                return (
                  <div
                    key={idx}
                    className={`flex items-center justify-between py-3 border-b border-white/50 last:border-0 ${
                      isToday ? "bg-[#F2A65A]/10 px-3 -mx-3 rounded-lg" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {Icon && <Icon className="w-4 h-4 text-[#F2A65A]" />}
                      <span
                        className={`font-inter text-sm ${isToday ? "font-bold" : ""}`}
                      >
                        {item.day}
                        {isToday && (
                          <span className="ml-2 text-xs text-[#F2A65A]">
                            (আজ)
                          </span>
                        )}
                      </span>
                    </div>
                    <span
                      className={`font-inter text-sm ${
                        item.status === "closed"
                          ? "text-red-500"
                          : item.status === "limited"
                            ? "text-orange-500"
                            : "text-green-600"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Status Card */}
            <div className="bg-[#25343F] rounded-xl p-6 text-white">
              <h4 className="font-display text-lg mb-4">বর্তমান অবস্থা</h4>

              {schedule.find((d) => d.day === today)?.status === "open" ? (
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-inter">অফিস খোলা আছে</span>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="font-inter">অফিস বন্ধ</span>
                </div>
              )}

              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <FaCoffee className="w-4 h-4 text-[#F2A65A]" />
                  <span className="font-inter text-white/70">
                    মধ্যাহ্ন বিরতি: ১:০০ - ২:০০
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaUtensils className="w-4 h-4 text-[#F2A65A]" />
                  <span className="font-inter text-white/70">
                    জরুরি প্রয়োজনে ২৪/৭ কল করুন
                  </span>
                </div>
              </div>

              {/* Holiday Notice */}
              <div className="mt-6 pt-4 border-t border-white/20">
                <p className="font-inter text-xs text-white/60">
                  * সরকারি ছুটির দিনে অফিস বন্ধ থাকবে। জরুরি প্রয়োজনে ফোন করুন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeHours;
