"use client";

import ContactForm from '@/components/contact-us/ContactForm'
import ContactHero from '@/components/contact-us/ContactHero'
import ContactInfo from '@/components/contact-us/ContactInfo'
import FAQSection from '@/components/contact-us/FAQSection'
import MapLocation from '@/components/contact-us/MapLocation'
import OfficeHours from '@/components/contact-us/OfficeHours'
import React from 'react'

const page = () => {
  return (
    <div>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <MapLocation />
      <FAQSection />
      <OfficeHours />
    </div>
  )
}

export default page
