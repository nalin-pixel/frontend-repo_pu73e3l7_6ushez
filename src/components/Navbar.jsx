import { useState, useEffect } from 'react'
import { Menu, X, Gamepad2, Trophy, Users, Image as ImageIcon, CalendarDays } from 'lucide-react'

const links = [
  { href: '#events', label: 'Events', icon: CalendarDays },
  { href: '#team', label: 'Team', icon: Users },
  { href: '#gallery', label: 'Gallery', icon: ImageIcon },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${scrolled ? 'backdrop-blur-md bg-slate-900/60 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-white group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-fuchsia-600 to-blue-500 grid place-items-center shadow-lg shadow-fuchsia-600/30">
            <Gamepad2 className="w-5 h-5 text-white" />
          </div>
          <div className="font-semibold tracking-tight">
            <span className="block leading-4">E-SPORTS</span>
            <span className="text-xs text-white/60 -mt-1 block">Committee</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map(({ href, label, icon: Icon }) => (
            <a key={href} href={href} className="px-3 py-2 rounded-lg text-sm text-white/80 hover:text-white hover:bg-white/5 flex items-center gap-2 transition">
              <Icon className="w-4 h-4" /> {label}
            </a>
          ))}
          <a href="#events" className="ml-3 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white text-sm font-medium shadow-lg shadow-fuchsia-600/30">
            <Trophy className="w-4 h-4" /> Upcoming
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {links.map(({ href, label }) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg text-sm text-white/90 hover:bg-white/5 transition">
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
