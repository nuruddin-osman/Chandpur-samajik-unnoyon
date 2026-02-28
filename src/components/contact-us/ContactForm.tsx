// components/contact/ContactForm.tsx
import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaTag,
  FaComment,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import { MdSubject } from "react-icons/md";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  category: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "general",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const categories = [
    { value: "general", label: "সাধারণ তথ্য" },
    { value: "membership", label: "সদস্যপদ" },
    { value: "donation", label: "অনুদান" },
    { value: "complaint", label: "অভিযোগ" },
    { value: "suggestion", label: "পরামর্শ" },
    { value: "other", label: "অন্যান্য" },
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "নাম অবশ্যই দিতে হবে";
    }

    if (!formData.email.trim()) {
      newErrors.email = "ইমেইল অবশ্যই দিতে হবে";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "সঠিক ইমেইল ঠিকানা দিন";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "ফোন নম্বর অবশ্যই দিতে হবে";
    } else if (!/^01[3-9]\d{8}$/.test(formData.phone)) {
      newErrors.phone = "সঠিক ফোন নম্বর দিন (যেমন: 01812345678)";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "বিষয় অবশ্যই দিতে হবে";
    }

    if (!formData.message.trim()) {
      newErrors.message = "মেসেজ অবশ্যই দিতে হবে";
    } else if (formData.message.length < 10) {
      newErrors.message = "মেসেজ কমপক্ষে ১০ অক্ষরের হতে হবে";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        category: "general",
        message: "",
      });
    } catch (error) {
      setSubmitError("কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-16 bg-[#EAEFEF]">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-2xl p-12 text-center shadow-xl">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="font-display text-3xl text-[#25343F] mb-4">
              ধন্যবাদ!
            </h2>
            <p className="font-inter text-[#25343F]/70 mb-6">
              আপনার মেসেজ সফলভাবে পাঠানো হয়েছে। আমরা খুব শীঘ্রই আপনার সাথে
              যোগাযোগ করব।
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="font-montserrat bg-[#F2A65A] text-[#25343F] px-8 py-3 rounded-lg hover:bg-opacity-90 transition"
            >
              নতুন মেসেজ পাঠান
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-[#EAEFEF]">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-[#25343F] mb-4">
            মেসেজ <span className="text-[#F2A65A]">পাঠান</span>
          </h2>
          <div className="w-20 h-1 bg-[#F2A65A] mx-auto mb-4"></div>
          <p className="font-inter text-[#25343F]/70">
            নিচের ফর্ম পূরণ করে আমাদের সরাসরি মেসেজ পাঠাতে পারেন
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          {submitError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <FaExclamationCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="font-inter text-sm text-red-700">{submitError}</p>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Name Field */}
            <div>
              <label className="flex items-center gap-2 font-inter text-sm text-[#25343F] mb-2">
                <FaUser className="w-4 h-4 text-[#F2A65A]" />
                আপনার নাম <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="আপনার পুরো নাম"
                className={`w-full px-4 py-3 bg-[#EAEFEF] rounded-lg font-inter text-sm focus:outline-none focus:ring-2 ${
                  errors.name ? "ring-2 ring-red-500" : "focus:ring-[#F2A65A]"
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-500">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="flex items-center gap-2 font-inter text-sm text-[#25343F] mb-2">
                <FaEnvelope className="w-4 h-4 text-[#F2A65A]" />
                ইমেইল <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={`w-full px-4 py-3 bg-[#EAEFEF] rounded-lg font-inter text-sm focus:outline-none focus:ring-2 ${
                  errors.email ? "ring-2 ring-red-500" : "focus:ring-[#F2A65A]"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Phone Field */}
            <div>
              <label className="flex items-center gap-2 font-inter text-sm text-[#25343F] mb-2">
                <FaPhone className="w-4 h-4 text-[#F2A65A]" />
                ফোন নম্বর <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="01812345678"
                className={`w-full px-4 py-3 bg-[#EAEFEF] rounded-lg font-inter text-sm focus:outline-none focus:ring-2 ${
                  errors.phone ? "ring-2 ring-red-500" : "focus:ring-[#F2A65A]"
                }`}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
              )}
            </div>

            {/* Category Field */}
            <div>
              <label className="flex items-center gap-2 font-inter text-sm text-[#25343F] mb-2">
                <FaTag className="w-4 h-4 text-[#F2A65A]" />
                বিষয়ের ধরণ
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#EAEFEF] rounded-lg font-inter text-sm focus:outline-none focus:ring-2 focus:ring-[#F2A65A]"
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Subject Field */}
          <div className="mb-6">
            <label className="flex items-center gap-2 font-inter text-sm text-[#25343F] mb-2">
              <MdSubject className="w-4 h-4 text-[#F2A65A]" />
              বিষয় <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="আপনার মেসেজের বিষয়"
              className={`w-full px-4 py-3 bg-[#EAEFEF] rounded-lg font-inter text-sm focus:outline-none focus:ring-2 ${
                errors.subject ? "ring-2 ring-red-500" : "focus:ring-[#F2A65A]"
              }`}
            />
            {errors.subject && (
              <p className="mt-1 text-xs text-red-500">{errors.subject}</p>
            )}
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label className="flex items-center gap-2 font-inter text-sm text-[#25343F] mb-2">
              <FaComment className="w-4 h-4 text-[#F2A65A]" />
              মেসেজ <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              placeholder="আপনার মেসেজ লিখুন..."
              className={`w-full px-4 py-3 bg-[#EAEFEF] rounded-lg font-inter text-sm focus:outline-none focus:ring-2 resize-none ${
                errors.message ? "ring-2 ring-red-500" : "focus:ring-[#F2A65A]"
              }`}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-500">{errors.message}</p>
            )}
            <p className="mt-1 text-xs text-[#25343F]/40 text-right">
              {formData.message.length} অক্ষর
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full font-montserrat bg-[#F2A65A] text-[#25343F] py-4 rounded-lg transition flex items-center justify-center gap-2 ${
              isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-opacity-90"
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-[#25343F] border-t-transparent rounded-full animate-spin"></div>
                পাঠানো হচ্ছে...
              </>
            ) : (
              <>
                <FaPaperPlane className="w-4 h-4" />
                মেসেজ পাঠান
              </>
            )}
          </button>

          {/* Form Note */}
          <p className="text-center mt-4 font-inter text-xs text-[#25343F]/40">
            <span className="text-red-500">*</span> চিহ্নিত ফিল্ডগুলো অবশ্যই
            পূরণ করতে হবে
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
