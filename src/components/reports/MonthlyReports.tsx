// components/reports/MonthlyReports.tsx
import { useState } from "react";
import {
  FaCalendarAlt,
  FaDownload,
  FaEye,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { BsFileEarmarkPdf, BsFileEarmarkExcel } from "react-icons/bs";

interface MonthlyReport {
  month: string;
  year: string;
  income: number;
  expense: number;
  balance: number;
  pdfUrl: string;
  excelUrl: string;
}

const monthlyReports: MonthlyReport[] = [
  {
    month: "জানুয়ারি",
    year: "২০২৪",
    income: 125000,
    expense: 85000,
    balance: 40000,
    pdfUrl: "#",
    excelUrl: "#",
  },
  {
    month: "ফেব্রুয়ারি",
    year: "২০২৪",
    income: 135000,
    expense: 92000,
    balance: 43000,
    pdfUrl: "#",
    excelUrl: "#",
  },
  {
    month: "মার্চ",
    year: "২০২৪",
    income: 110000,
    expense: 78000,
    balance: 32000,
    pdfUrl: "#",
    excelUrl: "#",
  },
  {
    month: "এপ্রিল",
    year: "২০২৪",
    income: 145000,
    expense: 102000,
    balance: 43000,
    pdfUrl: "#",
    excelUrl: "#",
  },
  {
    month: "মে",
    year: "২০২৪",
    income: 125000,
    expense: 88000,
    balance: 37000,
    pdfUrl: "#",
    excelUrl: "#",
  },
  {
    month: "জুন",
    year: "২০২৪",
    income: 155000,
    expense: 110000,
    balance: 45000,
    pdfUrl: "#",
    excelUrl: "#",
  },
];

const MonthlyReports = () => {
  const [selectedYear, setSelectedYear] = useState("২০২৪");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const filteredReports = monthlyReports.filter((r) => r.year === selectedYear);
  const totalPages = Math.ceil(filteredReports.length / itemsPerPage);
  const currentReports = filteredReports.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <section className="py-16 bg-[#EAEFEF]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-[#25343F] mb-2">
              মাসিক <span className="text-[#F2A65A]">প্রতিবেদন</span>
            </h2>
            <p className="font-inter text-[#25343F]/70">
              মাসওয়ারী আর্থিক প্রতিবেদন ডাউনলোড করুন
            </p>
          </div>

          {/* Year Filter */}
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <FaCalendarAlt className="w-5 h-5 text-[#F2A65A]" />
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-4 py-2 bg-white rounded-lg border border-[#EAEFEF] font-inter text-sm focus:outline-none focus:border-[#F2A65A]"
            >
              <option>২০২৪</option>
              <option>২০২৩</option>
              <option>২০২২</option>
            </select>
          </div>
        </div>

        {/* Reports Table */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#25343F]">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-montserrat text-white">
                    মাস
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-montserrat text-white">
                    আয় (৳)
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-montserrat text-white">
                    ব্যয় (৳)
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-montserrat text-white">
                    ব্যালেন্স (৳)
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-montserrat text-white">
                    প্রতিবেদন
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAEFEF]">
                {currentReports.map((report, idx) => (
                  <tr key={idx} className="hover:bg-[#EAEFEF]/50 transition">
                    <td className="px-6 py-4">
                      <div>
                        <span className="font-display text-[#25343F]">
                          {report.month}
                        </span>
                        <span className="font-inter text-sm text-[#25343F]/60 ml-2">
                          {report.year}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right font-inter text-green-600">
                      ৳ {report.income.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-right font-inter text-red-600">
                      ৳ {report.expense.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-right font-display text-[#F2A65A]">
                      ৳ {report.balance.toLocaleString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <a
                          href={report.pdfUrl}
                          className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition"
                          title="PDF ডাউনলোড"
                        >
                          <BsFileEarmarkPdf className="w-4 h-4" />
                        </a>
                        <a
                          href={report.excelUrl}
                          className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition"
                          title="Excel ডাউনলোড"
                        >
                          <BsFileEarmarkExcel className="w-4 h-4" />
                        </a>
                        <button
                          className="p-2 bg-[#EAEFEF] text-[#25343F] rounded-lg hover:bg-[#F2A65A] hover:text-white transition"
                          title="প্রিভিউ"
                        >
                          <FaEye className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 bg-[#EAEFEF] flex items-center justify-between">
            <p className="font-inter text-sm text-[#25343F]/60">
              দেখাচ্ছে {(currentPage - 1) * itemsPerPage + 1} -{" "}
              {Math.min(currentPage * itemsPerPage, filteredReports.length)} of{" "}
              {filteredReports.length} টি
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className={`p-2 rounded-lg transition ${
                  currentPage === 1
                    ? "bg-white/50 text-[#25343F]/30 cursor-not-allowed"
                    : "bg-white text-[#25343F] hover:bg-[#F2A65A] hover:text-white"
                }`}
              >
                <FaChevronLeft className="w-4 h-4" />
              </button>
              <span className="px-4 py-2 bg-white rounded-lg font-inter text-sm">
                {currentPage} / {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className={`p-2 rounded-lg transition ${
                  currentPage === totalPages
                    ? "bg-white/50 text-[#25343F]/30 cursor-not-allowed"
                    : "bg-white text-[#25343F] hover:bg-[#F2A65A] hover:text-white"
                }`}
              >
                <FaChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Download All Button */}
        <div className="text-center mt-6">
          <button className="font-montserrat bg-[#25343F] text-white px-6 py-3 rounded-lg hover:bg-[#F2A65A] hover:text-[#25343F] transition inline-flex items-center gap-2">
            <FaDownload className="w-4 h-4" />
            বার্ষিক প্রতিবেদন ডাউনলোড (পিডিএফ)
          </button>
        </div>
      </div>
    </section>
  );
};

export default MonthlyReports;
