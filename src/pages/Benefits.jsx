import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const categories = [
  {
    key: 'cat1', icon: '💰',
    items: ['i1', 'i2'],
    color: 'bg-blue-50 border-blue-200',
    iconBg: 'bg-blue-100 text-blue-600',
  },
  {
    key: 'cat2', icon: '🏖️',
    items: ['i1', 'i2', 'i3', 'i4'],
    color: 'bg-sky-50 border-sky-200',
    iconBg: 'bg-sky-100 text-sky-600',
  },
  {
    key: 'cat3', icon: '☕',
    items: ['i1', 'i2', 'i3', 'i4'],
    color: 'bg-indigo-50 border-indigo-200',
    iconBg: 'bg-indigo-100 text-indigo-600',
  },
  {
    key: 'cat4', icon: '🎉',
    items: ['i1', 'i2', 'i3', 'i4'],
    color: 'bg-blue-50 border-blue-200',
    iconBg: 'bg-blue-100 text-blue-600',
  },
  {
    key: 'cat5', icon: '💝',
    items: ['i1', 'i2', 'i3'],
    color: 'bg-sky-50 border-sky-200',
    iconBg: 'bg-sky-100 text-sky-600',
  },
  {
    key: 'cat6', icon: '🛡️',
    items: ['i1', 'i2', 'i3'],
    color: 'bg-indigo-50 border-indigo-200',
    iconBg: 'bg-indigo-100 text-indigo-600',
  },
]

const officePhotos = [
  { src: '/images/office1.jpg', label: 'Office' },
  { src: '/images/office2.jpg', label: 'Office' },
  { src: '/images/office3.jpg', label: 'Office' },
  { src: '/images/office4.jpg', label: 'Office' },
  { src: '/images/office5.jpg', label: 'Office' },
  { src: '/images/snack.jpg', label: 'Snack Zone' },
  { src: '/images/massage.jpg', label: 'Massage Room' },
  { src: '/images/party1.jpg', label: 'Team BBQ' },
  { src: '/images/yearly-party.jpg', label: 'Year-End Party' },
]

export default function Benefits() {
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
            Benefits
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            {t('benefits.title')}
          </h1>
          <p className="text-blue-200 max-w-2xl mx-auto text-lg">{t('benefits.subtitle')}</p>
        </div>
      </div>

      {/* Benefits Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.key}
                className={`border rounded-2xl p-6 ${cat.color} hover:shadow-md transition-shadow`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${cat.iconBg} text-2xl mb-4`}>
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t(`benefits.${cat.key}_title`)}
                </h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
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

      {/* Photo Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Life @ AscentisTech
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {officePhotos.map((p) => (
              <div
                key={p.src}
                className="group relative rounded-2xl overflow-hidden aspect-video shadow-sm hover:shadow-md transition-shadow cursor-zoom-in"
                onClick={() => setLightbox(p)}
              >
                <img
                  src={p.src}
                  alt={p.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-brand-blue/0 group-hover:bg-brand-blue/20 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform">
                  <p className="text-white text-xs font-medium">{p.label}</p>
                </div>
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
                alt={lightbox.label}
                className="max-w-[90vw] max-h-[85vh] rounded-2xl shadow-2xl object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              <p className="absolute bottom-6 text-white text-sm font-medium bg-black/40 px-4 py-1.5 rounded-full">
                {lightbox.label}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
