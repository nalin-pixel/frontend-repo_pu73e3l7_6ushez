import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Events from './components/Events'
import Team from './components/Team'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <Events />
      <Team />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
