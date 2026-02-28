// components/reports/FinancialSummary.tsx
import { FaArrowUp, FaArrowDown, FaWallet, FaUniversity } from "react-icons/fa";
import { GiTakeMyMoney, GiReceiveMoney } from "react-icons/gi";

interface SummaryCardProps {
  title: string;
  amount: string;
  icon: React.ComponentType<{ className?: string }>;
  trend: number;
  color: string;
  bgColor: string;
}

const SummaryCard = ({
  title,
  amount,
  icon: Icon,
  trend,
  color,
  bgColor,
}: SummaryCardProps) => (
  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
    <div className="flex justify-between items-start mb-4">
      <div
        className={`w-12 h-12 ${bgColor} rounded-xl flex items-center justify-center`}
      >
        <Icon className={`w-6 h-6 ${color}`} />
      </div>
      <div
        className={`flex items-center gap-1 text-sm ${trend > 0 ? "text-green-600" : "text-red-600"}`}
      >
        {trend > 0 ? <FaArrowUp /> : <FaArrowDown />}
        <span>{Math.abs(trend)}%</span>
      </div>
    </div>
    <h3 className="font-inter text-sm text-[#25343F]/70 mb-1">{title}</h3>
    <p className="font-display text-2xl text-[#25343F]">{amount}</p>
  </div>
);

const FinancialSummary = () => {
  const summaryData = [
    {
      title: "মোট আয় (চলতি মাস)",
      amount: "৳ ১,২৫,০০০",
      icon: GiReceiveMoney,
      trend: 12,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "মোট ব্যয় (চলতি মাস)",
      amount: "৳ ৮৫,০০০",
      icon: GiTakeMyMoney,
      trend: -5,
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
    {
      title: "নিট ব্যালেন্স",
      amount: "৳ ৪০,০০০",
      icon: FaWallet,
      trend: 8,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "তহবিল মজুদ",
      amount: "৳ ৪,৩০,০০০",
      icon: FaUniversity,
      trend: 15,
      color: "text-[#F2A65A]",
      bgColor: "bg-[#F2A65A]/10",
    },
  ];
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {summaryData.map((item, idx) => (
            <SummaryCard key={idx} {...item} />
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { label: "মোট লেনদেন", value: "২৪৫টি", icon: FaArrowUp },
            { label: "গড় আয়/মাস", value: "৳ ১,০৪,০০০", icon: FaArrowUp },
            { label: "গড় ব্যয়/মাস", value: "৳ ৬৮,০০০", icon: FaArrowDown },
            { label: "সর্বোচ্চ দান", value: "৳ ৫০,০০০", icon: FaArrowUp },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#EAEFEF] rounded-xl p-4 text-center"
              >
                <p className="font-inter text-sm text-[#25343F]/70 mb-1">
                  {item.label}
                </p>
                <p className="font-display text-lg text-[#25343F]">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FinancialSummary;
