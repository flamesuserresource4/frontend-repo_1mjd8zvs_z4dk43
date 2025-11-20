import { Mail, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-black py-14 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-30" style={{ background: 'radial-gradient(60% 60% at 50% 0%, rgba(255,0,0,0.2), rgba(0,0,0,0))' }} />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="text-2xl font-extrabold tracking-tight text-red-200 drop-shadow-[0_0_25px_rgba(255,0,0,0.35)]">YourCompany</div>
          <nav className="flex flex-wrap items-center justify-center gap-5 text-sm text-red-100/80">
            {['Product','Pricing','Docs','Templates','Community','Contact'].map((l)=> (
              <a href="#" key={l} className="hover:text-white">{l}</a>
            ))}
          </nav>
          <div className="flex items-center gap-4 text-red-100/80">
            <a href="#" className="rounded-full border border-red-500/40 p-2 hover:bg-red-500/10"><Mail className="h-4 w-4"/></a>
            <a href="#" className="rounded-full border border-red-500/40 p-2 hover:bg-red-500/10"><MessageCircle className="h-4 w-4"/></a>
          </div>
          <p className="text-xs text-red-100/60">© YourCompany. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
