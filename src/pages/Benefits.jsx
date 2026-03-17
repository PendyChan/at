import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const categories = [
  { key: 'cat1', items: ['i1', 'i2', 'i3'] },
  { key: 'cat2', items: ['i1', 'i2', 'i3', 'i4', 'i5'] },
  { key: 'cat3', items: ['i1', 'i2', 'i3', 'i4'] },
  { key: 'cat4', items: ['i1', 'i2', 'i3', 'i4'] },
  { key: 'cat5', items: ['i1', 'i2', 'i3'] },
  { key: 'cat6', items: ['i1', 'i2', 'i3'] },
  { key: 'cat7', items: ['i1', 'i2', 'i3', 'i4'] },
]

// Circles scattered across the full page: pos is CSS position props
const floatingCircles = [
  { src: '/images/office1.jpg',  size: 180, dur: 4.0, delay: 0.0, pos: { top: '35%',  left: '25%' } },
  { src: '/images/snack.jpg',    size: 189, dur: 5.1, delay: 0.7, pos: { top: '65%',  right: '12%' } },
  { src: '/images/office2.jpg',  size: 221, dur: 4.4, delay: 1.3, pos: { top: '30%', right: '5%' } },
  { src: '/images/massage.jpg',    size: 169, dur: 3.8, delay: 0.4, pos: { top: '45%', left: '5%' } },
  { src: '/images/bbq.jpg',    size: 241, dur: 4.9, delay: 1.0, pos: { top: '55%', left: '15%' } },
  { src: '/images/office3.jpg',  size: 202, dur: 4.3, delay: 0.2, pos: { top: '38%', right: '20%' } },
  { src: '/images/yearlyParty.jpg',     size: 215, dur: 5.3, delay: 1.6, pos: { top: '75%', right: '25%' } },
  { src: '/images/office4.jpg',  size: 176, dur: 3.9, delay: 0.8, pos: { top: '76%', left: '4%' } },
  { src: '/images/office5.jpg',  size: 195, dur: 4.7, delay: 1.4, pos: { top: '80%', left: '40%' } },
  { src: '/images/party2.jpg',  size: 200, dur: 4.8, delay: 1.4, pos: { top: '30%', left: '50%' } },
  { src: '/images/member1.jpg',  size: 170, dur: 4.0, delay: 0.0, pos: { top: '80%', right: '3%' } },
]

export default function Benefits() {
  const { t } = useTranslation()
  const [lightbox, setLightbox] = useState(null)
  const [hoveredSrc, setHoveredSrc] = useState(null)

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  return (
    <div className="pt-16 relative overflow-x-hidden">

      {/* Floating circles — rendered on top so pointer events work */}
      <div className="absolute inset-0" style={{ zIndex: 5, pointerEvents: 'none' }}>
        {floatingCircles.map((c) => (
          <div
            key={c.src}
            style={{
              position: 'absolute',
              ...c.pos,
              animation: `float ${c.dur}s ease-in-out infinite`,
              animationDelay: `${c.delay}s`,
              pointerEvents: 'auto',
              cursor: 'zoom-in',
            }}
            onClick={() => setLightbox(c)}
            onMouseEnter={() => setHoveredSrc(c.src)}
            onMouseLeave={() => setHoveredSrc(null)}
          >
            <div
              style={{
                width: c.size,
                height: c.size,
                borderRadius: '50%',
                overflow: 'hidden',
                opacity: hoveredSrc === c.src ? 1 : 0.42,
                boxShadow: hoveredSrc === c.src
                  ? '0 12px 40px rgba(0,0,0,0.22)'
                  : '0 6px 24px rgba(0,0,0,0.08)',
                transition: 'opacity 0.25s ease, box-shadow 0.25s ease',
              }}
            >
              <img src={c.src} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10 bg-gradient-to-br from-brand-blue to-brand-blue-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-300 font-semibold text-sm uppercase tracking-widest mb-2">
            Benefits
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            {t('benefits.title')}
          </h1>
          <p className="text-blue-200 max-w-2xl mx-auto text-lg">{t('benefits.subtitle')}</p>
        </div>
      </div>

      {/* Benefits Grid */}
      <section className="relative z-10 py-20" style={{ pointerEvents: 'none' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* First row: 4 cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.slice(0, 4).map((cat) => (
              <div
                key={cat.key}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-lg transition-shadow"
                style={{ pointerEvents: 'auto' }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t(`benefits.${cat.key}_title`)}
                </h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                      {t(`benefits.${cat.key}_${item}`)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Second row: 3 cards centered */}
          <div className="flex flex-wrap justify-center gap-6">
            {categories.slice(4).map((cat) => (
              <div
                key={cat.key}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-lg transition-shadow w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
                style={{ pointerEvents: 'auto' }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t(`benefits.${cat.key}_title`)}
                </h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                      {t(`benefits.${cat.key}_${item}`)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom spacing */}
      <div className="relative z-10 pb-28" />

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox.src}
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
