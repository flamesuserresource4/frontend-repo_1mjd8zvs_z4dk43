export default function Games() {
  const cards = [
    { title: 'Game Title 1' },
    { title: 'Game Title 2' },
    { title: 'Game Title 3' },
  ]
  return (
    <section className="relative bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-30" style={{ background: 'radial-gradient(60% 60% at 50% 0%, rgba(255,0,0,0.2), rgba(0,0,0,0))' }} />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">Supported games</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="group relative overflow-hidden rounded-2xl border border-red-500/20 shadow-[0_0_25px_rgba(255,0,0,0.15)]">
              {/* Image substitute: neon gradient tile */}
              <div className="h-56 w-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,0,0,0.5),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,60,60,0.35),transparent_45%),linear-gradient(135deg,#0a0a0a,#1a0000)] transition-transform duration-500 group-hover:scale-[1.03]" />
              <div className="pointer-events-none absolute bottom-0 left-0 m-4 rounded-lg bg-black/60 px-3 py-1 text-sm text-red-100/90 backdrop-blur">
                {c.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
