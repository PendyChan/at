import { useTranslation } from 'react-i18next'
import PageBanner from '../components/PageBanner'

const jobs = [
  { key: 'j1',  tag: 'Frontend',    url: 'https://www.104.com.tw/job/8sewq' },
  { key: 'j2',  tag: 'Full-Stack',  url: 'https://www.104.com.tw/job/8sex6' },
  { key: 'j4',  tag: 'Full-Stack',  url: 'https://www.104.com.tw/job/8sn2d' },
  { key: 'j5',  tag: 'Full-Stack',  url: 'https://www.104.com.tw/job/8sn3e' },
  { key: 'j3',  tag: 'Backend',     url: 'https://www.104.com.tw/job/8sexf' },
  { key: 'j6',  tag: 'PM',          url: 'https://www.104.com.tw/job/8seyw' },
  { key: 'j7',  tag: 'PM',          url: 'https://www.104.com.tw/job/8v9u8' },
  { key: 'j8',  tag: 'Data',        url: 'https://www.104.com.tw/job/8x352' },
  { key: 'j9',  tag: 'Product',     url: 'https://www.104.com.tw/job/8ugv8' },
  { key: 'j10', tag: 'Product',     url: 'https://www.104.com.tw/job/8sn4l' },
]

const tagAccents = {
  Frontend:     { border: '#3b82f6', bg: '#eff6ff', text: '#2563eb' },
  'Full-Stack':  { border: '#8b5cf6', bg: '#f5f3ff', text: '#7c3aed' },
  Backend:      { border: '#10b981', bg: '#ecfdf5', text: '#059669' },
  PM:           { border: '#f59e0b', bg: '#fffbeb', text: '#d97706' },
  Data:         { border: '#14b8a6', bg: '#f0fdfa', text: '#0d9488' },
  Product:      { border: '#f43f5e', bg: '#fff1f2', text: '#e11d48' },
}

export default function Careers() {
  const { t } = useTranslation()

  return (
    <div className="pt-16">

      <PageBanner label="Careers" title={t('careers.title')} subtitle={t('careers.subtitle')} />

      {/* Who We're Looking For */}
      <section className="py-12 relative overflow-hidden">
        <img
          src="/images/game.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/70" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-brand-blue font-semibold text-sm uppercase tracking-widest mb-2">{t('careers.looking_label')}</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">{t('careers.looking_title')}</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {['trait1', 'trait2', 'trait3', 'trait4'].map((key) => (
              <div
                key={key}
                className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-xl px-6 py-5 border border-white/40"
              >
                <span className="shrink-0 w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-800 font-medium">{t(`careers.${key}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3">
            {jobs.map((job) => {
              const accent = tagAccents[job.tag] ?? { border: '#6b7280', bg: '#f9fafb', text: '#4b5563' }
              return (
                <a
                  key={job.key}
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl px-5 py-4 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200"
                  style={{ borderLeft: `4px solid ${accent.border}` }}
                >
                  {/* Tag badge */}
                  <span
                    className="shrink-0 text-xs font-bold px-2.5 py-1 rounded-full w-24 text-center"
                    style={{ backgroundColor: accent.bg, color: accent.text }}
                  >
                    {job.tag}
                  </span>

                  {/* Divider */}
                  <span className="shrink-0 w-px h-5 bg-gray-200" />

                  {/* Title */}
                  <span className="flex-1 text-sm font-semibold text-gray-800 group-hover:text-gray-950 transition-colors leading-snug">
                    {t(`careers.${job.key}`)}
                  </span>

                  {/* Location */}
                  <span className="shrink-0 hidden sm:flex items-center gap-1 text-xs text-gray-400">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {t('careers.location')}
                  </span>

                  {/* Arrow */}
                  <svg
                    className="shrink-0 w-4 h-4 text-gray-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                    style={{ color: accent.border }}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )
            })}
          </div>
        </div>
      </section>

    </div>
  )
}
