import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const items = [
  {
    title: 'Valorant Ops',
    tag: 'Tactical FPS',
    scene: 'https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode',
    glow: 'from-fuchsia-600/30',
  },
  {
    title: 'Rocket League Drive',
    tag: 'Arcade Sports',
    scene: 'https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode',
    glow: 'from-cyan-400/30',
  },
  {
    title: 'CS2 Arena',
    tag: 'Competitive FPS',
    scene: 'https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode',
    glow: 'from-indigo-500/30',
  },
]

export default function Showcase3D() {
  return (
    <section id="showcase" className="relative py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">3D Showcase</h2>
            <p className="text-slate-300/85 mt-2">Interactive scenes that set the tone — hover and explore</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 180, damping: 20 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur"
            >
              <div className="relative h-64">
                <Spline scene={it.scene} style={{ width: '100%', height: '100%' }} />
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${it.glow} to-transparent opacity-20`} />
              </div>
              <div className="p-5">
                <span className="text-xs text-slate-300/80">{it.tag}</span>
                <h3 className="text-white font-semibold text-lg mt-1">{it.title}</h3>
                <p className="text-slate-300/80 text-sm mt-1">A stylized, cyberpunk scene to spotlight the game vibe.</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-24 right-0 w-[40rem] h-[20rem] bg-fuchsia-600/20 blur-[120px] rounded-full" />
    </section>
  )
}
