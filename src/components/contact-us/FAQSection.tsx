// components/contact/FAQSection.tsx
import { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaQuestionCircle,
  FaHeadset,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: "general" | "membership" | "donation" | "technical";
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "কীভাবে আমি সদস্য হতে পারি?",
    answer:
      "সদস্য হতে আমাদের ওয়েবসাইটের রেজিস্ট্রেশন ফর্ম পূরণ করুন। ফর্ম পূরণের পর কমিটি আপনার আবেদন পর্যালোচনা করবে এবং অনুমোদন দেবে। সদস্য ফি ৫০০ টাকা (বার্ষিক)।",
    category: "membership",
  },
  {
    id: 2,
    question: "অনলাইনে অনুদান পাঠানোর উপায় কী?",
    answer:
      "আমরা বিকাশ (মার্চেন্ট: 01812345678), নগদ (01712345678) এবং ব্যাংক ট্রান্সফার (সোনালী ব্যাংক, অ্যাকাউন্ট নং: ১২৩৪৫৬৭৮৯) গ্রহণ করি। পেমেন্ট কনফার্ম করলে আমরা রসিদ ইমেইল করব।",
    category: "donation",
  },
  {
    id: 3,
    question: "অভিযোগ বা পরামর্শ জানাব কোথায়?",
    answer:
      "আপনার অভিযোগ বা পরামর্শ আমাদের ইমেইলে (complaint@chandpurforum.org) পাঠাতে পারেন অথবা সরাসরি অফিসে যোগাযোগ করতে পারেন। আমরা গোপনীয়তা বজায় রাখি।",
    category: "general",
  },
  {
    id: 4,
    question: "সদস্যপদ ফিরিয়ে নেওয়ার নিয়ম কী?",
    answer:
      "কোনো সদস্য যদি সংগঠনের নীতি লঙ্ঘন করে বা অসদাচরণ করে, তাহলে কমিটি সদস্যপদ বাতিল করতে পারে। এছাড়া সদস্য নিজে ইচ্ছা করলে পদত্যাগ করতে পারেন।",
    category: "membership",
  },
  {
    id: 5,
    question: "ওয়েবসাইটে সমস্যা হলে কী করব?",
    answer:
      "ওয়েবসাইট সংক্রান্ত যেকোনো সমস্যায় আমাদের টেকনিক্যাল টিমকে ইমেইল করুন (tech@chandpurforum.org) অথবা ফোন করুন (০১৮১২-৩৪৫৬৭৮)।",
    category: "technical",
  },
  {
    id: 6,
    question: "কমিটির সদস্য হতে চাই, কী করতে হবে?",
    answer:
      "কমিটির সদস্য হতে হলে প্রথমে সাধারণ সদস্য হতে হবে। তারপর ন্যূনতম ১ বছর সক্রিয় থাকতে হবে এবং পরবর্তী নির্বাচনে অংশ নিতে হবে।",
    category: "membership",
  },
  {
    id: 7,
    question: "আর্থিক প্রতিবেদন কোথায় পাব?",
    answer:
      'আমাদের ওয়েবসাইটের "আর্থিক প্রতিবেদন" পৃষ্ঠায় মাসিক ও বাৎসরিক প্রতিবেদন পাবেন। পিডিএফ ফরম্যাটেও ডাউনলোড করতে পারবেন।',
    category: "general",
  },
  {
    id: 8,
    question: "উপদেষ্টা হওয়ার যোগ্যতা কী?",
    answer:
      "উপদেষ্টা হতে নির্দিষ্ট ক্ষেত্রে বিশেষ জ্ঞান ও অভিজ্ঞতা থাকতে হবে এবং সমাজসেবায় আগ্রহী হতে হবে। কমিটি আমন্ত্রণ জানালে উপদেষ্টা হওয়া যায়।",
    category: "membership",
  },
];

const categories = [
  { value: "all", label: "সব প্রশ্ন" },
  { value: "general", label: "সাধারণ" },
  { value: "membership", label: "সদস্যপদ" },
  { value: "donation", label: "অনুদান" },
  { value: "technical", label: "প্রযুক্তিগত" },
];

const FAQSection = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredFaqs =
    selectedCategory === "all"
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);
  return (
    <section className="py-16 bg-[#EAEFEF]">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-montserrat text-sm text-[#F2A65A] uppercase tracking-wider">
            সচরাচর জিজ্ঞাসা
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-[#25343F] mt-2 mb-4">
            প্রশ্ন ও <span className="text-[#F2A65A]">উত্তর</span>
          </h2>
          <div className="w-20 h-1 bg-[#F2A65A] mx-auto mb-4"></div>
          <p className="font-inter text-[#25343F]/70">
            আপনার মনে হতে পারে এমন কিছু সাধারণ প্রশ্নের উত্তর
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 rounded-full text-sm font-montserrat transition ${
                selectedCategory === cat.value
                  ? "bg-[#F2A65A] text-[#25343F]"
                  : "bg-white text-[#25343F] hover:bg-[#F2A65A] hover:text-[#25343F]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <div className="flex items-start gap-3">
                  <FaQuestionCircle className="w-5 h-5 text-[#F2A65A] flex-shrink-0 mt-1" />
                  <span className="font-display text-base text-[#25343F]">
                    {faq.question}
                  </span>
                </div>
                {openId === faq.id ? (
                  <FaChevronUp className="w-4 h-4 text-[#F2A65A] flex-shrink-0" />
                ) : (
                  <FaChevronDown className="w-4 h-4 text-[#F2A65A] flex-shrink-0" />
                )}
              </button>

              {openId === faq.id && (
                <div className="px-6 pb-4">
                  <div className="pl-8 border-l-2 border-[#F2A65A]">
                    <p className="font-inter text-sm text-[#25343F]/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-12 bg-white rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-[#F2A65A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <MdContactSupport className="w-8 h-8 text-[#F2A65A]" />
          </div>
          <h3 className="font-display text-xl text-[#25343F] mb-2">
            এখনও প্রশ্ন আছে?
          </h3>
          <p className="font-inter text-[#25343F]/70 mb-6">
            উত্তর না পেলে সরাসরি আমাদের সাথে যোগাযোগ করুন
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:01812345678"
              className="flex items-center gap-2 px-6 py-3 bg-[#F2A65A] text-[#25343F] rounded-lg font-montserrat hover:bg-opacity-90 transition"
            >
              <FaPhone className="w-4 h-4" />
              কল করুন
            </a>
            <a
              href="mailto:info@chandpurforum.org"
              className="flex items-center gap-2 px-6 py-3 border-2 border-[#25343F] text-[#25343F] rounded-lg font-montserrat hover:bg-[#25343F] hover:text-white transition"
            >
              <FaEnvelope className="w-4 h-4" />
              ইমেইল করুন
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
