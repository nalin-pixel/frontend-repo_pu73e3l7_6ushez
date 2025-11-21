import { motion, useMotionValue, useTransform } from 'framer-motion'

function TiltPanel({ children }) {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rX = useTransform(my, [0, 300], [8, -8])
  const rY = useTransform(mx, [0, 600], [-8, 8])

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set(e.clientX - rect.left)
    my.set(e.clientY - rect.top)
  }

  return (
    <motion.div
      onMouseMove={onMove}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      style={{ rotateX: rX, rotateY: rY, transformStyle: 'preserve-3d' }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-800/60 p-6"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_var(--x)_var(--y),rgba(217,70,239,0.08),transparent_40%)]" style={{ '--x': mx, '--y': my }} />
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What we do</h2>
          <p className="text-slate-300/85 mt-2 max-w-2xl">We level up campus esports with tournaments, broadcasts, and player development. From LAN nights to streamed championships, we create competitive stages where new legends rise.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <TiltPanel>
            <h3 className="text-white font-semibold text-xl">Tournaments</h3>
            <p className="text-slate-300/85 mt-2 text-sm">Seasonal brackets across Valorant, CS2, Rocket League, and more — complete with referees, rulebooks, and prize pools.</p>
          </TiltPanel>
          <TiltPanel>
            <h3 className="text-white font-semibold text-xl">Broadcast + Media</h3>
            <p className="text-slate-300/85 mt-2 text-sm">Live production, caster desks, instant replays, social highlights and aftermovies with a clean, neon aesthetic.</p>
          </TiltPanel>
          <TiltPanel>
            <h3 className="text-white font-semibold text-xl">Training + Community</h3>
            <p className="text-slate-300/85 mt-2 text-sm">Bootcamps, VOD reviews, and workshops with alumni to sharpen mechanics, strategy, and leadership.</p>
          </TiltPanel>
        </div>
      </div>

      {/* Ambient neon */}
      <div className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-[50rem] h-[20rem] bg-fuchsia-600/20 blur-[120px] rounded-full" />
    </section>
  )
}
