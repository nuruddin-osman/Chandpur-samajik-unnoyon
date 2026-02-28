import React from 'react'
import AboutPreview from '@/components/home/AboutPreview'
import CommitteePreview from '@/components/home/CommitteePreview'
import CTASection from '@/components/home/CTASection'
import FinancialSummary from '@/components/home/FinancialSummary'
import HeroSection from '@/components/home/Hero'
import RecentActivities from '@/components/home/RecentActivities'
import StatsCounter from '@/components/home/StatsCounter'
const Home = () => {
  return (
    <main>

      <HeroSection />
      <StatsCounter />
      <AboutPreview />
      <RecentActivities />
      <CommitteePreview />
      <FinancialSummary />
      <CTASection />

    </main>
  )
}

export default Home
