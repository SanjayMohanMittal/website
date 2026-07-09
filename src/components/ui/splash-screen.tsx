import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const STORAGE_KEY = 'manusmrti-splash-seen'
const AUTO_PART_DELAY = 2000
const PART_DURATION = 0.8

function shouldShow() {
  if (typeof window === 'undefined') return false
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  try {
    return window.localStorage.getItem(STORAGE_KEY) !== '1'
  } catch {
    return false
  }
}

function markSeen() {
  try {
    window.localStorage.setItem(STORAGE_KEY, '1')
  } catch {
    // localStorage unavailable (private browsing, etc.) — nothing to persist to
  }
}

// SVG turbulence filter for a faint parchment grain, referenced by both
// page panels. Inline and tiny — no image request, so it costs nothing to
// load.
const grainFilter = (
  <svg className="absolute h-0 w-0" aria-hidden="true">
    <filter id="splash-grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" result="noise" />
      <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.05 0" />
    </filter>
  </svg>
)

// First-visit splash: two parchment pages meet at a center seam with one
// line of the book's thesis across them, then part like a manuscript
// opening to reveal the homepage. Shown once only — gated on localStorage,
// so direct links, search visitors, and repeat visits skip straight to the
// homepage with no flash of the splash (the "should show" check runs
// synchronously in the initial state, before first paint). Auto-parts after
// ~2s; the "Enter the book" link lets anyone skip immediately. Built from
// flat colour, brass rules, and an inline SVG grain filter — no new image
// assets, so it adds no meaningful load weight.
export function SplashScreen() {
  const [show] = useState(shouldShow)
  const [visible, setVisible] = useState(show)
  const [parting, setParting] = useState(false)

  useEffect(() => {
    if (!show) return
    markSeen()
    const timer = setTimeout(() => setParting(true), AUTO_PART_DELAY)
    return () => clearTimeout(timer)
  }, [show])

  if (!show) return null

  const pageTransition = { duration: PART_DURATION, ease: [0.65, 0, 0.35, 1] as const }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden bg-paper"
          style={{ pointerEvents: parting ? 'none' : 'auto' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {grainFilter}

          {/* Left page */}
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 border-r border-brass/30 bg-paper-deep"
            initial={{ x: 0 }}
            animate={{ x: parting ? '-100%' : 0 }}
            transition={pageTransition}
            onAnimationComplete={() => parting && setVisible(false)}
          >
            <div className="absolute inset-0 opacity-70" style={{ filter: 'url(#splash-grain)' }} />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink/15 to-transparent" />
            <div className="absolute right-6 top-1/2 h-2/3 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-brass/50 to-transparent" />
          </motion.div>

          {/* Right page */}
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 border-l border-brass/30 bg-paper-deep"
            initial={{ x: 0 }}
            animate={{ x: parting ? '100%' : 0 }}
            transition={pageTransition}
          >
            <div className="absolute inset-0 opacity-70" style={{ filter: 'url(#splash-grain)' }} />
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink/15 to-transparent" />
            <div className="absolute left-6 top-1/2 h-2/3 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-brass/50 to-transparent" />
          </motion.div>

          {/* Quote, centered across the seam */}
          <motion.div
            className="pointer-events-none absolute inset-0 flex items-center justify-center px-8"
            initial={{ opacity: 1 }}
            animate={{ opacity: parting ? 0 : 1 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <p className="max-w-xl text-center font-display text-xl italic leading-snug text-ink sm:text-2xl">
              &ldquo;I spent years separating what Manu wrote from what was added later. This is what remained.&rdquo;
            </p>
          </motion.div>

          {/* Skip option */}
          {!parting && (
            <motion.button
              type="button"
              onClick={() => setParting(true)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 font-ui text-[13px] uppercase tracking-[0.16em] text-ink-soft transition-colors hover:text-oxide focus-visible:outline-2 focus-visible:outline-oxide"
            >
              Enter the book &rarr;
            </motion.button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
