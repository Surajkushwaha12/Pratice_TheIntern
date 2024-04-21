import React from 'react'
import HeroSection from './Components/Hero'
import MissionSection from './Components/Mission'
import WhyChooseSection from './Components/WhyChoose'
import Features from './Components/Features'
import Promises from './Components/Promises'
import Courses from './Components/Courses'
import FAQ from './Components/FAQ';
import AboutCourse from './Components/AboutCourse'
import KeyFeature from './Components/KeyFeature'
import SkillMaster from './Components/SkillMaster'
const App = () => {
  return (
    <div>
      <HeroSection />
      <MissionSection/>
      <WhyChooseSection/>
      <Features/>
      <Promises/>
      <Courses/>
      <FAQ/>
      <AboutCourse />
      <KeyFeature />
      <SkillMaster />
    </div>
  )
}

export default App
