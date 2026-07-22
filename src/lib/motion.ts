import { useReducedMotion, type Variants } from 'framer-motion'

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const reducedFadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
}

export const fadeUpViewport = { once: true, margin: '-80px 0px' } as const

// Scroll-reveal sections call this instead of importing fadeUpVariants
// directly, so `prefers-reduced-motion: reduce` drops the y-offset and
// gets a plain crossfade instead, matching what the splash screen already does.
export function useFadeUpVariants(): Variants {
  const shouldReduceMotion = useReducedMotion()
  return shouldReduceMotion ? reducedFadeVariants : fadeUpVariants
}
