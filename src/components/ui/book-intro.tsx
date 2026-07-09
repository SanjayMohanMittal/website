import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// Page-load intro: the camera zooms in on the main volume's closed cover,
// then it swings open on its spine (3D perspective + rotateY). The fade to
// the landing page is triggered by onAnimationComplete on the rotation
// itself, not a guessed wall-clock delay, so it always starts exactly when
// the cover has actually rotated past backface-hidden (fully invisible) —
// no muddy overlap of a still-visible cover, and no dead pause where a lone
// spine lingers before the fade begins. Skips itself entirely for
// prefers-reduced-motion.
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
            animate={{ scale: 1.6 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="[perspective:1600px]" style={{ width: 220, aspectRatio: '2 / 3' }}>
              <motion.div
                className="relative h-full w-full [transform-style:preserve-3d]"
                style={{ transformOrigin: 'left center' }}
                initial={{ rotateY: 0 }}
                animate={{ rotateY: -112 }}
                transition={{ duration: 0.5, delay: 0.25, ease: [0.65, 0, 0.35, 1] }}
                onAnimationComplete={() => setVisible(false)}
              >
                {/* Front cover */}
                <div
                  className="absolute inset-0 overflow-hidden rounded-r-md rounded-l-[2px] shadow-[0_30px_80px_-20px_rgba(42,33,24,0.45)]"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <img src="/images/cover-main.jpg" alt="" className="h-full w-full object-cover" />
                </div>

                {/* Spine */}
                <div
                  className="absolute left-0 top-0 h-full w-3 bg-gradient-to-r from-black/60 to-black/10"
                  style={{ transform: 'rotateY(90deg) translateZ(-6px)', transformOrigin: 'left center' }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
