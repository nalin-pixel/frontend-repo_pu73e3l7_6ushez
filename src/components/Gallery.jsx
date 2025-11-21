import { useEffect, useState } from 'react'

const api = import.meta.env.VITE_BACKEND_URL || ''

export default function Gallery() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`${api}/api/gallery`).then(r => r.json()).then(setItems).catch(console.error)
  }, [])

  return (
    <section id="gallery" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Photo Gallery</h2>
            <p className="text-slate-300/80 mt-2">Moments that defined our matches</p>
          </div>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]"><div className="grid gap-4">
          {items.map((g) => (
            <figure key={g.id} className="break-inside-avoid rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <img src={g.url} alt={g.caption || 'gallery'} className="w-full object-cover" />
              {g.caption && <figcaption className="p-3 text-sm text-slate-300/80">{g.caption}</figcaption>}
            </figure>
          ))}
        </div></div>
      </div>
    </section>
  )
}
