import { Boxes, Blocks, Rocket, Zap, Server } from 'lucide-react'

const features = [
  {
    title: 'Connect your tools',
    description: 'Link apps and APIs instantly.',
    icon: Boxes,
  },
  {
    title: 'Build visually',
    description: 'Drag-and-drop workflow builder.',
    icon: Blocks,
  },
  {
    title: 'Run and scale',
    description: 'Automations that grow with you.',
    icon: Rocket,
  },
  {
    title: 'Smart triggers',
    description: 'Execute tasks automatically.',
    icon: Zap,
  },
  {
    title: 'Self-host or Cloud',
    description: 'Run on your own server or ours.',
    icon: Server,
  },
]

export default function Features() {
  return (
    <section id="how-it-works" className="relative bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-40" style={{ background: 'radial-gradient(60% 60% at 50% 0%, rgba(255,0,0,0.25), rgba(0,0,0,0))' }} />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">Powerful features</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <div key={title} className="group rounded-2xl border border-red-500/20 bg-gradient-to-br from-black/60 to-red-950/20 p-6 shadow-[0_0_25px_rgba(255,0,0,0.15)] transition-transform hover:-translate-y-0.5">
              <div className="mb-3 inline-flex rounded-xl border border-red-500/30 bg-black/60 p-2 text-red-200 shadow-[inset_0_0_12px_rgba(255,0,0,0.2)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-red-100/80">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
