import Hero from './components/Hero'
import Features from './components/Features'
import Games from './components/Games'
import GetStarted from './components/GetStarted'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Features />
      <Games />
      <GetStarted />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
