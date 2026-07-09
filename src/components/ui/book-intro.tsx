import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// Page-load intro: the camera eases in on the closed cover, then it swings
// open on its spine (3D perspective + rotateY) to reveal the landing page
// underneath. The cover's own opacity fades out during the last part of the
// swing so it never sits as a hard, static sliver, and the overlay itself
// only fades once the swing has actually finished (onAnimationComplete, not
// a guessed wall-clock delay), so the reveal never overlaps a still-
// recognizable cover. Kept to a modest scale on purpose — an oversized
// portrait filling the whole screen read as aggressive rather than elegant.
// Skips itself entirely for prefers-reduced-motion.
export function BookIntro() {
  const [visible, setVisible] = useState(true)
  const [skip, setSkip] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mql.matches) {
      setSkip(true)
      setVisible(false)
    }
  }, [])

  if (skip) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-paper"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1.7 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="[perspective:1600px]" style={{ width: 220, aspectRatio: '2 / 3' }}>
              <motion.div
                className="relative h-full w-full [transform-style:preserve-3d]"
                style={{ transformOrigin: 'left center' }}
                initial={{ rotateY: 0 }}
                animate={{ rotateY: -100 }}
                transition={{ duration: 0.65, delay: 0.55, ease: 'easeInOut' }}
                onAnimationComplete={() => setVisible(false)}
              >
                {/* Front cover */}
                <motion.div
                  className="absolute inset-0 overflow-hidden rounded-r-md rounded-l-[2px] shadow-[0_30px_80px_-20px_rgba(42,33,24,0.45)]"
                  style={{ backfaceVisibility: 'hidden' }}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.9, ease: 'easeIn' }}
                >
                  <img src="/images/cover-main.jpg" alt="" className="h-full w-full object-cover" />
                </motion.div>

                {/* Spine */}
                <motion.div
                  className="absolute left-0 top-0 h-full w-3 bg-gradient-to-r from-black/60 to-black/10"
                  style={{ transform: 'rotateY(90deg) translateZ(-6px)', transformOrigin: 'left center' }}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.9, ease: 'easeIn' }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
