import type { Variants } from 'framer-motion'

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const fadeUpViewport = { once: true, margin: '-80px 0px' } as const
