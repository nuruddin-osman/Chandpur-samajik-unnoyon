

// components/home/StatsCounter.tsx
"use client";
import { RiBuilding2Fill } from "react-icons/ri";
import { FiFileText } from "react-icons/fi";
import { PiHandCoins } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
import { StatItem } from '@/types';

const stats: StatItem[] = [
  { icon: FaUsers, label: 'সক্রিয় সদস্য', value: '৫০০+', color: 'text-[#F2A65A]' },
  { icon: PiHandCoins, label: 'মোট অনুদান', value: '৳ ২৫L+', color: 'text-[#F2A65A]' },
  { icon: FiFileText, label: 'আর্থিক প্রতিবেদন', value: '৪৮', color: 'text-[#F2A65A]' },
  { icon: RiBuilding2Fill, label: 'সম্প্রদায় প্রকল্প', value: '১৫', color: 'text-[#F2A65A]' },
];


const StatsCounter = () => {
  return (
    <section className="bg-white py-12 border-b border-[#EAEFEF]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex p-3 bg-[#EAEFEF] rounded-full mb-3">
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-[#25343F]">{stat.value}</h3>
                <p className="font-inter text-sm text-[#25343F] opacity-70">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default StatsCounter
