
// components/about/KeyStatistics.tsx
"use client";
import { FaUsers, FaDonate, FaGraduationCap, FaHeartbeat, FaHome, FaMedal } from 'react-icons/fa';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface StatItemProps {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  label: string;
  suffix?: string;
  color: string;
}

const StatItem = ({ icon: Icon, value, label, suffix = '+', color }: StatItemProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="text-center group">
      <div className={`w-16 h-16 mx-auto bg-${color}/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        <Icon className={`w-8 h-8 text-${color}`} />
      </div>
      <div className="font-display text-3xl md:text-4xl text-[#25343F] mb-2">
        {inView ? <CountUp end={value} duration={2.5} suffix={suffix} /> : '0'}
      </div>
      <div className="font-inter text-sm text-[#25343F]/70">{label}</div>
    </div>
  );
};


const KeyStatistics = () => {
      const stats = [
    { icon: FaUsers, value: 500, label: 'সক্রিয় সদস্য', color: '[#F2A65A]' },
    { icon: FaDonate, value: 2500000, label: 'অনুদান সংগ্রহ', suffix: '৳+', color: '[#25343F]' },
    { icon: FaGraduationCap, value: 150, label: 'শিক্ষাবৃত্তি', color: '[#F2A65A]' },
    { icon: FaHeartbeat, value: 1000, label: 'চিকিৎসা সহায়তা', suffix: '+', color: '[#25343F]' },
    { icon: FaHome, value: 50, label: 'পরিবার পুনর্বাসন', color: '[#F2A65A]' },
    { icon: FaMedal, value: 25, label: 'সম্মাননা', color: '[#25343F]' },
  ];
  return (
    <section className="py-20 bg-[#25343F] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #F2A65A 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            আমাদের <span className="text-[#F2A65A]">অর্জন</span>
          </h2>
          <div className="w-20 h-1 bg-[#F2A65A] mx-auto mb-4"></div>
          <p className="font-inter text-white/80">
            সংখ্যাগুলো বলে আমাদের গল্প, আমাদের কাজের প্রমাণ
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="font-inter text-white/60 text-sm">
            * ২০১০ থেকে ২০২৪ পর্যন্ত সর্বমোট পরিসংখ্যান
          </p>
        </div>
      </div>
    </section>
  )
}

export default KeyStatistics
