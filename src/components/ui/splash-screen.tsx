import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const STORAGE_KEY = 'manusmrti-splash-seen'

const COVER_DELAY = 0.5
const COVER_DURATION = 1.5
const QUOTE_DELAY = 1.5
const QUOTE_DURATION = 1.1
const LINK_DELAY = 2.3
const LINK_DURATION = 1.0
const AUTO_DISMISS_DELAY = 3600 // ms — a beat after the "Enter" link finishes fading in
const DISMISS_DURATION = 0.4

function isForced() {
  if (typeof window === 'undefined') return false
  try {
    return new URLSearchParams(window.location.search).get('splash') === '1'
  } catch {
    return false
  }
}

function shouldShow() {
  if (typeof window === 'undefined') return false
  if (isForced()) return true
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

// First-visit splash: a closed cover, hinged at the left edge, swings open
// (3D perspective + rotateY, backface hidden) to reveal a page beneath it
// carrying the book's thesis, then the whole thing dismisses to the real
// homepage. Shown once only — gated on localStorage, checked synchronously
// before first paint, so returning visits, direct links, and search
// traffic never see it. Auto-dismisses on its own timer; the "Enter the
// book" link (visible once the cover has opened) lets anyone jump straight
// to the homepage. Respects prefers-reduced-motion. Built entirely from the
// site's existing fonts and flat colour — no new assets, so it adds no
// meaningful load weight. Append ?splash=1 to the URL to force it to play
// for preview — that path never touches localStorage.
export function SplashScreen() {
  const [show] = useState(shouldShow)
  const [visible, setVisible] = useState(show)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (!show) return
    if (!isForced()) markSeen()
    const timer = setTimeout(() => setDismissed(true), AUTO_DISMISS_DELAY)
    return () => clearTimeout(timer)
  }, [show])

  if (!show || !visible) return null

  return (
    <motion.div
      className="fixed inset-0 z-[100] overflow-hidden bg-paper"
      style={{ pointerEvents: dismissed ? 'none' : 'auto' }}
      animate={{ opacity: dismissed ? 0 : 1 }}
      transition={{ duration: DISMISS_DURATION, ease: 'easeOut' }}
      onAnimationComplete={() => dismissed && setVisible(false)}
    >
      {/* Revealed page, underneath the cover */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-36"
          style={{ background: 'linear-gradient(90deg, rgba(42,33,24,0.16), rgba(42,33,24,0))' }}
        />
        <div className="pointer-events-none absolute inset-y-0 left-[88px] w-px bg-brass/35 sm:left-[138px]" />

        <motion.p
          className="mb-10 max-w-[32ch] font-display text-2xl italic leading-snug text-ink sm:text-3xl"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: QUOTE_DURATION, delay: QUOTE_DELAY, ease: 'easeOut' }}
        >
          &ldquo;I spent years separating what Manu wrote from what was added later. This is what remained.&rdquo;
        </motion.p>

        <motion.button
          type="button"
          onClick={() => setDismissed(true)}
          className="border-b border-oxide pb-1 font-body text-[17px] italic tracking-[0.02em] text-oxide transition-colors hover:text-oxide-dark focus-visible:outline-2 focus-visible:outline-oxide"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: LINK_DURATION, delay: LINK_DELAY, ease: 'easeOut' }}
        >
          Enter the book &rarr;
        </motion.button>
      </div>

      {/* Cover, hinged at the left edge, swings open */}
      <div className="absolute inset-0" style={{ perspective: 2600 }}>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transformOrigin: 'left center',
            backfaceVisibility: 'hidden',
            background: 'linear-gradient(135deg, #2A2118, #3B2C1D 60%, #2A2118)',
            boxShadow: '60px 0 100px rgba(0,0,0,0.45)',
          }}
          initial={{ rotateY: 0 }}
          animate={{ rotateY: -108 }}
          transition={{ duration: COVER_DURATION, delay: COVER_DELAY, ease: [0.6, 0, 0.35, 1] }}
        >
          <div className="text-center text-paper">
            <div className="mb-4 text-3xl text-brass-light opacity-90">ॐ</div>
            <h1 className="font-display text-4xl font-semibold tracking-[0.01em] sm:text-5xl">Manusmṛti</h1>
            <p className="mt-2.5 font-body text-sm uppercase tracking-[0.08em] text-brass-light">
              Sañjay Mohan Mittal
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
