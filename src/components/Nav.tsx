export function Nav() {
  return (
    <nav className="flex flex-wrap items-center justify-between gap-y-3 py-6 font-ui">
      <div className="font-display font-semibold text-[22px] tracking-[0.01em] text-ink">
        Sañjay Mohan Mittal <em className="italic text-brass">&middot; Manusmṛti</em>
      </div>
      <div className="flex flex-wrap basis-full sm:basis-auto gap-x-8 gap-y-2 text-sm tracking-[0.04em] uppercase">
        <a href="#about" className="text-ink-soft hover:text-brass transition-colors">About</a>
        <a href="#books" className="text-ink-soft hover:text-brass transition-colors">The Books</a>
        <a href="#why" className="text-ink-soft hover:text-brass transition-colors">For Scholars</a>
        <a href="#contact" className="text-ink-soft hover:text-brass transition-colors">Contact</a>
      </div>
    </nav>
  )
}
