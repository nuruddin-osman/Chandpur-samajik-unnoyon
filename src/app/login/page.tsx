"use client";

import { useState } from "react";
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight } from "react-icons/fi";

const InputField = ({
  label,
  icon,
  type = "text",
  placeholder,
  value,
  onChange,
}: {
  label: string;
  icon: React.ReactNode;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}) => {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";
  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="text-sm font-medium text-[#25343F]"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {label} <span className="text-[#F2A65A]">*</span>
      </label>
      <div className="relative">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#25343F]/40">
          {icon}
        </span>
        <input
          type={isPassword ? (show ? "text" : "password") : type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-11 pr-11 py-3.5 rounded-xl border-2 border-[#EAEFEF] bg-white text-[#25343F] placeholder-[#25343F]/30 focus:outline-none focus:border-[#F2A65A] transition-colors duration-200 text-sm"
          style={{ fontFamily: "Inter, sans-serif" }}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#25343F]/40 hover:text-[#F2A65A] transition-colors"
          >
            {show ? <FiEyeOff size={16} /> : <FiEye size={16} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!email || !password) return;
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#EAEFEF] flex flex-col">


      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-sm">
          {/* Title */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-[#25343F] flex items-center justify-center mx-auto mb-5 shadow-lg">
              <FiLock size={26} className="text-[#F2A65A]" />
            </div>
            <h2
              className="text-3xl font-bold text-[#25343F]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              স্বাগতম
            </h2>
            <p
              className="text-sm text-[#25343F]/50 mt-1.5"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              আপনার অ্যাকাউন্টে প্রবেশ করুন
            </p>
          </div>

          {/* Card */}
          <div className="bg-white rounded-3xl shadow-xl shadow-[#25343F]/10 p-7">
            <div className="flex flex-col gap-5">
              <InputField
                label="ইমেইল ঠিকানা"
                icon={<FiMail size={16} />}
                type="email"
                placeholder="email@example.com"
                value={email}
                onChange={setEmail}
              />
              <InputField
                label="পাসওয়ার্ড"
                icon={<FiLock size={16} />}
                type="password"
                placeholder="আপনার পাসওয়ার্ড"
                value={password}
                onChange={setPassword}
              />

              {/* Forgot Password */}
              <div className="flex justify-end -mt-2">
                <a
                  href="#"
                  className="text-xs text-[#F2A65A] hover:underline"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  পাসওয়ার্ড ভুলে গেছেন?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="button"
                onClick={handleLogin}
                disabled={!email || !password || loading}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#F2A65A] hover:bg-[#e09448] disabled:bg-[#F2A65A]/40 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 active:scale-95 shadow-lg shadow-[#F2A65A]/30"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      />
                    </svg>
                    লগইন হচ্ছে...
                  </span>
                ) : (
                  <>
                    লগইন করুন <FiArrowRight size={16} />
                  </>
                )}
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-[#EAEFEF]" />
              <span
                className="text-xs text-[#25343F]/30"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                অথবা
              </span>
              <div className="flex-1 h-px bg-[#EAEFEF]" />
            </div>

            {/* Register CTA */}
            <p
              className="text-center text-sm text-[#25343F]/50"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              নতুন সদস্য?{" "}
              <a
                href="/register"
                className="text-[#F2A65A] font-semibold hover:underline"
              >
                নিবন্ধন করুন
              </a>
            </p>
          </div>

          {/* Bottom note */}
          <p
            className="text-center text-xs text-[#25343F]/30 mt-6 leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            সমস্যা হলে কমিটির সাথে যোগাযোগ করুন
          </p>
        </div>
      </main>
    </div>
  );
}
