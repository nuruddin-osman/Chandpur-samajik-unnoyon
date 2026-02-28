import AboutCTA from '@/components/about/AboutCTA'
import AboutHero from '@/components/about/AboutHero'
import Achievements from '@/components/about/Achievements'
import CoreValues from '@/components/about/CoreValues'
import HistoryTimeline from '@/components/about/HistoryTimeline'
import KeyStatistics from '@/components/about/KeyStatistics'
import MissionVision from '@/components/about/MissionVision'
import TeamStructure from '@/components/about/TeamStructure'


const AboutPage = () => {
  return (
    <div>
      <AboutHero />
      <MissionVision />
      <HistoryTimeline />
      <CoreValues />
      <KeyStatistics />
      <TeamStructure />
      <Achievements />
      <AboutCTA />
    </div>
  )
}

export default AboutPage
