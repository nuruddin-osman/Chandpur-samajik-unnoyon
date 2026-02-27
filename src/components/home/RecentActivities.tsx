
// components/home/RecentActivities.tsx
"use client";
import Link from 'next/link';
import { FaCalendarCheck } from "react-icons/fa";
import { RiMapPin4Fill } from "react-icons/ri";
import { ActivityItem } from '@/types';

const activities: ActivityItem[] = [
  {
    title: 'শীতার্তদের মাঝে কম্বল বিতরণ',
    date: '১৫ জানুয়ারি, ২০২৪',
    location: 'চাঁদপুর সদর',
    image: null,
    category: 'ত্রাণ'
  },
  {
    title: 'মেধাবী শিক্ষার্থীদের বৃত্তি প্রদান',
    date: '১০ ফেব্রুয়ারি, ২০২৪',
    location: 'চাঁদপুর সরকারি কলেজ',
    image: null,
    category: 'শিক্ষা'
  },
  {
    title: 'ফ্রি মেডিকেল ক্যাম্প',
    date: '৫ মার্চ, ২০২৪',
    location: 'হাজীগঞ্জ',
    image: null,
    category: 'চিকিৎসা'
  }
];

const RecentActivities = () => {
  return (
    <section className="py-16 bg-[#EAEFEF]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-[#25343F]">
              সাম্প্রতিক কার্যক্রম
            </h2>
            <p className="font-inter text-[#25343F] opacity-80 mt-2">
              আমাদের সর্বশেষ আয়োজন ও কার্যক্রম
            </p>
          </div>
          <Link
            href="/activities"
            className="font-montserrat text-[#F2A65A] hover:text-[#25343F] transition hidden md:block"
          >
            সবগুলো দেখুন →
          </Link>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="h-48 bg-[#25343F] relative">
                <div className="absolute top-3 right-3 bg-[#F2A65A] text-[#25343F] text-xs font-montserrat px-2 py-1 rounded">
                  {activity.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg text-[#25343F] mb-2">{activity.title}</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-[#25343F] opacity-70">
                    <FaCalendarCheck size={16} />
                    <span className="font-inter">{activity.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#25343F] opacity-70">
                    <RiMapPin4Fill size={16} />
                    <span className="font-inter">{activity.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="text-center mt-6 md:hidden">
          <Link
            href="/activities"
            className="font-montserrat inline-block border-2 border-[#F2A65A] text-[#F2A65A] px-6 py-2 rounded-md"
          >
            সবগুলো দেখুন
          </Link>
        </div>
      </div>
    </section>
  )
}

export default RecentActivities
