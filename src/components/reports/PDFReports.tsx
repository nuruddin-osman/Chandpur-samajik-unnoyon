// components/reports/PDFReports.tsx
import {
  FaFilePdf,
  FaDownload,
  FaCalendarAlt,
  FaFileAlt,
} from "react-icons/fa";
import { BsFileEarmarkPdf } from "react-icons/bs";

interface ReportFile {
  id: number;
  title: string;
  period: string;
  size: string;
  downloads: number;
  url: string;
}

const reports: ReportFile[] = [
  {
    id: 1,
    title: "বার্ষিক আর্থিক প্রতিবেদন ২০২৪",
    period: "জানুয়ারি - ডিসেম্বর ২০২৪",
    size: "২.৫ MB",
    downloads: 1250,
    url: "#",
  },
  {
    id: 2,
    title: "ত্রৈমাসিক প্রতিবেদন (৪র্থ কোয়ার্টার)",
    period: "অক্টোবর - ডিসেম্বর ২০২৪",
    size: "১.২ MB",
    downloads: 850,
    url: "#",
  },
  {
    id: 3,
    title: "অডিট রিপোর্ট ২০২৩-২০২৪",
    period: "জুলাই ২০২৩ - জুন ২০২৪",
    size: "৩.১ MB",
    downloads: 2100,
    url: "#",
  },
  {
    id: 4,
    title: "দাতাদের তালিকা ও দানের বিবরণ",
    period: "২০২৪",
    size: "১.৮ MB",
    downloads: 620,
    url: "#",
  },
  {
    id: 5,
    title: "বিশেষ প্রকল্পের আর্থিক প্রতিবেদন",
    period: "শিক্ষা প্রকল্প ২০২৪",
    size: "২.০ MB",
    downloads: 430,
    url: "#",
  },
];

const PDFReports = () => {
  return (
    <section className="py-16 bg-[#EAEFEF]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-[#25343F] mb-4">
            পিডিএফ <span className="text-[#F2A65A]">রিপোর্ট</span>
          </h2>
          <div className="w-20 h-1 bg-[#F2A65A] mx-auto mb-4"></div>
          <p className="font-inter text-[#25343F]/70">
            বিভিন্ন সময়ের আর্থিক প্রতিবেদন ডাউনলোড করুন
          </p>
        </div>

        {/* Reports Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report) => (
            <div key={report.id} className="group relative">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/* PDF Icon */}
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                    <FaFilePdf className="w-6 h-6 text-red-500" />
                  </div>
                  <span className="px-2 py-1 bg-[#EAEFEF] rounded-full text-xs font-inter text-[#25343F]/60">
                    {report.size}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-display text-lg text-[#25343F] mb-2">
                  {report.title}
                </h3>

                <div className="flex items-center gap-2 mb-3">
                  <FaCalendarAlt className="w-3 h-3 text-[#F2A65A]" />
                  <span className="font-inter text-xs text-[#25343F]/60">
                    {report.period}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <FaDownload className="w-3 h-3 text-[#F2A65A]" />
                  <span className="font-inter text-xs text-[#25343F]/60">
                    {report.downloads} বার ডাউনলোড
                  </span>
                </div>

                {/* Download Button */}
                <a
                  href={report.url}
                  className="inline-flex items-center gap-2 font-montserrat text-sm bg-[#25343F] text-white px-4 py-2 rounded-lg hover:bg-[#F2A65A] hover:text-[#25343F] transition group"
                >
                  <FaDownload className="w-4 h-4 group-hover:scale-110 transition" />
                  ডাউনলোড
                </a>

                {/* Preview Badge */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition">
                  <span className="px-2 py-1 bg-[#F2A65A] text-[#25343F] text-xs rounded-full flex items-center gap-1">
                    <BsFileEarmarkPdf className="w-3 h-3" />
                    প্রিভিউ
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Archive Button */}
        <div className="text-center mt-8">
          <button className="font-montserrat border-2 border-[#25343F] text-[#25343F] px-8 py-3 rounded-lg hover:bg-[#25343F] hover:text-white transition inline-flex items-center gap-2">
            <FaFileAlt className="w-4 h-4" />
            পুরনো প্রতিবেদন দেখুন
          </button>
        </div>
      </div>
    </section>
  );
};

export default PDFReports;
