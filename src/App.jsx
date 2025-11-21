import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Showcase3D from './components/Showcase3D'
import Events from './components/Events'
import Team from './components/Team'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import CursorFX from './components/CursorFX'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative">
      <CursorFX />
      <Navbar />
      <Hero />
      <About />
      <Showcase3D />
      <Events />
      <Team />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
