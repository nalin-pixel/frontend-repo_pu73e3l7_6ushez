import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// A global cursor-follow glow for extra esports neon vibes
export default function CursorFX() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 120, damping: 20, mass: 0.2 })
  const sy = useSpring(y, { stiffness: 120, damping: 20, mass: 0.2 })

  useEffect(() => {
    const handle = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('pointermove', handle)
    return () => window.removeEventListener('pointermove', handle)
  }, [x, y])

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-10"
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ left: sx, top: sy }}
      >
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-fuchsia-500/20 blur-3xl mix-blend-screen" />
      </motion.div>
    </motion.div>
  )
}
