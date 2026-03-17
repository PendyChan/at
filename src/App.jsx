import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Awards from './pages/Awards'
import Benefits from './pages/Benefits'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function PageLoader() {
  const { pathname } = useLocation()
  const [loading, setLoading] = useState(false)

  // Remove HTML initial loader on first mount
  useEffect(() => {
    const el = document.getElementById('app-loading')
    if (el) {
      el.style.opacity = '0'
      setTimeout(() => el.remove(), 300)
    }
  }, [])

  // Show loader on route change
  useEffect(() => {
    setLoading(true)
    const t = setTimeout(() => setLoading(false), 400)
    return () => clearTimeout(t)
  }, [pathname])

  if (!loading) return null

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[9999]"
      style={{ background: 'rgba(255,255,255,0.85)' }}
    >
      <img src="/images/fancy_loading.svg" alt="Loading" className="w-64 h-64" />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageLoader />
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
