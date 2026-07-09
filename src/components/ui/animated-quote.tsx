import { motion, type Variants } from 'framer-motion'
import { cn } from '@/lib/utils'

const quoteContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.025 } },
}

const wordVariants: Variants = {
  hidden: { opacity: 0, filter: 'blur(8px)', y: 6 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
}

// Word-by-word blur reveal, adapted from a testimonial-carousel component's
// quote treatment (the carousel/arrow navigation itself wasn't applicable
// here since there's only one quote, so only this reveal effect was kept).
export function AnimatedQuote({ quote, className }: { quote: string; className?: string }) {
  const words = quote.split(' ')

  return (
    <motion.p
      className={cn('font-display italic text-2xl leading-snug text-oxide-dark', className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px 0px' }}
      variants={quoteContainerVariants}
    >
      &ldquo;
      {words.map((word, i) => (
        <motion.span key={i} variants={wordVariants} className="inline-block">
          {word}&nbsp;
        </motion.span>
      ))}
      &rdquo;
    </motion.p>
  )
}
