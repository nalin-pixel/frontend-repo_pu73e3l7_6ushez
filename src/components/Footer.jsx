export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="text-white font-semibold">Esports Committee</h4>
          <p className="text-slate-300/80 mt-2 text-sm">Building an inclusive, competitive gaming culture on campus.</p>
        </div>
        <div>
          <h5 className="text-white/90 font-medium">Quick Links</h5>
          <ul className="mt-2 space-y-1 text-slate-300/80 text-sm">
            <li><a href="#events" className="hover:text-white">Events</a></li>
            <li><a href="#team" className="hover:text-white">Team</a></li>
            <li><a href="#gallery" className="hover:text-white">Gallery</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white/90 font-medium">Contact</h5>
          <p className="text-slate-300/80 mt-2 text-sm">Email: esports@college.edu</p>
          <p className="text-slate-300/80 text-sm">Discord: discord.gg/college-esports</p>
        </div>
      </div>
      <div className="px-4 sm:px-6 lg:px-8 py-4 border-t border-white/10 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Esports Committee. All rights reserved.
      </div>
    </footer>
  )
}
