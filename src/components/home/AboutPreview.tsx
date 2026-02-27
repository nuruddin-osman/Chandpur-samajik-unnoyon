
// components/home/AboutPreview.tsx
"use client";
import Link from 'next/link';
import { FaShieldAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { GiTargetShot } from "react-icons/gi";
import { FeatureItem } from '@/types';

const features: FeatureItem[] = [
  {
    icon: GiTargetShot,
    title: 'আমাদের লক্ষ্য',
    desc: 'চাঁদপুরের আর্থ-সামাজিক উন্নয়ন ও সম্প্রদায় গঠন'
  },
  {
    icon: FaHeart,
    title: 'মানবিক কার্যক্রম',
    desc: 'শিক্ষা, চিকিৎসা ও দুর্যোগকালীন সহায়তা প্রদান'
  },
  {
    icon: FaShieldAlt,
    title: 'স্বচ্ছতা',
    desc: 'প্রতি টাকার হিসাব পাবলিক ড্যাশবোর্ডে প্রকাশিত'
  },
];

const AboutPreview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-[#25343F] mb-4">
            আমাদের সম্পর্কে
          </h2>
          <div className="w-20 h-1 bg-[#F2A65A] mx-auto mb-4"></div>
          <p className="font-inter text-[#25343F] opacity-80">
            ২০১০ সাল থেকে চাঁদপুরের মানুষদের নিয়ে গড়ে তোলা একটি অরাজনৈতিক সামাজিক সংগঠন
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-[#EAEFEF] p-6 rounded-xl hover:shadow-lg transition">
                <div className="w-12 h-12 bg-[#F2A65A] rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#25343F]" />
                </div>
                <h3 className="font-display text-xl text-[#25343F] mb-2">{feature.title}</h3>
                <p className="font-inter text-[#25343F] opacity-80">{feature.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Read More Link */}
        <div className="text-center mt-8">
          <Link
            href="/about"
            className="font-montserrat inline-flex items-center gap-2 text-[#25343F] hover:text-[#F2A65A] transition"
          >
            আরও জানুন
            <FaArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview
