// components/reports/IncomeExpenseChart.tsx
import { useState } from "react";
import {
  FaChartBar,
  FaChartPie,
  FaCalendarAlt,
  FaDownload,
} from "react-icons/fa";
import { BsBarChartLine, BsPieChart } from "react-icons/bs";

interface MonthlyData {
  month: string;
  income: number;
  expense: number;
}

const monthlyData: MonthlyData[] = [
  { month: "জানুয়ারি", income: 120000, expense: 85000 },
  { month: "ফেব্রুয়ারি", income: 135000, expense: 92000 },
  { month: "মার্চ", income: 110000, expense: 78000 },
  { month: "এপ্রিল", income: 145000, expense: 102000 },
  { month: "মে", income: 125000, expense: 88000 },
  { month: "জুন", income: 155000, expense: 110000 },
  { month: "জুলাই", income: 130000, expense: 95000 },
  { month: "আগস্ট", income: 140000, expense: 98000 },
  { month: "সেপ্টেম্বর", income: 125000, expense: 89000 },
  { month: "অক্টোবর", income: 135000, expense: 93000 },
  { month: "নভেম্বর", income: 145000, expense: 100000 },
  { month: "ডিসেম্বর", income: 160000, expense: 115000 },
];

const IncomeExpenseChart = () => {
  const [chartType, setChartType] = useState<"bar" | "line">("bar");
  const [selectedYear, setSelectedYear] = useState("২০২৪");
  const maxValue = Math.max(
    ...monthlyData.map((d) => Math.max(d.income, d.expense)),
  );
  return (
    <section className="py-16 bg-[#EAEFEF]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-[#25343F] mb-2">
              আয়-ব্যয় <span className="text-[#F2A65A]">তুলনামূলক চিত্র</span>
            </h2>
            <p className="font-inter text-[#25343F]/70">
              মাসিক আয় ও ব্যয়ের গ্রাফিক্যাল উপস্থাপন
            </p>
          </div>

          {/* Controls */}
          <div className="flex gap-3 mt-4 md:mt-0">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-4 py-2 bg-white rounded-lg border border-[#EAEFEF] font-inter text-sm focus:outline-none focus:border-[#F2A65A]"
            >
              <option>২০২৪</option>
              <option>২০২৩</option>
              <option>২০২২</option>
            </select>

            <button
              onClick={() => setChartType("bar")}
              className={`p-2 rounded-lg transition ${chartType === "bar" ? "bg-[#F2A65A] text-white" : "bg-white text-[#25343F]"}`}
            >
              <FaChartBar className="w-5 h-5" />
            </button>
            <button
              onClick={() => setChartType("line")}
              className={`p-2 rounded-lg transition ${chartType === "line" ? "bg-[#F2A65A] text-white" : "bg-white text-[#25343F]"}`}
            >
              <BsBarChartLine className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Chart Container */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          {/* Legend */}
          <div className="flex gap-6 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#F2A65A] rounded"></div>
              <span className="font-inter text-sm text-[#25343F]">আয়</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#25343F] rounded"></div>
              <span className="font-inter text-sm text-[#25343F]">ব্যয়</span>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="relative h-80">
            {/* Y-axis labels */}
            <div className="absolute -left-10 top-0 h-full flex flex-col justify-between text-xs text-[#25343F]/60">
              <span>৳ ২০০k</span>
              <span>৳ ১৫০k</span>
              <span>৳ ১০০k</span>
              <span>৳ ৫০k</span>
              <span>৳ ০</span>
            </div>

            {/* Bars Container */}
            <div className="ml-6 h-full flex items-end justify-between gap-2">
              {monthlyData.map((data, idx) => (
                <div
                  key={idx}
                  className="flex-1 flex flex-col items-center gap-1 group"
                >
                  {/* Bars */}
                  <div className="w-full flex gap-1 items-end h-64">
                    {/* Income Bar */}
                    <div className="flex-1 flex flex-col items-center">
                      <div
                        className="w-full bg-[#F2A65A] rounded-t transition-all duration-300 group-hover:opacity-80"
                        style={{ height: `${(data.income / maxValue) * 100}%` }}
                      >
                        <div className="opacity-0 group-hover:opacity-100 absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#25343F] text-white text-xs px-2 py-1 rounded">
                          ৳ {data.income.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    {/* Expense Bar */}
                    <div className="flex-1 flex flex-col items-center">
                      <div
                        className="w-full bg-[#25343F] rounded-t transition-all duration-300 group-hover:opacity-80"
                        style={{
                          height: `${(data.expense / maxValue) * 100}%`,
                        }}
                      >
                        <div className="opacity-0 group-hover:opacity-100 absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#25343F] text-white text-xs px-2 py-1 rounded">
                          ৳ {data.expense.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Month Label */}
                  <span className="font-inter text-xs text-[#25343F]/60 mt-2 rotate-45 origin-left">
                    {data.month.slice(0, 3)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-[#EAEFEF]">
            <div className="text-center">
              <p className="font-inter text-sm text-[#25343F]/70">
                মোট আয় (বছর)
              </p>
              <p className="font-display text-xl text-[#F2A65A]">৳ ১৬,২৫,০০০</p>
            </div>
            <div className="text-center">
              <p className="font-inter text-sm text-[#25343F]/70">
                মোট ব্যয় (বছর)
              </p>
              <p className="font-display text-xl text-[#25343F]">৳ ১১,৪৫,০০০</p>
            </div>
            <div className="text-center">
              <p className="font-inter text-sm text-[#25343F]/70">সঞ্চয়</p>
              <p className="font-display text-xl text-green-600">৳ ৪,৮০,০০০</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncomeExpenseChart;
