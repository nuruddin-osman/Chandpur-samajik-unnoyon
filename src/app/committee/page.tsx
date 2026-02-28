
"use client";
import AdvisoryBoard from '@/components/committee/AdvisoryBoard'
import CommitteeHero from '@/components/committee/CommitteeHero'
import CommitteeMeetings from '@/components/committee/CommitteeMeetings'
import CommitteeResponsibilities from '@/components/committee/CommitteeResponsibilities'
import CommitteeStructure from '@/components/committee/CommitteeStructure'
import ExecutiveCommittee from '@/components/committee/ExecutiveCommittee'
import JoinCommitteeCTA from '@/components/committee/JoinCommitteeCTA'
import PastCommittees from '@/components/committee/PastCommittees'
import React from 'react'

const page = () => {
  return (
    <div>
      <CommitteeHero />
      <CommitteeStructure />
      <ExecutiveCommittee />
      <AdvisoryBoard />
      <PastCommittees />
      <CommitteeResponsibilities />
      <CommitteeMeetings />
      <JoinCommitteeCTA />
    </div>
  )
}

export default page
