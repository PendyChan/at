import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  const switchLang = () => {
    const next = i18n.language === 'en' ? 'zh' : 'en'
    i18n.changeLanguage(next)
    localStorage.setItem('lang', next)
  }

  const links = [
    { to: '/about', label: t('nav.about') },
    { to: '/services', label: t('nav.services') },
    { to: '/awards', label: t('nav.awards') },
    { to: '/benefits', label: t('nav.benefits') },
    { to: '/contact', label: t('nav.contact') },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 flex-shrink-0">
            <img src="/images/logo.png" alt="AscentisTech" className="h-20 w-auto" />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 pb-1 border-b-2 ${
                    isActive
                      ? 'text-brand-blue border-brand-blue'
                      : 'text-gray-600 border-transparent hover:text-brand-blue hover:border-brand-blue'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}

            {/* Language Switch */}
            <button
              onClick={switchLang}
              className="ml-2 px-3 py-1.5 rounded-full border border-brand-blue text-brand-blue text-xs font-semibold hover:bg-brand-blue hover:text-white transition-colors duration-200"
            >
              {i18n.language === 'en' ? '中文' : 'EN'}
            </button>
          </div>

          {/* Mobile: Lang + Hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={switchLang}
              className="px-2.5 py-1 rounded-full border border-brand-blue text-brand-blue text-xs font-semibold hover:bg-brand-blue hover:text-white transition-colors"
            >
              {i18n.language === 'en' ? '中文' : 'EN'}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-blue-pale text-brand-blue'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-brand-blue'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
