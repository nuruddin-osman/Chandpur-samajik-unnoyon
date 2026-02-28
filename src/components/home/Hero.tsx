// components/home/HeroSection.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import BannerImg from "@/assets/disscus.jpeg";

const Hero = () => {
  return (
    <section className="bg-[#EAEFEF] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#25343F] leading-tight">
              চাঁদপুর উন্নয়ন
              <span className="text-[#F2A65A]"> ফোরাম</span>
            </h1>
            <p className="font-inter text-[#25343F] text-lg md:text-xl mt-6 opacity-90">
              একতা, উন্নয়ন ও স্বচ্ছতার মাধ্যমে চাঁদপুরের আর্থ-সামাজিক অগ্রগতিতে
              কাজ করে যাচ্ছি। আমাদের লক্ষ্য একটি সমৃদ্ধ চাঁদপুর গড়ে তোলা।
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="#"
                className="font-montserrat bg-[#F2A65A] text-[#25343F] px-6 py-3 rounded-md hover:bg-opacity-90 transition flex items-center gap-2"
              >
                সদস্য হোন
                <FaArrowRight size={20} />
              </Link>
              <Link
                href="/reports"
                className="font-montserrat border-2 border-[#25343F] text-[#25343F] px-6 py-3 rounded-md hover:bg-[#25343F] hover:text-white transition"
              >
                আর্থিক প্রতিবেদন
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 mt-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-[#F2A65A] rounded-full border-2 border-white"
                  ></div>
                ))}
              </div>
              <p className="font-inter text-sm text-[#25343F]">
                <span className="font-bold">৫০০+</span> সক্রিয় সদস্য
              </p>
            </div>
          </div>

          {/* Right Image/Graphic */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            {/* Background Image */}
            <Image
              src={BannerImg} // public ফোল্ডার থেকে
              alt="চাঁদপুরের দৃশ্য"
              fill
              className="object-cover"
              priority
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F2A65A]/20 to-transparent"></div>

            {/* Bottom Text */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#25343F] to-transparent">
              <p className="font-inter text-white text-sm">চাঁদপুর, বাংলাদেশ</p>
              <p className="font-display text-white text-xl">
                একসাথে গড়ি উজ্জ্বল ভবিষ্যৎ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
