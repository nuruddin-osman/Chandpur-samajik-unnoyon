import React from 'react'
import Footer from '@/components/footer/Footer'
import AboutPreview from '@/components/home/AboutPreview'
import CommitteePreview from '@/components/home/CommitteePreview'
import CTASection from '@/components/home/CTASection'
import FinancialSummary from '@/components/home/FinancialSummary'
import HeroSection from '@/components/home/Hero'
import RecentActivities from '@/components/home/RecentActivities'
import StatsCounter from '@/components/home/StatsCounter'
import Navbar from '@/components/header/Navbar'

const Home = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsCounter />
      <AboutPreview />
      <RecentActivities />
      <CommitteePreview />
      <FinancialSummary />
      <CTASection />
      <Footer />
    </main>
  )
}

export default Home
