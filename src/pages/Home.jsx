import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()

  const services = [
    { key: 'card1' },
    { key: 'card2' },
    { key: 'card3' },
    { key: 'card4' },
  ]

  const awards = [
    { key: 'item1' },
    { key: 'item2' },
    { key: 'item3' },
    { key: 'item4' },
    { key: 'item5' },
  ]

  const aboutCards = [
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
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/group.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 via-brand-blue/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-300 animate-pulse" />
              <span className="text-blue-100 text-sm font-medium">AscentisTech</span>
            </div>

            <h1 className="text-5xl font-extrabold text-white leading-tight mb-4">
              {t('hero.line1')}
              <br />
              <span className="text-blue-300">{t('hero.line2')}</span>
            </h1>

            <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-lg">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="px-6 py-3 bg-white text-brand-blue font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                {t('hero.cta_explore')} →
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                {t('hero.cta_contact')}
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="grid grid-cols-3 divide-x divide-white/20">
              {[
                { num: '65+', label: t('hero.stat_experts') },
                { num: '5', label: t('hero.stat_awards') },
                { num: '24/7', label: t('hero.stat_support') },
              ].map((s) => (
                <div key={s.label} className="text-center px-4">
                  <div className="text-2xl font-extrabold text-white">{s.num}</div>
                  <div className="text-xs text-blue-200 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('about.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">{t('about.mission_desc')}</p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all"
              >
                {t('nav.about')} <span>→</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {aboutCards.map((c) => (
                <div
                  key={c.key}
                  className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-blue flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {c.icon}
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2">{t(`about.${c.key}_title`)}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{t(`about.${c.key}_desc`)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {t('services.title')}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">{t('services.subtitle')}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {services.map((s) => (
              <div
                key={s.key}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 border border-gray-100"
              >
                <h3 className="font-bold text-gray-900 text-base mb-2">
                  {t(`services.${s.key}_title`)}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                  {t(`services.${s.key}_desc`)}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-blue-light transition-colors"
            >
              {t('hero.cta_explore')} →
            </Link>
          </div>
        </div>
      </section>

      {/* Awards Preview */}
      <section className="py-20 bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">{t('awards.title')}</h2>
            <p className="text-blue-200 max-w-xl mx-auto">{t('awards.subtitle')}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {awards.map((a) => (
              <div
                key={a.key}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2"
              >
                <span className="text-white text-sm font-medium">{t(`awards.${a.key}_title`)}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/awards"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-blue font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              {t('nav.awards')} →
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-3">
              <img src="/images/office1.jpg" alt="Office" className="rounded-xl object-cover h-40 w-full" />
              <img src="/images/snack.jpg" alt="Snack" className="rounded-xl object-cover h-40 w-full" />
              <img src="/images/massage.jpg" alt="Massage" className="rounded-xl object-cover h-40 w-full" />
              <img src="/images/yearlyParty.jpg" alt="Party" className="rounded-xl object-cover h-40 w-full" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('benefits.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">{t('benefits.subtitle')}</p>
              <Link
                to="/benefits"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-blue-light transition-colors"
              >
                {t('nav.benefits')} →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
