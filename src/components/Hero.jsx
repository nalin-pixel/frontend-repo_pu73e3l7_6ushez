import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/50 to-slate-950 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse" />
            Collegiate Esports • Next-gen Competitive Gaming
          </div>
          <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Where campus legends are forged
          </h1>
          <p className="mt-5 text-lg text-slate-200/90">
            Join the Esports Committee: tournaments, broadcasts, workshops and a thriving gaming culture.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#events" className="px-5 py-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-medium shadow-lg shadow-fuchsia-600/30">Explore Events</a>
            <a href="#team" className="px-5 py-3 rounded-xl border border-white/15 text-white/90 hover:bg-white/5">Meet the Team</a>
          </div>
        </motion.div>
      </div>

      {/* Ambient glows */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-fuchsia-600/30 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[20rem] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />
    </section>
  )
}
