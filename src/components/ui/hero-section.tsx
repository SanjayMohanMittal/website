import React, { useEffect, useState } from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface ManuscriptCover {
  src: string
  alt: string
}

interface ManuscriptHeroProps {
  title: React.ReactNode
  description: string
  buttonText: string
  buttonLink: string
  secondaryButtonText: string
  secondaryButtonLink: string
  coverMain: ManuscriptCover
  coverLeft: ManuscriptCover
  coverRight: ManuscriptCover
  className?: string
}

// Reusable animation variants for Framer Motion
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const reducedItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
}

const cardsVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

// Each card's own resting x/rotate is baked into its variant target,
// since framer-motion owns the whole `transform` property once any of
// x/y/rotate/scale is animated on an element, static Tailwind
// rotate-[]/translate-x-[] classes on the same element are silently
// overridden and never actually render.
//
// Spring (rather than a tween) gives the settle a light, physical
// overshoot-then-rest quality instead of a flat linear ease-out.
const cardSettleTransition = { type: 'spring', stiffness: 110, damping: 15, mass: 0.9 } as const

// The fan offset is a `custom` prop rather than a fixed number baked into
// the variant, so it can shrink on narrow viewports. A flat ±128px put
// the side covers outside the section's own overflow-hidden bounds on
// phone-width screens, clipping them instead of reflowing.
const cardLeftVariants: Variants = {
  hidden: { opacity: 0, x: -24, rotate: 7, scale: 0.94 },
  visible: (offset: number) => ({
    opacity: 1,
    x: -offset,
    rotate: 7,
    scale: 1,
    transition: cardSettleTransition,
  }),
}
const cardRightVariants: Variants = {
  hidden: { opacity: 0, x: 24, rotate: -7, scale: 0.94 },
  visible: (offset: number) => ({
    opacity: 1,
    x: offset,
    rotate: -7,
    scale: 1,
    transition: cardSettleTransition,
  }),
}
const cardMainVariants: Variants = {
  hidden: { opacity: 0, y: 16, rotate: 0, scale: 0.94 },
  visible: { opacity: 1, y: 0, rotate: 0, scale: 1, transition: cardSettleTransition },
}

const reducedCardVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
}

// The right column switches from full-width (stacked under the text) to
// half-width (side-by-side) at the `lg` breakpoint, which roughly halves
// the space available to the fan *at the same instant* the offset would
// otherwise jump to its largest value. 1024-1279px briefly has less room
// than 768-1023px does, so that band gets a smaller offset than the tier
// below it. Not a typo: the available width genuinely isn't monotonic
// with viewport width here.
const COVER_OFFSET_BREAKPOINTS = [
  { query: '(min-width: 1280px)', offset: 128 },
  { query: '(min-width: 1024px)', offset: 64 },
  { query: '(min-width: 768px)', offset: 96 },
  { query: '(min-width: 640px)', offset: 72 },
] as const
const COVER_OFFSET_BASE = 48

// Fan-offset in px for the side book covers, recalculated per breakpoint
// so the covers never translate past the section's overflow-hidden edge
// on narrow screens.
function useCoverOffset() {
  const [offset, setOffset] = useState(COVER_OFFSET_BASE)

  useEffect(() => {
    const queries = COVER_OFFSET_BREAKPOINTS.map(({ query, offset }) => ({
      mql: window.matchMedia(query),
      offset,
    }))

    const update = () => {
      const match = queries.find(({ mql }) => mql.matches)
      setOffset(match ? match.offset : COVER_OFFSET_BASE)
    }

    update()
    queries.forEach(({ mql }) => mql.addEventListener('change', update))
    return () => queries.forEach(({ mql }) => mql.removeEventListener('change', update))
  }, [])

  return offset
}

/**
 * Hero section for the Manusmrṭi site: headline + CTAs beside the three
 * book covers, fanned like a hand of cards. Adapted from the FinancialHero
 * reference component (same variants/structure), extended from two cards
 * to three and re-skinned with the manuscript brand tokens.
 */
export const ManuscriptHero = ({
  title,
  description,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
  coverMain,
  coverLeft,
  coverRight,
  className,
}: ManuscriptHeroProps) => {
  const coverOffset = useCoverOffset()
  const shouldReduceMotion = useReducedMotion()
  const resolvedItemVariants = shouldReduceMotion ? reducedItemVariants : itemVariants
  const resolvedCardLeftVariants = shouldReduceMotion ? reducedCardVariants : cardLeftVariants
  const resolvedCardRightVariants = shouldReduceMotion ? reducedCardVariants : cardRightVariants
  const resolvedCardMainVariants = shouldReduceMotion ? reducedCardVariants : cardMainVariants

  return (
    <section
      className={cn('relative w-full overflow-hidden text-foreground', className)}
    >

      <motion.div
        className="relative container mx-auto flex min-h-[88vh] items-center justify-between px-0 py-16 lg:flex-row flex-col gap-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left: Text Content */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-1/2">
          <motion.span
            variants={resolvedItemVariants}
            className="font-ui text-[13px] tracking-[0.16em] uppercase text-brass mb-4"
          >
            A three volume series
          </motion.span>
          <motion.h1
            className="font-display font-semibold tracking-tight leading-[1.08] max-w-[22ch] [text-wrap:balance]"
            style={{ fontSize: 'clamp(2.5rem, 1.7rem + 3.2vw, 3.75rem)' }}
            variants={resolvedItemVariants}
          >
            {title}
          </motion.h1>
          <motion.p
            className="mt-6 max-w-xl text-lg text-muted-foreground"
            variants={resolvedItemVariants}
          >
            {description}
          </motion.p>
          <motion.div variants={resolvedItemVariants} className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button asChild size="lg" className="h-12 px-8 text-base">
              <a href={buttonLink}>
                {buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 px-8 text-base font-semibold border-ink-soft text-ink hover:border-oxide hover:text-oxide hover:bg-transparent"
            >
              <a href={secondaryButtonLink} target="_blank" rel="noopener noreferrer">
                {secondaryButtonText}
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Right: Card Images */}
        <motion.div
          className="relative lg:w-1/2 h-[28rem] md:h-[34rem] lg:h-[38rem] w-full flex items-center justify-center"
          variants={cardsVariants}
        >
          {/* Back-left card */}
          <motion.img
            src={coverLeft.src}
            alt={coverLeft.alt}
            custom={coverOffset}
            variants={resolvedCardLeftVariants}
            whileHover={shouldReduceMotion ? undefined : { y: -10, rotate: 3, transition: { duration: 0.3 } }}
            className="absolute h-64 md:h-80 lg:h-[26rem] rounded-[3px] shadow-2xl object-cover"
          />
          {/* Back-right card */}
          <motion.img
            src={coverRight.src}
            alt={coverRight.alt}
            custom={coverOffset}
            variants={resolvedCardRightVariants}
            whileHover={shouldReduceMotion ? undefined : { y: -10, rotate: -3, transition: { duration: 0.3 } }}
            className="absolute h-64 md:h-80 lg:h-[26rem] rounded-[3px] shadow-2xl object-cover"
          />
          {/* Front card */}
          <motion.img
            src={coverMain.src}
            alt={coverMain.alt}
            variants={resolvedCardMainVariants}
            whileHover={shouldReduceMotion ? undefined : { y: -10, transition: { duration: 0.3 } }}
            className="absolute h-72 md:h-[22rem] lg:h-[29rem] rounded-[3px] shadow-2xl object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
