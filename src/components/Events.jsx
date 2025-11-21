import { useEffect, useState } from 'react'
import { CalendarDays, MapPin, Gamepad2, ArrowUpRight } from 'lucide-react'

const api = import.meta.env.VITE_BACKEND_URL || ''

export default function Events() {
  const [upcoming, setUpcoming] = useState([])
  const [past, setPast] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const u = await fetch(`${api}/api/events?status=upcoming`).then(r => r.json())
        const p = await fetch(`${api}/api/events?status=past`).then(r => r.json())
        setUpcoming(u)
        setPast(p)
      } catch (e) {
        console.error(e)
      }
    }
    fetchData()
  }, [])

  return (
    <section id="events" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Events</h2>
            <p className="text-slate-300/80 mt-2">Upcoming tournaments and our recent highlights</p>
          </div>
          <a href="#gallery" className="hidden sm:inline-flex items-center gap-2 text-fuchsia-300/90 hover:text-white">
            Browse Gallery <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Upcoming */}
        <div className="grid md:grid-cols-2 gap-6">
          {upcoming.map((e) => (
            <article key={e.id} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              {e.cover_image && (
                <img src={e.cover_image} alt={e.title} className="h-56 w-full object-cover opacity-80 group-hover:opacity-100 transition" />
              )}
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-slate-300/80">
                  <span className="inline-flex items-center gap-1"><CalendarDays className="w-4 h-4" /> {new Date(e.date).toLocaleString()}</span>
                  <span className="inline-flex items-center gap-1"><Gamepad2 className="w-4 h-4" /> {e.game}</span>
                  <span className="inline-flex items-center gap-1"><MapPin className="w-4 h-4" /> {e.location}</span>
                </div>
                <h3 className="mt-3 text-xl font-semibold text-white">{e.title}</h3>
                <p className="mt-1 text-slate-300/80">{e.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Past */}
        <div className="mt-14">
          <h3 className="text-xl font-semibold text-white mb-4">Past events</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {past.map((e) => (
              <article key={e.id} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                {e.cover_image && (
                  <img src={e.cover_image} alt={e.title} className="h-40 w-full object-cover opacity-80" />
                )}
                <div className="p-4">
                  <div className="flex items-center gap-3 text-xs text-slate-300/80">
                    <span className="inline-flex items-center gap-1"><CalendarDays className="w-4 h-4" /> {new Date(e.date).toLocaleDateString()}</span>
                    <span className="inline-flex items-center gap-1"><Gamepad2 className="w-4 h-4" /> {e.game}</span>
                  </div>
                  <h4 className="mt-2 font-semibold text-white">{e.title}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
