import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageBanner from '../components/PageBanner'

gsap.registerPlugin(ScrollTrigger)

// ─── Tile Grid Background ───────────────────────────────────────────────────
function TileGrid() {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    const section = container?.parentElement
    if (!container || !section) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.innerWidth < 640) return

    const TILE = 42, GAP = 8, STEP = TILE + GAP
    const cols = Math.ceil(section.offsetWidth / STEP) + 1
    const rows = Math.ceil(section.offsetHeight / STEP) + 1

    const items = []
    const frag = document.createDocumentFragment()
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const el = document.createElement('div')
        el.style.cssText = [
          'position:absolute',
          `width:${TILE}px`,
          `height:${TILE}px`,
          `left:${c * STEP}px`,
          `top:${r * STEP}px`,
          'border:1px solid rgba(7,50,144,0.07)',
          'border-radius:7px',
          'background:linear-gradient(135deg,rgba(255,255,255,0.95),rgba(232,238,248,0.7))',
          'box-shadow:0 1px 3px rgba(7,50,144,0.05)',
          'will-change:transform',
        ].join(';')
        frag.appendChild(el)
        items.push({ el, c, r, rx: 0, ry: 0, trx: 0, try_: 0 })
      }
    }
    container.appendChild(frag)

    let mouse = null
    let rafId
    let t = 0

    const onMove = (e) => {
      const rect = section.getBoundingClientRect()
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const onLeave = () => { mouse = null }

    const tick = () => {
      t += 0.012
      items.forEach((item) => {
        const cx = item.c * STEP + TILE / 2
        const cy = item.r * STEP + TILE / 2
        let trx, try_

        if (mouse) {
          const dx = cx - mouse.x
          const dy = cy - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const MAX = 220
          if (dist < MAX) {
            const f = Math.pow(1 - dist / MAX, 1.5) * 20
            trx = (-dy / MAX) * f
            try_ = (dx / MAX) * f
          } else {
            trx = Math.sin(t + item.c * 0.22 + item.r * 0.16) * 1.5
            try_ = Math.cos(t * 0.8 + item.c * 0.18 + item.r * 0.22) * 1.5
          }
        } else {
          trx = Math.sin(t + item.c * 0.22 + item.r * 0.16) * 1.5
          try_ = Math.cos(t * 0.8 + item.c * 0.18 + item.r * 0.22) * 1.5
        }

        const lerp = mouse ? 0.14 : 0.04
        item.rx += (trx - item.rx) * lerp
        item.ry += (try_ - item.ry) * lerp
        item.el.style.transform = `rotateX(${item.rx.toFixed(2)}deg) rotateY(${item.ry.toFixed(2)}deg)`
      })
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)

    section.addEventListener('mousemove', onMove, { passive: true })
    section.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(rafId)
      section.removeEventListener('mousemove', onMove)
      section.removeEventListener('mouseleave', onLeave)
      while (container.firstChild) container.removeChild(container.firstChild)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ perspective: '500px', perspectiveOrigin: '50% 50%' }}
    />
  )
}

// ─── Service Data ────────────────────────────────────────────────────────────
const serviceData = [
  {
    key: 'card1',
    features: ['f1', 'f2', 'f3'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path strokeLinecap="round" d="M8 21h8M12 17v4" />
        <path strokeLinecap="round" d="M7 8h1m3 0h6M7 11h5" />
      </svg>
    ),
  },
  {
    key: 'card2',
    features: ['f1', 'f2', 'f3'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: 'card3',
    features: ['f1', 'f2', 'f3'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l1.5 1.5L21 6" />
      </svg>
    ),
  },
  {
    key: 'card4',
    features: ['f1', 'f2', 'f3'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
  },
]

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Services() {
  const { t } = useTranslation()
  const pageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('[data-s="label"]',    { opacity: 0, y: -16, duration: 0.5 })
        .from('[data-s="title"]',    { opacity: 0, y: 50,  duration: 0.7 }, '-=0.25')
        .from('[data-s="subtitle"]', { opacity: 0, y: 30,  duration: 0.6 }, '-=0.4')

      // Cards: materialize fade-up
      gsap.from('[data-s="card"]', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: { amount: 0.35, from: 'start' },
        ease: 'power3.out',
        clearProps: 'all',
        scrollTrigger: {
          trigger: '[data-s="grid"]',
          start: 'top 80%',
          once: true,
          invalidateOnRefresh: true,
        },
      })

      // Features: scan-in from left, very tight stagger
      gsap.from('[data-s="feat"]', {
        opacity: 0,
        x: -12,
        duration: 0.35,
        stagger: 0.05,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '[data-s="grid"]',
          start: 'top 62%',
          once: true,
          invalidateOnRefresh: true,
        },
      })

      // Refresh ScrollTrigger after all assets load (fixes production layout timing)
      window.addEventListener('load', () => ScrollTrigger.refresh())
    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef} className="pt-16">
      <PageBanner label="Services" title={t('services.title')} subtitle={t('services.subtitle')} />

      {/* Service Cards Grid */}
      <section className="py-20 bg-white relative overflow-hidden">
        <TileGrid />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-s="grid" className="grid sm:grid-cols-2 gap-6">
            {serviceData.map((s) => (
              // Outer wrapper: GSAP target + hover lift + outer glow
              <div
                key={s.key}
                data-s="card"
                className="relative group transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Outer hover glow (outside overflow-hidden so it's not clipped) */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: '0 16px 48px rgba(7,50,144,0.4)' }}
                />

                {/* Inner card: overflow-hidden clips shimmer & corner glow */}
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    background: 'linear-gradient(150deg, #0d1e45 0%, #051f5c 55%, #08163a 100%)',
                    border: '1px solid rgba(59,130,246,0.2)',
                    boxShadow: '0 4px 24px rgba(7,50,144,0.15), inset 0 1px 0 rgba(255,255,255,0.04)',
                  }}
                >
                  {/* Top shimmer line */}
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

                  {/* Corner radial glow */}
                  <div
                    className="absolute top-0 left-0 w-32 h-32 pointer-events-none"
                    style={{ background: 'radial-gradient(circle at 0% 0%, rgba(59,130,246,0.14), transparent 70%)' }}
                  />

                  {/* Inset border brightens on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ boxShadow: 'inset 0 0 0 1px rgba(59,130,246,0.5)' }}
                  />

                  {/* Content */}
                  <div className="relative z-10 p-7">
                    {/* Icon */}
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-blue-300 mb-5 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: 'rgba(7,50,144,0.55)',
                        border: '1px solid rgba(59,130,246,0.35)',
                        boxShadow: '0 0 14px rgba(59,130,246,0.2)',
                      }}
                    >
                      {s.icon}
                    </div>

                    {/* Title */}
                    <h2 className="text-lg font-bold text-white mb-3 leading-snug">
                      {t(`services.${s.key}_title`)}
                    </h2>

                    {/* Separator */}
                    <div className="h-px bg-gradient-to-r from-blue-500/40 via-blue-400/15 to-transparent mb-4" />

                    {/* Description */}
                    <p className="text-blue-100 text-sm leading-relaxed mb-5 opacity-60">
                      {t(`services.${s.key}_desc`)}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2.5">
                      {s.features.map((f) => (
                        <li data-s="feat" key={f} className="flex items-center gap-3 text-sm text-blue-100 opacity-75">
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-blue-400"
                            style={{ boxShadow: '0 0 5px rgba(96,165,250,0.7)' }}
                          />
                          {t(`services.${s.key}_${f}`)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
