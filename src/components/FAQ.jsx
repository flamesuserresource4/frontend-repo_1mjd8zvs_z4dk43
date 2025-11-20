import { useState } from 'react'

const items = [
  { q: 'How do I install the tool?', a: 'You can install it using npm or any supported package manager.' },
  { q: 'Is there a free plan?', a: 'Yes, the free plan includes basic features and limited executions.' },
  { q: 'Can I integrate this with my game?', a: 'Yes, APIs are available for all supported platforms.' },
  { q: 'What platforms are supported?', a: 'Windows, macOS, Linux, and cloud environments.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <section className="relative bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-30" style={{ background: 'radial-gradient(60% 60% at 50% 0%, rgba(255,0,0,0.2), rgba(0,0,0,0))' }} />
      <div className="relative mx-auto max-w-3xl px-6">
        <h2 className="mb-8 text-center text-3xl font-bold">Frequently asked questions</h2>
        <div className="space-y-3">
          {items.map((it, idx) => (
            <div key={it.q} className="overflow-hidden rounded-xl border border-red-500/30 bg-black/60">
              <button onClick={() => setOpen(open===idx?null:idx)} className="flex w-full items-center justify-between px-4 py-3 text-left font-medium">
                {it.q}
                <span className={`transition-transform ${open===idx?'rotate-45':''}`}>+</span>
              </button>
              <div className={`grid transition-all duration-300 ${open===idx? 'grid-rows-[1fr] opacity-100':'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden px-4 pb-4 text-red-100/80">{it.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
