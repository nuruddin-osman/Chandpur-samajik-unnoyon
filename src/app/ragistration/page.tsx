"use client";

import React, { useState } from "react";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiLock,
  FiEye,
  FiEyeOff,
  FiMapPin,
  FiCalendar,
  FiCheckCircle,
  FiArrowRight,
  FiUpload,
  FiChevronDown,
} from "react-icons/fi";
import { FaMoneyBillWave, FaHandshake } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

type MemberRole = "paid" | "non-paid" | null;
type Step = 1 | 2 | 3;

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  dob: string;
  nid: string;
  address: string;
  occupation: string;
  password: string;
  confirmPassword: string;
  photo: File | null;
}

const StepIndicator = ({ current }: { current: Step }) => {
  const steps = [
    { num: 1, label: "সদস্য ধরন" },
    { num: 2, label: "তথ্য প্রদান" },
    { num: 3, label: "নিশ্চিতকরণ" },
  ];
  return (
    <div className="flex items-center justify-center gap-0 mb-10">
      {steps.map((s, i) => (
        <React.Fragment key={s.num}>
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${current === s.num ? "bg-[#F2A65A] text-[#25343F] shadow-lg scale-110" : current > s.num ? "bg-[#25343F] text-[#F2A65A] border-2 border-[#F2A65A]" : "bg-[#EAEFEF] text-[#25343F]/40 border-2 border-[#EAEFEF]"}`}
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {current > s.num ? <FiCheckCircle size={18} /> : s.num}
            </div>
            <span
              className={`mt-1 text-xs transition-colors duration-300 ${current === s.num ? "text-[#F2A65A] font-semibold" : current > s.num ? "text-[#25343F]" : "text-[#25343F]/40"}`}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {s.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={`w-16 h-0.5 mb-5 transition-all duration-500 ${current > s.num ? "bg-[#F2A65A]" : "bg-[#EAEFEF]"}`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const RoleCard = ({
  role,
  selected,
  onSelect,
}: {
  role: "paid" | "non-paid";
  selected: boolean;
  onSelect: () => void;
}) => {
  const isPaid = role === "paid";
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`relative w-full rounded-2xl p-6 text-left transition-all duration-300 border-2 group hover:scale-[1.02] active:scale-[0.98] ${selected ? "border-[#F2A65A] bg-[#F2A65A]/10 shadow-xl" : "border-[#EAEFEF] bg-white hover:border-[#F2A65A]/50 hover:shadow-md"}`}
    >
      {selected && (
        <span className="absolute top-4 right-4 text-[#F2A65A]">
          <MdVerified size={24} />
        </span>
      )}
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${selected ? "bg-[#F2A65A]" : "bg-[#EAEFEF] group-hover:bg-[#F2A65A]/20"}`}
      >
        {isPaid ? (
          <FaMoneyBillWave
            size={24}
            className={selected ? "text-white" : "text-[#25343F]/60"}
          />
        ) : (
          <FaHandshake
            size={24}
            className={selected ? "text-white" : "text-[#25343F]/60"}
          />
        )}
      </div>
      <h3
        className="text-lg font-bold text-[#25343F] mb-1"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        {isPaid ? "Paid Member" : "Non-Paid Member"}
      </h3>
      <p
        className="text-sm text-[#25343F]/60 leading-relaxed"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {isPaid
          ? "মাসিক/বার্ষিক চাঁদা প্রদান করে সংগঠনের সক্রিয় সদস্য হন এবং সব সুবিধা উপভোগ করুন।"
          : "বিনামূল্যে নিবন্ধন করুন এবং সংগঠনের কার্যক্রমে অংশগ্রহণ করুন।"}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {(isPaid
          ? ["ভোটিং অধিকার", "বিশেষ সুবিধা", "সার্টিফিকেট", "প্রথম অগ্রাধিকার"]
          : ["কার্যক্রম অংশগ্রহণ", "নিউজলেটার", "পাবলিক ড্যাশবোর্ড"]
        ).map((tag) => (
          <span
            key={tag}
            className={`text-xs px-2 py-1 rounded-full ${selected ? "bg-[#F2A65A]/20 text-[#F2A65A] font-medium" : "bg-[#EAEFEF] text-[#25343F]/50"}`}
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {tag}
          </span>
        ))}
      </div>
    </button>
  );
};

const InputField = ({
  label,
  icon,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
  hint,
}: {
  label: string;
  icon: React.ReactNode;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  hint?: string;
}) => (
  <div className="flex flex-col gap-1">
    <label
      className="text-sm font-medium text-[#25343F]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {label} {required && <span className="text-[#F2A65A]">*</span>}
    </label>
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#25343F]/40">
        {icon}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-[#EAEFEF] bg-white text-[#25343F] placeholder-[#25343F]/30 focus:outline-none focus:border-[#F2A65A] transition-colors duration-200 text-sm"
        style={{ fontFamily: "Inter, sans-serif" }}
      />
    </div>
    {hint && (
      <p
        className="text-xs text-[#25343F]/40"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {hint}
      </p>
    )}
  </div>
);

const PasswordField = ({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}) => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col gap-1">
      <label
        className="text-sm font-medium text-[#25343F]"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {label} <span className="text-[#F2A65A]">*</span>
      </label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#25343F]/40">
          <FiLock size={16} />
        </span>
        <input
          type={show ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-10 pr-11 py-3 rounded-xl border-2 border-[#EAEFEF] bg-white text-[#25343F] placeholder-[#25343F]/30 focus:outline-none focus:border-[#F2A65A] transition-colors duration-200 text-sm"
          style={{ fontFamily: "Inter, sans-serif" }}
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#25343F]/40 hover:text-[#F2A65A] transition-colors"
        >
          {show ? <FiEyeOff size={16} /> : <FiEye size={16} />}
        </button>
      </div>
    </div>
  );
};

const SelectField = ({
  label,
  options,
  value,
  onChange,
  required,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) => (
  <div className="flex flex-col gap-1">
    <label
      className="text-sm font-medium text-[#25343F]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {label} {required && <span className="text-[#F2A65A]">*</span>}
    </label>
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-4 pr-10 py-3 rounded-xl border-2 border-[#EAEFEF] bg-white text-[#25343F] focus:outline-none focus:border-[#F2A65A] transition-colors duration-200 text-sm appearance-none"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {options.map((o) => (
          <option key={o} value={o === options[0] ? "" : o}>
            {o}
          </option>
        ))}
      </select>
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#25343F]/40 pointer-events-none">
        <FiChevronDown size={16} />
      </span>
    </div>
  </div>
);

const PhotoUpload = ({
  value,
  onChange,
}: {
  value: File | null;
  onChange: (f: File | null) => void;
}) => {
  const preview = value ? URL.createObjectURL(value) : null;
  return (
    <div className="flex flex-col gap-1">
      <label
        className="text-sm font-medium text-[#25343F]"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        প্রোফাইল ছবি
      </label>
      <label className="relative cursor-pointer group">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => onChange(e.target.files?.[0] ?? null)}
        />
        <div
          className={`w-full h-28 rounded-xl border-2 border-dashed flex flex-col items-center justify-center gap-2 transition-all duration-200 ${preview ? "border-[#F2A65A] bg-[#F2A65A]/5" : "border-[#EAEFEF] bg-white group-hover:border-[#F2A65A]/50 group-hover:bg-[#F2A65A]/5"}`}
        >
          {preview ? (
            <img
              src={preview}
              alt="preview"
              className="h-full w-auto rounded-lg object-cover max-h-24"
            />
          ) : (
            <>
              <FiUpload
                size={20}
                className="text-[#25343F]/30 group-hover:text-[#F2A65A] transition-colors"
              />
              <span
                className="text-xs text-[#25343F]/40 group-hover:text-[#F2A65A] transition-colors"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                ছবি আপলোড করুন (JPG/PNG)
              </span>
            </>
          )}
        </div>
      </label>
    </div>
  );
};

const ConfirmationSummary = ({
  role,
  data,
}: {
  role: MemberRole;
  data: FormData;
}) => {
  const rows = [
    {
      label: "সদস্য ধরন",
      value: role === "paid" ? "Paid Member" : "Non-Paid Member",
    },
    { label: "পূর্ণ নাম", value: data.fullName },
    { label: "ইমেইল", value: data.email },
    { label: "ফোন", value: data.phone },
    { label: "পেশা", value: data.occupation },
    { label: "ঠিকানা", value: data.address },
  ].filter((r) => r.value);
  return (
    <div className="rounded-2xl border-2 border-[#EAEFEF] overflow-hidden">
      <div className="bg-[#25343F] px-5 py-4">
        <h4
          className="text-white font-semibold"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          আবেদনের সারসংক্ষেপ
        </h4>
      </div>
      <div className="divide-y divide-[#EAEFEF]">
        {rows.map((r) => (
          <div key={r.label} className="flex justify-between px-5 py-3">
            <span
              className="text-sm text-[#25343F]/50"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {r.label}
            </span>
            <span
              className={`text-sm font-medium ${r.label === "সদস্য ধরন" ? "text-[#F2A65A]" : "text-[#25343F]"}`}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {r.value}
            </span>
          </div>
        ))}
      </div>
      <div className="px-5 py-4 bg-[#F2A65A]/5">
        <p
          className="text-xs text-[#25343F]/50 leading-relaxed"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          ✅ আবেদন জমা দেওয়ার পর কমিটি আপনার আবেদন পর্যালোচনা করবে। অনুমোদন হলে
          আপনার ইমেইলে বিস্তারিত জানানো হবে।
        </p>
      </div>
    </div>
  );
};

const PrimaryButton = ({
  children,
  onClick,
  type = "button",
  disabled,
  fullWidth,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  fullWidth?: boolean;
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`${fullWidth ? "w-full" : ""} flex items-center justify-center gap-2 px-6 py-3.5 bg-[#F2A65A] hover:bg-[#e09448] disabled:bg-[#F2A65A]/40 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 active:scale-95 shadow-lg shadow-[#F2A65A]/30`}
    style={{ fontFamily: "Montserrat, sans-serif" }}
  >
    {children}
  </button>
);

const SecondaryButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    className="flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-[#EAEFEF] text-[#25343F] font-semibold rounded-xl border-2 border-[#EAEFEF] transition-all duration-200 active:scale-95"
    style={{ fontFamily: "Montserrat, sans-serif" }}
  >
    {children}
  </button>
);

export default function RegistrationPage() {
  const [step, setStep] = useState<Step>(1);
  const [role, setRole] = useState<MemberRole>(null);
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    nid: "",
    address: "",
    occupation: "",
    password: "",
    confirmPassword: "",
    photo: null,
  });
  const update = (key: keyof FormData) => (v: string | File | null) =>
    setForm((f) => ({ ...f, [key]: v }));
  const canProceedStep1 = role !== null;
  const canProceedStep2 = !!(
    form.fullName &&
    form.email &&
    form.phone &&
    form.password &&
    form.confirmPassword
  );
  const handleSubmit = () => setSubmitted(true);

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#EAEFEF] flex items-center justify-center p-4">
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@400;500;600&family=Montserrat:wght@600;700&display=swap');`}</style>
        <div className="bg-white rounded-3xl p-10 max-w-md w-full text-center shadow-xl">
          <div className="w-20 h-20 rounded-full bg-[#F2A65A]/15 flex items-center justify-center mx-auto mb-6">
            <FiCheckCircle size={40} className="text-[#F2A65A]" />
          </div>
          <h2
            className="text-2xl font-bold text-[#25343F] mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            আবেদন সম্পন্ন হয়েছে!
          </h2>
          <p
            className="text-[#25343F]/60 text-sm leading-relaxed mb-6"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            আপনার নিবন্ধন আবেদন সফলভাবে জমা হয়েছে। কমিটি পর্যালোচনার পর আপনার
            ইমেইল{" "}
            <span className="text-[#F2A65A] font-medium">{form.email}</span>-এ
            অনুমোদনের বিস্তারিত পাঠানো হবে।
          </p>
          <PrimaryButton
            fullWidth
            onClick={() => {
              setSubmitted(false);
              setStep(1);
              setRole(null);
              setAgreed(false);
            }}
          >
            হোম পেজে ফিরুন
          </PrimaryButton>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#EAEFEF] flex flex-col">
      <main className="flex-1 flex items-start justify-center py-10 px-4">
        <div className="w-full max-w-lg">
          <div className="text-center mb-8">
            <h2
              className="text-3xl font-bold text-[#25343F] leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              নতুন সদস্য নিবন্ধন
            </h2>
            <p
              className="text-sm text-[#25343F]/50 mt-2"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              সংগঠনের অংশ হয়ে এলাকার উন্নয়নে অবদান রাখুন
            </p>
          </div>
          <StepIndicator current={step} />
          <div className="bg-white rounded-3xl shadow-xl shadow-[#25343F]/10 p-7">
            {step === 1 && (
              <div>
                <h3
                  className="text-lg font-bold text-[#25343F] mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  সদস্যপদের ধরন বেছে নিন
                </h3>
                <p
                  className="text-sm text-[#25343F]/50 mb-6"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  আপনার জন্য উপযুক্ত সদস্যপদ বেছে নিন
                </p>
                <div className="flex flex-col gap-4">
                  <RoleCard
                    role="paid"
                    selected={role === "paid"}
                    onSelect={() => setRole("paid")}
                  />
                  <RoleCard
                    role="non-paid"
                    selected={role === "non-paid"}
                    onSelect={() => setRole("non-paid")}
                  />
                </div>
                <div className="mt-6 flex justify-end">
                  <PrimaryButton
                    onClick={() => setStep(2)}
                    disabled={!canProceedStep1}
                  >
                    পরবর্তী ধাপ <FiArrowRight size={16} />
                  </PrimaryButton>
                </div>
              </div>
            )}
            {step === 2 && (
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3
                    className="text-lg font-bold text-[#25343F]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    ব্যক্তিগত তথ্য
                  </h3>
                  <span
                    className="text-xs bg-[#F2A65A]/15 text-[#F2A65A] px-2 py-0.5 rounded-full font-medium"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {role === "paid" ? "Paid Member" : "Non-Paid Member"}
                  </span>
                </div>
                <p
                  className="text-sm text-[#25343F]/50 mb-6"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  সঠিক তথ্য দিয়ে ফর্মটি পূরণ করুন
                </p>
                <div className="grid grid-cols-1 gap-4">
                  <InputField
                    label="পূর্ণ নাম"
                    icon={<FiUser size={16} />}
                    placeholder="আপনার পূর্ণ নাম লিখুন"
                    value={form.fullName}
                    onChange={update("fullName")}
                    required
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <InputField
                      label="ইমেইল"
                      icon={<FiMail size={16} />}
                      type="email"
                      placeholder="email@example.com"
                      value={form.email}
                      onChange={update("email")}
                      required
                    />
                    <InputField
                      label="ফোন নম্বর"
                      icon={<FiPhone size={16} />}
                      type="tel"
                      placeholder="01XXXXXXXXX"
                      value={form.phone}
                      onChange={update("phone")}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <InputField
                      label="জন্ম তারিখ"
                      icon={<FiCalendar size={16} />}
                      type="date"
                      placeholder=""
                      value={form.dob}
                      onChange={update("dob")}
                    />
                    <InputField
                      label="জাতীয় পরিচয়পত্র নম্বর"
                      icon={<FiUser size={16} />}
                      placeholder="NID নম্বর"
                      value={form.nid}
                      onChange={update("nid")}
                      hint="ঐচ্ছিক"
                    />
                  </div>
                  <SelectField
                    label="পেশা"
                    options={[
                      "পেশা বেছে নিন",
                      "ব্যবসায়ী",
                      "চাকরিজীবী",
                      "কৃষক",
                      "ছাত্র/ছাত্রী",
                      "শিক্ষক",
                      "ডাক্তার",
                      "প্রকৌশলী",
                      "অন্যান্য",
                    ]}
                    value={form.occupation}
                    onChange={update("occupation")}
                  />
                  <InputField
                    label="বর্তমান ঠিকানা"
                    icon={<FiMapPin size={16} />}
                    placeholder="গ্রাম/মহল্লা, উপজেলা, জেলা"
                    value={form.address}
                    onChange={update("address")}
                    required
                  />
                  <PhotoUpload
                    value={form.photo}
                    onChange={update("photo") as (f: File | null) => void}
                  />
                  <div className="pt-2 border-t-2 border-[#EAEFEF]">
                    <p
                      className="text-xs font-semibold text-[#25343F]/40 uppercase tracking-wider mb-3"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      পাসওয়ার্ড সেট করুন
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <PasswordField
                        label="পাসওয়ার্ড"
                        placeholder="পাসওয়ার্ড"
                        value={form.password}
                        onChange={update("password")}
                      />
                      <PasswordField
                        label="পাসওয়ার্ড নিশ্চিত করুন"
                        placeholder="পুনরায় লিখুন"
                        value={form.confirmPassword}
                        onChange={update("confirmPassword")}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-between">
                  <SecondaryButton onClick={() => setStep(1)}>
                    ← পেছনে
                  </SecondaryButton>
                  <PrimaryButton
                    onClick={() => setStep(3)}
                    disabled={!canProceedStep2}
                  >
                    পর্যালোচনা করুন <FiArrowRight size={16} />
                  </PrimaryButton>
                </div>
              </div>
            )}
            {step === 3 && (
              <div>
                <h3
                  className="text-lg font-bold text-[#25343F] mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  আবেদন নিশ্চিত করুন
                </h3>
                <p
                  className="text-sm text-[#25343F]/50 mb-6"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  জমা দেওয়ার আগে তথ্য যাচাই করুন
                </p>
                <ConfirmationSummary role={role} data={form} />
                <div className="mt-5 flex items-start gap-3 p-4 rounded-xl bg-[#EAEFEF]">
                  <input
                    type="checkbox"
                    id="agree"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 accent-[#F2A65A] w-4 h-4 cursor-pointer"
                  />
                  <label
                    htmlFor="agree"
                    className="text-xs text-[#25343F]/60 leading-relaxed cursor-pointer"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    আমি চাঁদপুর উন্নয়ন ফোরামের{" "}
                    <a href="#" className="text-[#F2A65A] underline">
                      নিয়ম ও শর্তাবলী
                    </a>{" "}
                    এবং{" "}
                    <a href="#" className="text-[#F2A65A] underline">
                      গোপনীয়তা নীতি
                    </a>{" "}
                    পড়েছি এবং সম্মত আছি।
                  </label>
                </div>
                <div className="mt-6 flex justify-between">
                  <SecondaryButton onClick={() => setStep(2)}>
                    ← সম্পাদনা করুন
                  </SecondaryButton>
                  <PrimaryButton onClick={handleSubmit} disabled={!agreed}>
                    আবেদন জমা দিন ✓
                  </PrimaryButton>
                </div>
              </div>
            )}
          </div>
          <p
            className="text-center text-xs text-[#25343F]/40 mt-6"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            ইতিমধ্যে সদস্য?{" "}
            <a
              href="/login"
              className="text-[#F2A65A] font-medium hover:underline"
            >
              লগইন করুন
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
