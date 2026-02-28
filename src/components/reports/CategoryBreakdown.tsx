// components/reports/CategoryBreakdown.tsx
import { useEffect, useState } from "react";
import {
  FaGraduationCap,
  FaHeartbeat,
  FaHandsHelping,
  FaHome,
  FaUtensils,
  FaQuestion,
} from "react-icons/fa";
import { GiClothes, GiMedicalPack } from "react-icons/gi";

interface CategoryData {
  name: string;
  amount: number;
  percentage: number;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const categories: CategoryData[] = [
  {
    name: "শিক্ষা",
    amount: 320000,
    percentage: 28,
    icon: FaGraduationCap,
    color: "bg-blue-500",
  },
  {
    name: "চিকিৎসা",
    amount: 280000,
    percentage: 24,
    icon: GiMedicalPack,
    color: "bg-green-500",
  },
  {
    name: "ত্রাণ",
    amount: 220000,
    percentage: 19,
    icon: FaHandsHelping,
    color: "bg-orange-500",
  },
  {
    name: "গৃহায়ন",
    amount: 150000,
    percentage: 13,
    icon: FaHome,
    color: "bg-purple-500",
  },
  {
    name: "খাদ্য",
    amount: 100000,
    percentage: 9,
    icon: FaUtensils,
    color: "bg-yellow-500",
  },
  {
    name: "অন্যান্য",
    amount: 83000,
    percentage: 7,
    icon: FaQuestion,
    color: "bg-gray-500",
  },
];

const CategoryBreakdown = () => {
  const [client, setClient] = useState(false);
  const totalExpense = categories.reduce((sum, cat) => sum + cat.amount, 0);

  useEffect(() => {
    setClient(true); // component mounted → client-side
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Pie Chart */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-[#25343F] mb-4">
              ক্যাটাগরি অনুযায়ী <span className="text-[#F2A65A]">ব্যয়</span>
            </h2>
            <p className="font-inter text-[#25343F]/70 mb-8">
              কোথায় কত টাকা ব্যয় হচ্ছে? দেখুন ক্যাটাগরি ওয়াইজ ব্রেকডাউন।
            </p>

            {/* Pie Chart Representation */}
            <div className="relative w-64 h-64 mx-auto mb-8">
              {/* <svg viewBox="0 0 100 100" className="transform -rotate-90">
                {categories.map((cat, idx) => {
                  const startAngle = categories.slice(0, idx).reduce((sum, c) => sum + c.percentage, 0) * 3.6;
                  const endAngle = startAngle + cat.percentage * 3.6;
                  
                  const startX = 50 + 40 * Math.cos((startAngle * Math.PI) / 180);
                  const startY = 50 + 40 * Math.sin((startAngle * Math.PI) / 180);
                  const endX = 50 + 40 * Math.cos((endAngle * Math.PI) / 180);
                  const endY = 50 + 40 * Math.sin((endAngle * Math.PI) / 180);
                  
                  const largeArcFlag = cat.percentage > 50 ? 1 : 0;
                  
                  return (
                    <path
                      key={idx}
                      d={`M 50 50 L ${startX} ${startY} A 40 40 0 ${largeArcFlag} 1 ${endX} ${endY} Z`}
                      fill={cat.color.replace('bg-', '')}
                      className="hover:opacity-80 transition cursor-pointer"
                    >
                      <title>{cat.name}: ৳{cat.amount.toLocaleString()} ({cat.percentage}%)</title>
                    </path>
                  );
                })}
              </svg> */}
              <svg viewBox="0 0 100 100">
                {categories.map((cat, idx) => (
                  <path key={idx} d="M ..." fill={cat.color}>
                    {client && (
                      <title>
                        {cat.name}: ৳{cat.amount.toLocaleString()} (
                        {cat.percentage}%)
                      </title>
                    )}
                  </path>
                ))}
              </svg>
            </div>
          </div>

          {/* Right Side - Category List */}
          <div>
            <div className="bg-[#EAEFEF] rounded-2xl p-6">
              <h3 className="font-display text-xl text-[#25343F] mb-6">
                ব্যয়ের খাতসমূহ
              </h3>

              <div className="space-y-4">
                {categories.map((cat, idx) => {
                  const Icon = cat.icon;
                  return (
                    <div key={idx} className="group">
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className={`w-8 h-8 ${cat.color} bg-opacity-20 rounded-lg flex items-center justify-center`}
                        >
                          <Icon
                            className={`w-4 h-4 ${cat.color.replace("bg-", "text-")}`}
                          />
                        </div>
                        <span className="flex-1 font-inter text-[#25343F]">
                          {cat.name}
                        </span>
                        <span className="font-display text-[#25343F]">
                          ৳ {cat.amount.toLocaleString()}
                        </span>
                        <span className="font-montserrat text-sm text-[#F2A65A]">
                          {cat.percentage}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                        <div
                          className={`h-full ${cat.color} transition-all duration-500 group-hover:opacity-80`}
                          style={{ width: `${cat.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Total */}
              <div className="mt-6 pt-6 border-t border-white flex justify-between">
                <span className="font-display text-lg text-[#25343F]">
                  মোট ব্যয়
                </span>
                <span className="font-display text-xl text-[#F2A65A]">
                  ৳ {totalExpense.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryBreakdown;
