export default function PageBanner({ label, title, subtitle }) {
  return (
    <div className="relative bg-brand-blue-dark py-28 overflow-hidden">

      {/* Perspective grid */}
      <div className="absolute inset-0 overflow-hidden" style={{ perspective: '280px', perspectiveOrigin: '50% 20%' }}>
        <div
          className="persp-grid-plane absolute inset-0"
          style={{
            transform: 'rotateX(52deg) scaleX(2.2)',
            transformOrigin: 'center 35%',
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Horizon glow */}
      <div className="absolute inset-x-0 pointer-events-none" style={{ top: '38%' }}>
        <div className="h-px w-full bg-white/20" />
        <div className="h-24 w-full bg-white/5 blur-2xl -mt-12" />
      </div>

      {/* Top + bottom fade */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-brand-blue-dark to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-blue-dark to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {label && (
          <p className="text-blue-300 font-semibold text-sm uppercase tracking-widest mb-2">{label}</p>
        )}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">{title}</h1>
        {subtitle && (
          <p className="text-blue-200 max-w-2xl mx-auto text-lg">{subtitle}</p>
        )}
      </div>
    </div>
  )
}
