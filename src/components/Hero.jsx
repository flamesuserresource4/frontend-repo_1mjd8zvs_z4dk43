import Spline from '@splinetool/react-spline'
import { ArrowRight, PlayCircle, ShieldCheck, CreditCard, Github } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[86vh] w-full overflow-hidden bg-black text-white">
      {/* Ambient radial glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(255,0,0,0.25) 0%, rgba(0,0,0,0) 60%)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-64 opacity-40" style={{ background: 'radial-gradient(50% 60% at 50% 100%, rgba(255,0,0,0.35) 0%, rgba(0,0,0,0) 70%)' }} />
      </div>

      {/* Massive vertical red light beam */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-red-500/60 to-transparent blur-[2px]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-[180px] -translate-x-1/2 bg-red-500/10 blur-3xl" />

      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-black/40 px-3 py-1 text-xs text-red-300/90 backdrop-blur">
          <ShieldCheck className="h-4 w-4" /> Secure. Fast. Flexible.
        </div>

        <h1 className="mt-6 bg-gradient-to-b from-white to-red-200/90 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl">
          Automate everything without limits.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-red-100/80 sm:text-lg">
          Create workflows, connect tools, and control your system effortlessly.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#get-started" className="group inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 font-semibold text-white shadow-[0_0_25px_rgba(255,0,0,0.35)] transition-all hover:bg-red-500 hover:shadow-[0_0_35px_rgba(255,0,0,0.6)]">
            Get Started <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="#how-it-works" className="inline-flex items-center gap-2 rounded-full border border-red-500/60 bg-black/50 px-6 py-3 font-semibold text-white backdrop-blur transition-colors hover:border-red-400">
            <PlayCircle className="h-5 w-5" /> How It Works
          </a>
        </div>

        {/* Floating UI mockup */}
        <div className="mt-14 w-full max-w-4xl rounded-2xl border border-red-500/20 bg-black/60 p-4 shadow-[0_0_40px_rgba(255,0,0,0.2)] backdrop-blur">
          <div className="flex">
            {/* Sidebar */}
            <div className="w-40 flex-shrink-0 space-y-2 border-r border-red-500/10 pr-3">
              {["Dashboard","Workflows","Triggers","Logs","Settings"].map((item, i) => (
                <div key={item} className={`rounded-lg px-3 py-2 text-sm ${i===1 ? 'bg-red-600/20 text-red-200 shadow-[inset_0_0_12px_rgba(255,0,0,0.25)]' : 'text-red-100/70 hover:bg-red-600/10'}`}>{item}</div>
              ))}
            </div>
            {/* Center AI assistant */}
            <div className="flex-1 p-4">
              <div className="mb-3 text-left text-sm text-red-200/90">AI Assistant</div>
              <div className="h-40 rounded-xl border border-red-500/20 bg-gradient-to-br from-black/60 to-red-950/30 p-4 text-left text-red-100/90 shadow-inner shadow-red-950/40">
                <p>Ask me to connect apps, build a workflow, or run an automation.</p>
              </div>
              {/* Bottom chat input */}
              <div className="mt-3 flex items-center gap-2 rounded-xl border border-red-500/30 bg-black/60 p-2">
                <input className="flex-1 bg-transparent px-3 py-2 text-sm text-white placeholder-red-200/50 outline-none" placeholder="Type a command..." />
                <button className="rounded-lg bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-[0_0_15px_rgba(255,0,0,0.35)] transition-all hover:bg-red-500 hover:shadow-[0_0_25px_rgba(255,0,0,0.55)]">
                  Send
                </button>
              </div>
            </div>
          </div>
          {/* Trust icons */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-red-200/80">
            <div className="inline-flex items-center gap-2"><CreditCard className="h-4 w-4" /> no credit card required</div>
            <div className="inline-flex items-center gap-2"><Github className="h-4 w-4" /> open source</div>
            <div className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> free plan</div>
          </div>
        </div>
      </div>
    </section>
  )
}
