// components/contact/ContactInfo.tsx
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFax,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
  FaGlobe,
  FaClock,
} from "react-icons/fa";
import { BsWhatsapp, BsMessenger } from "react-icons/bs";
// import { SiImo } from 'react-icons/si';

interface ContactMethod {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  details: string[];
  action?: string;
  color: string;
  bgColor: string;
}

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  url: string;
  color: string;
}

const contactMethods: ContactMethod[] = [
  {
    icon: FaMapMarkerAlt,
    title: "ঠিকানা",
    details: [
      "চাঁদপুর উন্নয়ন ফোরাম",
      "৪৫/এ, পুরাতন বাসস্ট্যান্ড",
      "চাঁদপুর সদর, চাঁদপুর - ৩৬০০",
      "বাংলাদেশ",
    ],
    color: "text-red-500",
    bgColor: "bg-red-100",
  },
  {
    icon: FaPhoneAlt,
    title: "ফোন",
    details: [
      "মোবাইল: ০১৮১২-৩৪৫৬৭৮",
      "অফিস: ০২-১২৩৪৫৬৭৮৯",
      "জরুরি: ০১৭১১-২২৩৩৪৪",
    ],
    action: "tel:01812345678",
    color: "text-green-500",
    bgColor: "bg-green-100",
  },
  {
    icon: FaEnvelope,
    title: "ইমেইল",
    details: [
      "সাধারণ: info@chandpurforum.org",
      "অভিযোগ: complaint@chandpurforum.org",
      "প্রেস: media@chandpurforum.org",
    ],
    action: "mailto:info@chandpurforum.org",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    icon: FaClock,
    title: "অফিস সময়",
    details: [
      "শনি-বৃহস্পতি: সকাল ৯টা - বিকাল ৫টা",
      "শুক্রবার: বন্ধ",
      "শনিবার: সীমিত কার্যক্রম",
    ],
    color: "text-purple-500",
    bgColor: "bg-purple-100",
  },
];

const socialLinks: SocialLink[] = [
  {
    icon: FaFacebook,
    name: "Facebook",
    url: "https://facebook.com/chandpurforum",
    color: "bg-blue-600",
  },
  {
    icon: FaYoutube,
    name: "YouTube",
    url: "https://youtube.com/@chandpurforum",
    color: "bg-red-600",
  },
  {
    icon: FaLinkedin,
    name: "LinkedIn",
    url: "https://linkedin.com/company/chandpurforum",
    color: "bg-blue-700",
  },
  {
    icon: FaTwitter,
    name: "Twitter",
    url: "https://twitter.com/chandpurforum",
    color: "bg-sky-500",
  },
  {
    icon: BsWhatsapp,
    name: "WhatsApp",
    url: "https://wa.me/8801812345678",
    color: "bg-green-600",
  },
  {
    icon: BsMessenger,
    name: "Messenger",
    url: "https://m.me/chandpurforum",
    color: "bg-blue-500",
  },
  //   { icon: SiImo, name: 'Imo', url: 'https://imo.im/chandpurforum', color: 'bg-purple-600' },
  {
    icon: FaGlobe,
    name: "Website",
    url: "https://chandpurforum.org",
    color: "bg-[#F2A65A]",
  },
];

const ContactInfo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Methods */}
          <div>
            <h2 className="font-display text-3xl text-[#25343F] mb-2">
              যোগাযোগের <span className="text-[#F2A65A]">মাধ্যম</span>
            </h2>
            <p className="font-inter text-[#25343F]/70 mb-8">
              নিচের যেকোনো মাধ্যমে আমাদের সাথে যোগাযোগ করতে পারেন
            </p>

            <div className="space-y-6">
              {contactMethods.map((method, idx) => {
                const Icon = method.icon;
                return (
                  <div key={idx} className="flex gap-4 group">
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 ${method.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className={`w-6 h-6 ${method.color}`} />
                    </div>

                    {/* Details */}
                    <div className="flex-1">
                      <h3 className="font-display text-lg text-[#25343F] mb-2">
                        {method.title}
                      </h3>
                      <div className="space-y-1">
                        {method.details.map((detail, i) => (
                          <p
                            key={i}
                            className="font-inter text-sm text-[#25343F]/70"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                      {method.action && (
                        <a
                          href={method.action}
                          className="inline-block mt-2 text-sm font-montserrat text-[#F2A65A] hover:text-[#25343F] transition"
                        >
                          {method.title === "ফোন" ? "কল করুন" : "ইমেইল পাঠান"} →
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Social Media & Map Preview */}
          <div>
            {/* Social Media Cards */}
            <div className="bg-[#EAEFEF] rounded-2xl p-8 mb-6">
              <h3 className="font-display text-xl text-[#25343F] mb-4">
                সামাজিক <span className="text-[#F2A65A]">যোগাযোগ</span>
              </h3>
              <p className="font-inter text-sm text-[#25343F]/70 mb-6">
                সোশ্যাল মিডিয়ায় আমাদের সাথে যুক্ত থাকুন
              </p>

              <div className="grid grid-cols-4 gap-3">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                    >
                      <div
                        className={`${social.color} bg-opacity-10 hover:bg-opacity-20 p-4 rounded-xl text-center transition-all hover:-translate-y-1`}
                      >
                        <Icon
                          className={`w-5 h-5 mx-auto ${social.color.replace("bg-", "text-")} group-hover:scale-110 transition`}
                        />
                        <p className="font-inter text-xs mt-2 text-[#25343F]/60">
                          {social.name}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* QR Code / Business Card Preview */}
            <div className="bg-gradient-to-br from-[#25343F] to-[#1a2833] rounded-2xl p-8 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                  <div className="w-10 h-10 bg-[#F2A65A] rounded-lg"></div>
                </div>
                <div>
                  <h4 className="font-display text-xl">
                    চাঁদপুর উন্নয়ন ফোরাম
                  </h4>
                  <p className="font-inter text-sm text-white/70">
                    একতা, উন্নয়ন, স্বচ্ছতা
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="w-4 h-4 text-[#F2A65A]" />
                  <span className="font-inter text-sm">০১৮১২-৩৪৫৬৭৮</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="w-4 h-4 text-[#F2A65A]" />
                  <span className="font-inter text-sm">
                    info@chandpurforum.org
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="w-4 h-4 text-[#F2A65A]" />
                  <span className="font-inter text-sm">চাঁদপুর, বাংলাদেশ</span>
                </div>
              </div>

              {/* QR Code Placeholder */}
              <div className="mt-6 flex justify-center">
                <div className="w-24 h-24 bg-white rounded-lg p-1">
                  <div className="w-full h-full bg-[#EAEFEF] rounded flex items-center justify-center">
                    <span className="text-xs text-[#25343F]">QR Code</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
