import { useEffect, useState } from 'react'
import { Twitter, Instagram, MessageCircle } from 'lucide-react'

const api = import.meta.env.VITE_BACKEND_URL || ''

export default function Team() {
  const [team, setTeam] = useState([])

  useEffect(() => {
    fetch(`${api}/api/team`).then(r => r.json()).then(setTeam).catch(console.error)
  }, [])

  return (
    <section id="team" className="relative py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">The Committee</h2>
        <p className="text-slate-300/80 mt-2 mb-8">Organizers, broadcasters and community builders</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((m) => (
            <article key={m.id} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-4">
                <img src={m.avatar_url} alt={m.name} className="w-16 h-16 rounded-xl object-cover" />
                <div>
                  <h3 className="text-white font-semibold leading-tight">{m.name}</h3>
                  <p className="text-fuchsia-300/90 text-sm">{m.role}</p>
                </div>
              </div>
              <p className="text-slate-300/80 mt-4 text-sm">{m.bio}</p>
              <div className="mt-4 flex items-center gap-3 text-slate-300/80">
                {m.twitter && <a className="hover:text-white" href={m.twitter}><Twitter className="w-5 h-5" /></a>}
                {m.instagram && <a className="hover:text-white" href={m.instagram}><Instagram className="w-5 h-5" /></a>}
                {m.discord && <span className="inline-flex items-center gap-1"><MessageCircle className="w-5 h-5" /> {m.discord}</span>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
