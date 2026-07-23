import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Loader from './components/layout/Loader'
import ScrollToTop from './components/layout/ScrollToTop'
import ScrollProgressBar from './components/layout/ScrollProgressBar'
import BackToTop from './components/layout/BackToTop'
import CookieBanner from './components/layout/CookieBanner'
import FloatingButtons from './components/layout/FloatingButtons'
import useCustomCursor from './hooks/useCustomCursor'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
        <Route path="/terms" element={<PageWrapper><Terms /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const { dotRef, ringRef } = useCustomCursor()

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-navy-900 bg-noise">
      <Loader visible={loading} />
      <div className="hidden lg:block">
        <div ref={dotRef} className="cursor-dot" />
        <div ref={ringRef} className="cursor-ring" />
      </div>

      <ScrollToTop />
      <ScrollProgressBar />
      <Navbar />
      <main id="main-content">
        <AnimatedRoutes />
      </main>
      <Footer />
      <BackToTop />
      <FloatingButtons />
      <CookieBanner />
    </div>
  )
}
