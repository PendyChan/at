import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()

  const services = [
    { icon: '⚙️', key: 'card1' },
    { icon: '📊', key: 'card2' },
    { icon: '🤖', key: 'card3' },
    { icon: '🌐', key: 'card4' },
  ]

  const awards = [
    { key: 'item1', icon: '🏆' },
    { key: 'item2', icon: '🥇' },
    { key: 'item3', icon: '🌟' },
    { key: 'item4', icon: '📣' },
    { key: 'item5', icon: '🎖️' },
  ]

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/group.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 via-brand-blue/75 to-transparent" />

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
              <p className="text-brand-blue font-semibold text-sm uppercase tracking-widest mb-2">
                {t('nav.about')}
              </p>
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
            <div className="grid grid-cols-3 gap-4">
              {[
                { title: t('about.card1_title'), desc: t('about.card1_desc'), icon: '👥' },
                { title: t('about.card2_title'), desc: t('about.card2_desc'), icon: '🔄' },
                { title: t('about.card3_title'), desc: t('about.card3_desc'), icon: '⭐' },
              ].map((c) => (
                <div
                  key={c.title}
                  className="bg-brand-blue-pale rounded-xl p-4 text-center hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl mb-2">{c.icon}</div>
                  <h3 className="text-sm font-bold text-brand-blue mb-1">{c.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">{c.desc}</p>
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
            <p className="text-brand-blue font-semibold text-sm uppercase tracking-widest mb-2">
              {t('nav.services')}
            </p>
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
                <div className="text-3xl mb-3">{s.icon}</div>
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
            <p className="text-blue-300 font-semibold text-sm uppercase tracking-widest mb-2">
              {t('nav.awards')}
            </p>
            <h2 className="text-3xl font-bold text-white mb-3">{t('awards.title')}</h2>
            <p className="text-blue-200 max-w-xl mx-auto">{t('awards.subtitle')}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {awards.map((a) => (
              <div
                key={a.key}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2"
              >
                <span>{a.icon}</span>
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
              <img src="/images/yearly-party.jpg" alt="Party" className="rounded-xl object-cover h-40 w-full" />
            </div>
            <div>
              <p className="text-brand-blue font-semibold text-sm uppercase tracking-widest mb-2">
                {t('nav.benefits')}
              </p>
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
