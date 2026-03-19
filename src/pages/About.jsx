import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const missionImages = [
  '/images/meeting2.jpg',
  '/images/office2.jpg',
  '/images/meeting.jpg',
  '/images/meeting3.jpg',
]

export default function About() {
  const { t } = useTranslation()
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  const cards = [
    {
      key: 'card1',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      ),
    },
    {
      key: 'card2',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <polyline points="23 4 23 10 17 10" />
          <polyline points="1 20 1 14 7 14" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
        </svg>
      ),
    },
    {
      key: 'card3',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <div className="relative h-96 sm:h-[32rem] overflow-hidden">
        <img
          src="/images/bbq.jpg"
          alt="About"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/60 to-brand-blue/20" />
        <div className="absolute inset-0 flex items-end pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <p className="text-blue-300 font-semibold text-sm uppercase tracking-widest mb-2">About</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              {t('about.title')}
            </h1>
          </div>
        </div>
      </div>

      {/* Subtitle + Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-16">
            {t('about.subtitle')}
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            {cards.map((c) => (
              <div
                key={c.key}
                className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {c.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {t(`about.${c.key}_title`)}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">{t(`about.${c.key}_desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-300 font-semibold text-sm uppercase tracking-widest mb-3">
                Mission
              </p>
              <h2 className="text-3xl font-bold text-white mb-6">
                {t('about.mission_title')}
              </h2>
              <p className="text-blue-100 leading-relaxed text-lg">{t('about.mission_desc')}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {missionImages.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="rounded-xl object-cover h-48 w-full cursor-zoom-in hover:opacity-90 transition-opacity"
                  onClick={() => setLightbox(src)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt=""
            className="max-w-[90vw] max-h-[90vh] rounded-2xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold leading-none hover:text-gray-300"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
        </div>
      )}
    </div>
  )
}
