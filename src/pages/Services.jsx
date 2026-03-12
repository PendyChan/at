import { useTranslation } from 'react-i18next'

const serviceData = [
  { key: 'card1', icon: '⚙️', features: ['f1', 'f2', 'f3'], gradient: 'from-blue-600 to-blue-800' },
  { key: 'card2', icon: '📊', features: ['f1', 'f2', 'f3'], gradient: 'from-indigo-600 to-indigo-800' },
  { key: 'card3', icon: '🤖', features: ['f1', 'f2', 'f3'], gradient: 'from-sky-600 to-sky-800' },
  { key: 'card4', icon: '🌐', features: ['f1', 'f2', 'f3'], gradient: 'from-blue-700 to-indigo-900' },
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

      {/* Service Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-8">
            {serviceData.map((s, i) => (
              <div
                key={s.key}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                {/* Card Header */}
                <div className={`bg-gradient-to-r ${s.gradient} p-6`}>
                  <div className="text-5xl mb-3">{s.icon}</div>
                  <h2 className="text-xl font-bold text-white">{t(`services.${s.key}_title`)}</h2>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-6">{t(`services.${s.key}_desc`)}</p>
                  <ul className="space-y-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-full bg-brand-blue-pale flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-sm text-gray-700 font-medium">
                          {t(`services.${s.key}_${f}`)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-blue-pale">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-blue mb-3">
            Ready to build the next generation platform?
          </h2>
          <p className="text-gray-600 mb-6">
            Join us and be part of the global platform evolution.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-blue-light transition-colors"
          >
            {t('hero.cta_contact')} →
          </a>
        </div>
      </section>
    </div>
  )
}
