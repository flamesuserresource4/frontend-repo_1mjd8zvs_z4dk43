export default function GetStarted() {
  const copy = async () => {
    try {
      await navigator.clipboard.writeText('npm install my-package')
    } catch {}
  }

  return (
    <section id="get-started" className="relative bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-40" style={{ background: 'radial-gradient(60% 60% at 50% 0%, rgba(255,0,0,0.25), rgba(0,0,0,0))' }} />
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="rounded-2xl border border-red-500/30 bg-gradient-to-br from-black/70 to-red-950/30 p-6 text-center shadow-[0_0_40px_rgba(255,0,0,0.25)]">
          <h2 className="text-3xl font-bold">Get Started in Seconds</h2>
          <p className="mt-2 text-red-100/80">Install the package and start automating right away.</p>
          <div className="mt-6 rounded-xl border border-red-500/30 bg-black/70 p-4 text-left font-mono text-sm text-red-100/90">
            <code>npm install my-package</code>
          </div>
          <button onClick={copy} className="mt-4 rounded-full bg-red-600 px-5 py-2 font-semibold text-white shadow-[0_0_20px_rgba(255,0,0,0.35)] transition-all hover:bg-red-500 hover:shadow-[0_0_30px_rgba(255,0,0,0.6)]">
            Copy
          </button>
        </div>
      </div>
    </section>
  )
}
