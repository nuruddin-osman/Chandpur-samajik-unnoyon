
"use client";
import CategoryBreakdown from '@/components/reports/CategoryBreakdown'
import FinancialSummary from '@/components/reports/FinancialSummary'
import IncomeExpenseChart from '@/components/reports/IncomeExpenseChart'
import MonthlyReports from '@/components/reports/MonthlyReports'
import PDFReports from '@/components/reports/PDFReports'
import ReportsHero from '@/components/reports/ReportsHero'
import TransactionHistory from '@/components/reports/TransactionHistory'
import TransparencyNote from '@/components/reports/TransparencyNote'
import React from 'react'

const page = () => {
  return (
    <div>
      <ReportsHero />
      <FinancialSummary />
      <IncomeExpenseChart />
      <CategoryBreakdown />
      <MonthlyReports />
      <TransactionHistory />
      <PDFReports />
      <TransparencyNote />
    </div>
  )
}

export default page
