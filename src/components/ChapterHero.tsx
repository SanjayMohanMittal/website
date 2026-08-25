import { useEffect, useRef, useState } from 'react'
import { SparksLayer } from '@/components/SparksLayer'

interface ChapterHeroProps {
  n: string
  label: string
  headline: string
  subtext?: string
  imageSrc: string
  imageAlt: string
  id?: string
  showScrollPrompt?: boolean
}

/**
 * Each chapter gets its own arrival: a pinned, scroll-linked zoom into
 * that chapter's own photograph, its own giant title sitting fully in
 * view above the bottom edge, as the reader scrolls to it — not four
 * chapters cycling inside one hero at the top of the page. The reveal
 * only plays out while its own 200vh runway is in view, so it happens
 * exactly where the reader reaches it.
 *
 * The marker/headline and the giant title drift at different rates from
 * the background photo (parallax), and the marker/headline recedes as
 * the scene comes forward, so scrolling reads as a camera moving through
 * depth rather than a slide changing.
 */
export function ChapterHero({ n, label, headline, subtext, imageSrc, imageAlt, id, showScrollPrompt }: ChapterHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      const t = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0
      setScroll(t)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div id={id} ref={sectionRef} className="snap-start" style={{ position: 'relative', height: '200vh' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', background: '#241f18' }}>
        <div
          aria-hidden="true"
          role="img"
          aria-label={imageAlt}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 22%',
            transform: `scale(${1 + scroll * 0.06}) translateY(${scroll * -2}%)`,
            transition: 'transform 110ms cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />

        <SparksLayer />

        {/* dark scrim top (protects the marker/headline) and bottom
            (protects the giant title against bright sky in the photo) */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(20,12,10,0.32) 0%, rgba(20,12,10,0) 24%, rgba(20,12,10,0) 62%, rgba(15,9,6,0.7) 100%)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            position: 'absolute',
            left: 32,
            top: '18%',
            maxWidth: 560,
            color: '#f0ead9',
            transform: `translateY(${scroll * -46}px)`,
            opacity: Math.max(0, 1 - scroll * 1.6),
            transition: 'transform 110ms cubic-bezier(0.22, 1, 0.36, 1), opacity 110ms cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          <div style={{ fontFamily: "'STIX Two Text', Georgia, serif", fontSize: 12, letterSpacing: '0.08em', opacity: 0.75, marginBottom: 14 }}>
            CHAPTER {n} &middot; {label}
          </div>
          <h1 style={{ fontFamily: "'STIX Two Text', serif", fontWeight: 500, fontSize: 'clamp(32px, 4.2vw, 56px)', lineHeight: 1.08, margin: 0, textWrap: 'balance' as never }}>
            {headline}
          </h1>
          {subtext && (
            <p style={{ marginTop: 18, fontSize: 16, lineHeight: 1.6, opacity: 0.82, maxWidth: '46ch' }}>
              {subtext}
            </p>
          )}
        </div>

        {/* giant grounding title, fully visible above the bottom edge.
            Identity lives in the fixed nav mark; this says "where am I"
            for this chapter specifically. */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 32,
            textAlign: 'center',
            fontFamily: "'STIX Two Text', serif",
            fontWeight: 500,
            fontSize: 'clamp(32px, 7.5vw, 118px)',
            lineHeight: 1,
            color: '#f0ead9',
            opacity: 0.92,
            letterSpacing: '0.005em',
            pointerEvents: 'none',
            transform: `translateY(${scroll * 14}px)`,
            transition: 'transform 110ms cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          {label}
        </div>

        {showScrollPrompt && (
          <div
            style={{
              position: 'absolute',
              left: 32,
              bottom: 28,
              fontFamily: "'STIX Two Text', Georgia, serif",
              fontSize: 11,
              letterSpacing: '0.1em',
              color: '#f0ead9',
              opacity: Math.max(0, 0.7 - scroll * 4),
              transition: 'opacity 110ms cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            SCROLL TO ENTER
          </div>
        )}
      </div>
    </div>
  )
}
