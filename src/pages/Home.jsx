import { useEffect } from 'react'
import Hero from '../components/sections/Hero'
import TrustedCompanies from '../components/sections/TrustedCompanies'
import AboutPreview from '../components/sections/AboutPreview'
import ServicesPreview from '../components/sections/ServicesPreview'
import Features from '../components/sections/Features'
import TechStack from '../components/sections/TechStack'
import Stats from '../components/sections/Stats'
import Process from '../components/sections/Process'
import Portfolio from '../components/sections/Portfolio'
import Testimonials from '../components/sections/Testimonials'
import Pricing from '../components/sections/Pricing'
import FAQ from '../components/sections/FAQ'
import Newsletter from '../components/sections/Newsletter'
import CTA from '../components/sections/CTA'

export default function Home() {
  useEffect(() => {
    document.title = 'NovaTech Solutions — Transforming Ideas into Digital Reality.'
  }, [])

  return (
    <>
      <Hero />
      <TrustedCompanies />
      <AboutPreview />
      <ServicesPreview />
      <Features />
      <TechStack />
      <Stats />
      <Process />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Newsletter />
      <CTA />
    </>
  )
}
