import Spline from '@splinetool/react-spline'
import { motion, useMotionValue, useTransform } from 'framer-motion'

export default function Hero() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useTransform(my, [0, window.innerHeight], [12, -12])
  const rotateY = useTransform(mx, [0, window.innerWidth], [-12, 12])

  const handleMove = (e) => {
    mx.set(e.clientX)
    my.set(e.clientY)
  }

  return (
    <section id="top" onMouseMove={handleMove} className="relative min-h-[100vh] overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/50 to-slate-950 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <motion.div style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse" />
            Collegiate Esports • Next-gen Competitive Gaming
          </div>
          <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">
            Forge your legacy in the arena
          </h1>
          <p className="mt-5 text-lg text-slate-200/90 max-w-2xl">
            Tournaments, broadcasts, bootcamps and a thriving gaming culture. Step into a neon-fueled world of skill, teamwork and hype.
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
