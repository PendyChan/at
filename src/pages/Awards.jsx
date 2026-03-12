import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const awardItems = [
  { key: 'item1', icon: '🏆', year: '2025' },
  { key: 'item2', icon: '🥇', year: '2025' },
  { key: 'item3', icon: '🌟', year: '2025' },
  { key: 'item4', icon: '📣', year: '2025' },
  { key: 'item5', icon: '🎖️', year: '2025' },
]

const photos = [
  { src: '/images/agile1.jpg', alt: 'Agile Award 1' },
  { src: '/images/agile2.jpg', alt: 'Agile Award 2' },
  { src: '/images/agile3.jpg', alt: 'Agile Award 3' },
  { src: '/images/reward1.jpg', alt: 'Award Ceremony 1' },
  { src: '/images/reward2.jpg', alt: 'Award Ceremony 2' },
]

export default function Awards() {
  const { t } = useTranslation()
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-gradient-to-br from-brand-blue to-brand-blue-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-300 font-semibold text-sm uppercase tracking-widest mb-2">
            Awards
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            {t('awards.title')}
          </h1>
          <p className="text-blue-200 max-w-2xl mx-auto text-lg">{t('awards.subtitle')}</p>
        </div>
      </div>

      {/* Award Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <span className="inline-block bg-brand-blue-pale text-brand-blue text-sm font-semibold px-4 py-1 rounded-full">
              {t('awards.year')}
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {awardItems.map((a) => (
              <div
                key={a.key}
                className="group relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue-pale rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{a.icon}</div>
                  <div className="text-xs text-brand-blue font-semibold mb-2">{a.year} ★</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {t(`awards.${a.key}_title`)}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {t(`awards.${a.key}_desc`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {photos.map((p) => (
              <div
                key={p.src}
                className="group relative rounded-xl overflow-hidden aspect-square shadow-sm hover:shadow-md transition-shadow cursor-zoom-in"
                onClick={() => setLightbox(p)}
              >
                <img src={p.src} alt={p.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-brand-blue/0 group-hover:bg-brand-blue/20 transition-colors" />
              </div>
            ))}
          </div>

          {/* Lightbox */}
          {lightbox && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
              onClick={() => setLightbox(null)}
            >
              <button
                className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center text-xl transition-colors"
                onClick={() => setLightbox(null)}
              >
                ✕
              </button>
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="max-w-[90vw] max-h-[85vh] rounded-2xl shadow-2xl object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              <p className="absolute bottom-6 text-white text-sm font-medium bg-black/40 px-4 py-1.5 rounded-full">
                {lightbox.alt}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Banner */}
      <section className="py-20 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t('awards.banner_title')}
          </h2>
          <p className="text-blue-200 text-lg">{t('awards.banner_desc')}</p>
        </div>
      </section>
    </div>
  )
}
