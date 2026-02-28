// components/reports/TransactionHistory.tsx
import { useState } from "react";
import {
  FaSearch,
  FaFilter,
  FaSortAmountDown,
  FaDownload,
} from "react-icons/fa";
import { GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { BsFileEarmarkPdf } from "react-icons/bs";

interface Transaction {
  id: string;
  date: string;
  description: string;
  category: string;
  type: "income" | "expense";
  amount: number;
  donor?: string;
  paymentMethod: "bank" | "bkash" | "nagad" | "cash";
}

const transactions: Transaction[] = [
  {
    id: "TRX001",
    date: "১৫ মার্চ, ২০২৪",
    description: "মাসিক চাঁদা সংগ্রহ",
    category: "সদস্য চাঁদা",
    type: "income",
    amount: 45000,
    donor: "বিভিন্ন সদস্য",
    paymentMethod: "bkash",
  },
  {
    id: "TRX002",
    date: "১৪ মার্চ, ২০২৪",
    description: "শিক্ষার্থীদের বৃত্তি প্রদান",
    category: "শিক্ষা",
    type: "expense",
    amount: 25000,
    paymentMethod: "bank",
  },
  {
    id: "TRX003",
    date: "১৩ মার্চ, ২০২৪",
    description: "দান - আব্দুর রহিম",
    category: "দান",
    type: "income",
    amount: 50000,
    donor: "আব্দুর রহিম",
    paymentMethod: "nagad",
  },
  {
    id: "TRX004",
    date: "১২ মার্চ, ২০২৪",
    description: "চিকিৎসা সহায়তা",
    category: "চিকিৎসা",
    type: "expense",
    amount: 15000,
    paymentMethod: "cash",
  },
  {
    id: "TRX005",
    date: "১১ মার্চ, ২০২৪",
    description: "ত্রাণ তহবিলে দান",
    category: "ত্রাণ",
    type: "income",
    amount: 30000,
    donor: "মোঃ জাহিদ",
    paymentMethod: "bkash",
  },
];

const TransactionHistory = () => {
  const [filter, setFilter] = useState<"all" | "income" | "expense">("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTransactions = transactions.filter((t) => {
    if (filter !== "all" && t.type !== filter) return false;
    if (
      searchTerm &&
      !t.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
      return false;
    return true;
  });
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-[#25343F] mb-2">
              লেনদেনের <span className="text-[#F2A65A]">ইতিহাস</span>
            </h2>
            <p className="font-inter text-[#25343F]/70">
              সাম্প্রতিক সকল আয়-ব্যয়ের বিবরণ
            </p>
          </div>

          {/* Search & Filter */}
          <div className="flex gap-3 mt-4 md:mt-0">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#25343F]/40" />
              <input
                type="text"
                placeholder="অনুসন্ধান..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-[#EAEFEF] rounded-lg font-inter text-sm focus:outline-none focus:ring-2 focus:ring-[#F2A65A]"
              />
            </div>

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as typeof filter)}
              className="px-4 py-2 bg-[#EAEFEF] rounded-lg font-inter text-sm focus:outline-none focus:ring-2 focus:ring-[#F2A65A]"
            >
              <option value="all">সব লেনদেন</option>
              <option value="income">শুধু আয়</option>
              <option value="expense">শুধু ব্যয়</option>
            </select>
          </div>
        </div>

        {/* Transactions List */}
        <div className="bg-[#EAEFEF] rounded-2xl p-6">
          <div className="space-y-4">
            {filteredTransactions.map((tx) => (
              <div
                key={tx.id}
                className="bg-white rounded-xl p-4 hover:shadow-md transition"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {/* Left - Icon & Info */}
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        tx.type === "income" ? "bg-green-100" : "bg-red-100"
                      }`}
                    >
                      {tx.type === "income" ? (
                        <GiReceiveMoney className={`w-5 h-5 text-green-600`} />
                      ) : (
                        <GiTakeMyMoney className={`w-5 h-5 text-red-600`} />
                      )}
                    </div>

                    <div>
                      <h4 className="font-display text-[#25343F] mb-1">
                        {tx.description}
                      </h4>
                      <div className="flex flex-wrap gap-3 text-xs">
                        <span className="font-inter text-[#25343F]/60">
                          {tx.date}
                        </span>
                        <span className="font-inter text-[#25343F]/60">•</span>
                        <span className="font-inter text-[#25343F]/60">
                          {tx.category}
                        </span>
                        <span className="font-inter text-[#25343F]/60">•</span>
                        <span className="font-inter text-[#25343F]/60">
                          {tx.paymentMethod}
                        </span>
                        {tx.donor && (
                          <>
                            <span className="font-inter text-[#25343F]/60">
                              •
                            </span>
                            <span className="font-inter text-[#25343F]/60">
                              দাতা: {tx.donor}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right - Amount & Actions */}
                  <div className="flex items-center gap-4 ml-13">
                    <span
                      className={`font-display text-lg ${
                        tx.type === "income" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {tx.type === "income" ? "+" : "-"} ৳{" "}
                      {tx.amount.toLocaleString()}
                    </span>

                    <button
                      className="p-2 hover:bg-[#EAEFEF] rounded-lg transition"
                      title="রসিদ ডাউনলোড"
                    >
                      <BsFileEarmarkPdf className="w-4 h-4 text-[#25343F]/60" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-6">
            <button className="font-montserrat border-2 border-[#25343F] text-[#25343F] px-6 py-2 rounded-lg hover:bg-[#25343F] hover:text-white transition inline-flex items-center gap-2">
              <FaSortAmountDown className="w-4 h-4" />
              সব লেনদেন দেখুন
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransactionHistory;
