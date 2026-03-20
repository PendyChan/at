import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import PageBanner from '../components/PageBanner'

// ─── Arc Lines Background ─────────────────────────────────────────────────────
function ArcLines() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const section = canvas?.parentElement
    if (!canvas || !section) return

    const ctx = canvas.getContext('2d')
    let W = (canvas.width = section.offsetWidth)
    let H = (canvas.height = section.offsetHeight)

    // Mirror Section 1 density/speed — same periods and ring count
    const emitters = [
      { xr: 0.0,  yr: 0.0,  period: 4.0, span: Math.PI * 0.55, rot0: 0.2 },
      { xr: 1.0,  yr: 1.0,  period: 5.0, span: Math.PI * 0.7,  rot0: Math.PI },
      { xr: 0.5,  yr: 0.0,  period: 3.5, span: Math.PI * 0.5,  rot0: Math.PI * 0.6 },
      { xr: 0.0,  yr: 1.0,  period: 4.6, span: Math.PI * 0.65, rot0: Math.PI * 1.4 },
      { xr: 1.0,  yr: 0.0,  period: 5.2, span: Math.PI * 0.45, rot0: Math.PI * 0.3 },
      { xr: 0.5,  yr: 0.5,  period: 6.0, span: Math.PI * 0.9,  rot0: Math.PI * 0.8 },
    ]

    let t = 0
    let rafId

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      t += 0.006

      emitters.forEach(({ xr, yr, period, span, rot0 }) => {
        const cx = xr * W
        const cy = yr * H
        const maxR = Math.hypot(W, H) * 0.55

        // 3 arcs per emitter, evenly phased — same as Section 1
        for (let k = 0; k < 3; k++) {
          const phase = ((t / period + k / 3) % 1)
          const r = phase * maxR
          const alpha = Math.sin(phase * Math.PI) * 0.35
          const rotation = rot0 + t * 0.25 + k * Math.PI * 0.7

          ctx.beginPath()
          ctx.arc(cx, cy, r, rotation, rotation + span)
          ctx.strokeStyle = `rgba(96,165,250,${alpha})`
          ctx.lineWidth = 1.5
          ctx.stroke()
        }
      })

      rafId = requestAnimationFrame(draw)
    }
    rafId = requestAnimationFrame(draw)

    const onResize = () => {
      W = canvas.width = section.offsetWidth
      H = canvas.height = section.offsetHeight
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}

// ─── Pulse Rings Background ───────────────────────────────────────────────────
function PulseRings() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const section = canvas?.parentElement
    if (!canvas || !section) return

    const ctx = canvas.getContext('2d')
    let W = (canvas.width = section.offsetWidth)
    let H = (canvas.height = section.offsetHeight)

    // Emitters — mix of corners, edges, and near-center
    const emitters = [
      { xr: 0.0,  yr: 0.0,  period: 4.0 },
      { xr: 1.0,  yr: 1.0,  period: 5.0 },
      { xr: 0.5,  yr: 0.0,  period: 3.5 },
      { xr: 0.0,  yr: 1.0,  period: 4.6 },
      { xr: 1.0,  yr: 0.0,  period: 5.2 },
      { xr: 0.5,  yr: 0.5,  period: 6.0 },
    ]

    let t = 0
    let rafId

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      t += 0.006

      emitters.forEach(({ xr, yr, period }) => {
        const cx = xr * W
        const cy = yr * H
        const maxR = Math.hypot(W, H) * 0.55

        for (let k = 0; k < 3; k++) {
          const phase = ((t / period + k / 3) % 1)
          const r = phase * maxR
          const alpha = Math.sin(phase * Math.PI) * 0.18

          ctx.beginPath()
          ctx.arc(cx, cy, r, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(7,50,144,${alpha})`
          ctx.lineWidth = 1.5
          ctx.stroke()
        }
      })

      rafId = requestAnimationFrame(draw)
    }
    rafId = requestAnimationFrame(draw)

    const onResize = () => {
      W = canvas.width = section.offsetWidth
      H = canvas.height = section.offsetHeight
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}

// ─── Award Data ───────────────────────────────────────────────────────────────
const agileItems = [
  { key: 'item1', photo: '/images/agileOrg.jpg' },
  { key: 'item2', photo: '/images/agileTeam.jpg' },
  { key: 'item3', photo: '/images/agileLeader.jpg' },
  { key: 'item4', photo: '/images/agileMissionary.jpg' },
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
      <PageBanner label="Awards" title={t('awards.title')} subtitle={t('awards.subtitle')} />

      {/* Section 1 — 台灣敏捷大賞 */}
      <section className="py-20 bg-slate-80 relative overflow-hidden">
        <PulseRings />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 h-px bg-gray-200" />
            <div className="text-center">
              <span className="text-xs font-semibold text-brand-blue uppercase tracking-widest">
                {t('awards.agile_year')}
              </span>
              <h2 className="text-2xl font-extrabold text-gray-900 mt-0.5">
                {t('awards.agile_section')}
              </h2>
            </div>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Award Cards with Photos */}
          <div className="grid sm:grid-cols-2 gap-6">
            {agileItems.map((a, i) => (
              <div
                key={a.key}
                className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Photo */}
                <div
                  className="relative h-52 overflow-hidden cursor-zoom-in"
                  onClick={() => setLightbox({ src: a.photo, label: t(`awards.${a.key}_title`) })}
                >
                  <img
                    src={a.photo}
                    alt={t(`awards.${a.key}_title`)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-brand-blue flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-white text-sm font-semibold drop-shadow">
                      {t(`awards.${a.key}_title`)}
                    </span>
                  </div>
                </div>
                {/* Desc */}
                <div className="p-5 bg-white">
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {t(`awards.${a.key}_desc`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — 對話影響力 */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #041640 0%, #051f5c 50%, #071830 100%)' }}
      >
        <ArcLines />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 h-px bg-blue-400/25" />
            <div className="text-center">
              <span className="text-xs font-semibold text-blue-300 uppercase tracking-widest">
                {t('awards.dialogue_year')}
              </span>
              <h2 className="text-2xl font-extrabold text-white mt-0.5">
                {t('awards.dialogue_section')}
              </h2>
            </div>
            <div className="flex-1 h-px bg-blue-400/25" />
          </div>

          {/* Single Gold Award with Photo */}
          <div className="max-w-lg mx-auto rounded-2xl overflow-hidden border border-blue-200 shadow-lg">
            {/* Gold top bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400" />
            {/* Photo */}
            <div
              className="relative h-64 overflow-hidden cursor-zoom-in"
              onClick={() => setLightbox({ src: '/images/dialogue.jpg', label: t('awards.item5_title') })}
            >
              <img
                src="/images/dialogue.jpg"
                alt={t('awards.item5_title')}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            {/* Content */}
            <div className="bg-white p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 border-2 border-blue-300 mb-4">
                <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">
                {t('awards.dialogue_year')}
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                {t('awards.item5_title')}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {t('awards.item5_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

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
