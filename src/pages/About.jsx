import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()

  const cards = [
    { key: 'card1', icon: '👥', color: 'bg-blue-50 border-blue-200' },
    { key: 'card2', icon: '🔄', color: 'bg-indigo-50 border-indigo-200' },
    { key: 'card3', icon: '⭐', color: 'bg-sky-50 border-sky-200' },
  ]

  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <img src="/images/meeting.jpg" alt="About" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/85 to-brand-blue/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <p className="text-blue-300 font-semibold text-sm uppercase tracking-widest mb-2">About</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white">{t('about.title')}</h1>
          </div>
        </div>
      </div>

      {/* Subtitle */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Three Cards */}
      <section className="py-8 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6">
            {cards.map((c) => (
              <div
                key={c.key}
                className={`rounded-2xl border p-6 ${c.color} hover:shadow-lg transition-shadow`}
              >
                <div className="text-4xl mb-4">{c.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {t(`about.${c.key}_title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">{t(`about.${c.key}_desc`)}</p>
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
              <img src="/images/meeting2.jpg" alt="" className="rounded-xl object-cover h-48 w-full" />
              <img src="/images/office2.jpg" alt="" className="rounded-xl object-cover h-48 w-full" />
              <img src="/images/member1.jpg" alt="" className="rounded-xl object-cover h-48 w-full" />
              <img src="/images/member2.jpg" alt="" className="rounded-xl object-cover h-48 w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Photo */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">AscentisTech Team</h2>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src="/images/party1.jpg" alt="Team" className="w-full object-cover max-h-100" />
          </div>
        </div>
      </section>
    </div>
  )
}
