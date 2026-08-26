import { useEffect, useState } from 'react'

const CHAPTERS = [
  { n: '01', label: 'THE RECORD', href: '#record' },
  { n: '02', label: 'THE TRILOGY', href: '#trilogy' },
  { n: '03', label: 'THE FACETS', href: '#facets' },
  { n: '04', label: 'CONTACT', href: '#contact' },
]

/**
 * Fixed across the whole page now that each chapter gets its own arrival
 * moment instead of all four living inside one mega-hero. Tracks which
 * section is centered in the viewport via IntersectionObserver so the
 * active link still reads correctly as the reader moves between chapters.
 */
export function SiteNav() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const sections = CHAPTERS.map((c) => document.getElementById(c.href.slice(1))).filter(
      (el): el is HTMLElement => el !== null,
    )
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const i = sections.indexOf(entry.target as HTMLElement)
            if (i !== -1) setActive(i)
          }
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      id="top"
      aria-label="Chapter navigation"
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 py-3.5 sm:px-8 sm:py-[18px]"
      style={{
        fontFamily: "'STIX Two Text', Georgia, serif",
        color: '#f0ead9',
        background: 'rgba(24,16,9,0.6)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(240,234,217,0.08)',
      }}
    >
      <a href="#top" className="flex shrink-0 items-center gap-2.5 sm:gap-[10px]">
        <img src="/brand/smm-icon-on-dark.svg" alt="" aria-hidden="true" className="h-8 w-8 sm:h-10 sm:w-10" />
        <div className="flex flex-col">
          <img src="/brand/smm-wordmark-on-dark.svg" alt="Sañjay Mohan Mittal" className="h-5 sm:h-[27px]" />
          <span className="hidden font-data text-[10px] tracking-[0.03em] text-paper/55 sm:block">
            Author of the Manusmṛti
          </span>
        </div>
      </a>
      <div className="flex gap-4 text-xs tracking-[0.06em] whitespace-nowrap sm:gap-7">
        {CHAPTERS.map((c, i) => (
          <a
            key={c.n}
            href={c.href}
            aria-current={i === active ? 'true' : undefined}
            aria-label={`${c.label}, chapter ${c.n}`}
            style={{ color: 'inherit', textDecoration: 'none', opacity: i === active ? 1 : 0.45, transition: 'opacity 300ms ease-out' }}
          >
            <span className="sm:hidden" aria-hidden="true">{c.n}</span>
            <span className="hidden sm:inline">{c.label}</span>
          </a>
        ))}
      </div>
    </nav>
  )
}
