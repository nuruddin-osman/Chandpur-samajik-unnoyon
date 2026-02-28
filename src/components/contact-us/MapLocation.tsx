// components/contact/MapLocation.tsx
import {
  FaMapMarkerAlt,
  FaDirections,
  FaStreetView,
  FaSatellite,
} from "react-icons/fa";
import { BiCurrentLocation } from "react-icons/bi";
import { GiPositionMarker } from "react-icons/gi";

const MapLocation = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-[#25343F] mb-4">
            আমাদের <span className="text-[#F2A65A]">অবস্থান</span>
          </h2>
          <div className="w-20 h-1 bg-[#F2A65A] mx-auto mb-4"></div>
          <p className="font-inter text-[#25343F]/70">
            চাঁদপুর সদরে আমাদের কার্যালয়। চলে আসুন, দেখা হয়ে যাক।
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Location Details */}
          <div className="lg:col-span-1">
            <div className="bg-[#EAEFEF] rounded-2xl p-6 h-full">
              <h3 className="font-display text-xl text-[#25343F] mb-4 flex items-center gap-2">
                <GiPositionMarker className="w-5 h-5 text-[#F2A65A]" />
                ঠিকানা
              </h3>

              <div className="space-y-4 mb-6">
                <p className="font-inter text-[#25343F]/80">
                  চাঁদপুর উন্নয়ন ফোরাম
                  <br />
                  ৪৫/এ, পুরাতন বাসস্ট্যান্ড
                  <br />
                  চাঁদপুর সদর, চাঁদপুর - ৩৬০০
                  <br />
                  বাংলাদেশ
                </p>

                <div className="flex items-start gap-2">
                  <FaDirections className="w-4 h-4 text-[#F2A65A] mt-1" />
                  <div>
                    <p className="font-inter text-sm font-semibold text-[#25343F]">
                      কীভাবে আসবেন:
                    </p>
                    <p className="font-inter text-sm text-[#25343F]/70">
                      চাঁদপুর বাস টার্মিনাল থেকে ৫ মিনিট হাঁটা। পুরাতন
                      বাসস্ট্যান্ড সংলগ্ন।
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Controls */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <button className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg text-sm font-inter hover:bg-[#F2A65A] hover:text-white transition">
                  <FaStreetView className="w-4 h-4" />
                  স্ট্রিট ভিউ
                </button>
                <button className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg text-sm font-inter hover:bg-[#F2A65A] hover:text-white transition">
                  <FaSatellite className="w-4 h-4" />
                  স্যাটেলাইট
                </button>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href="https://maps.google.com/?q=Chandpur+Bangladesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#F2A65A] text-[#25343F] py-3 rounded-lg font-montserrat hover:bg-opacity-90 transition"
                >
                  <BiCurrentLocation className="w-4 h-4" />
                  গুগল ম্যাপে খুলুন
                </a>
                <a
                  href="https://maps.apple.com/?q=Chandpur+Bangladesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full border-2 border-[#25343F] text-[#25343F] py-3 rounded-lg font-montserrat hover:bg-[#25343F] hover:text-white transition"
                >
                  <FaMapMarkerAlt className="w-4 h-4" />
                  অ্যাপল ম্যাপে খুলুন
                </a>
              </div>

              {/* Distance */}
              <div className="mt-6 pt-6 border-t border-white">
                <p className="text-center font-inter text-sm text-[#25343F]/60">
                  চাঁদপুর শহর থেকে ২ কিমি • চট্টগ্রাম থেকে ১৫০ কিমি • ঢাকা থেকে
                  ১৩০ কিমি
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="lg:col-span-2">
            <div className="bg-[#EAEFEF] rounded-2xl overflow-hidden h-[500px] relative">
              {/* Map Placeholder - In production, use Google Maps Embed or Mapbox */}
              <div className="w-full h-full bg-[#25343F] relative">
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage:
                        "linear-gradient(#F2A65A 1px, transparent 1px), linear-gradient(90deg, #F2A65A 1px, transparent 1px)",
                      backgroundSize: "50px 50px",
                    }}
                  ></div>
                </div>

                {/* Center Marker */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-12 h-12 bg-[#F2A65A] rounded-full flex items-center justify-center animate-pulse">
                      <FaMapMarkerAlt className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white px-3 py-1 rounded-lg shadow-lg">
                      <p className="font-inter text-sm text-[#25343F] font-semibold">
                        আমাদের অফিস
                      </p>
                      <p className="font-inter text-xs text-[#F2A65A]">
                        চাঁদপুর সদর
                      </p>
                    </div>
                  </div>
                </div>

                {/* Location Labels */}
                <div className="absolute top-10 left-10 bg-white/90 px-3 py-1 rounded-full text-sm font-inter text-[#25343F]">
                  পুরাতন বাসস্ট্যান্ড
                </div>
                <div className="absolute bottom-10 right-10 bg-white/90 px-3 py-1 rounded-full text-sm font-inter text-[#25343F]">
                  চাঁদপুর সরকারি কলেজ
                </div>
                <div className="absolute top-20 right-20 bg-white/90 px-3 py-1 rounded-full text-sm font-inter text-[#25343F]">
                  চাঁদপুর জজ কোর্ট
                </div>

                {/* Zoom Controls */}
                <div className="absolute bottom-10 left-10 flex flex-col gap-2">
                  <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-[#F2A65A] hover:text-white transition">
                    +
                  </button>
                  <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-[#F2A65A] hover:text-white transition">
                    −
                  </button>
                </div>

                {/* Map Type */}
                <div className="absolute top-10 right-10 bg-white rounded-lg shadow-md overflow-hidden">
                  <button className="px-4 py-2 text-sm font-inter hover:bg-[#F2A65A] hover:text-white transition">
                    মানচিত্র
                  </button>
                  <button className="px-4 py-2 text-sm font-inter hover:bg-[#F2A65A] hover:text-white transition">
                    স্যাটেলাইট
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapLocation;
