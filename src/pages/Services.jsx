import { useTranslation } from 'react-i18next'

const serviceData = [
  {
    key: 'card1',
    features: ['f1', 'f2', 'f3'],
    gradient: 'from-blue-600 to-blue-800',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path strokeLinecap="round" d="M8 21h8M12 17v4" />
        <path strokeLinecap="round" d="M7 8h1m3 0h6M7 11h5" />
      </svg>
    ),
  },
  {
    key: 'card2',
    features: ['f1', 'f2', 'f3'],
    gradient: 'from-indigo-500 to-indigo-700',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: 'card3',
    features: ['f1', 'f2', 'f3'],
    gradient: 'from-violet-500 to-purple-700',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l1.5 1.5L21 6" />
      </svg>
    ),
  },
  {
    key: 'card4',
    features: ['f1', 'f2', 'f3'],
    gradient: 'from-sky-500 to-blue-700',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
  },
]

export default function Services() {
  const { t } = useTranslation()

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-gradient-to-br from-brand-blue to-brand-blue-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-300 font-semibold text-sm uppercase tracking-widest mb-2">
            Services
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            {t('services.title')}
          </h1>
          <p className="text-blue-200 max-w-2xl mx-auto text-lg">{t('services.subtitle')}</p>
        </div>
      </div>

      {/* Service Cards Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {serviceData.map((s, i) => (
              <div
                key={s.key}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Colored header */}
                <div className={`bg-gradient-to-br ${s.gradient} px-7 py-8 relative overflow-hidden`}>
                  <span className="text-7xl font-black text-white/10 absolute -bottom-3 right-4 leading-none select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-4">
                    {s.icon}
                  </div>
                  <h2 className="text-xl font-bold text-white leading-snug relative z-10">
                    {t(`services.${s.key}_title`)}
                  </h2>
                </div>

                {/* Body */}
                <div className="p-7">
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    {t(`services.${s.key}_desc`)}
                  </p>
                  <ul className="space-y-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                        {t(`services.${s.key}_${f}`)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
