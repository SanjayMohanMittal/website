import { motion, useReducedMotion } from 'framer-motion'
import { useFadeUpVariants, fadeUpViewport } from '@/lib/motion'

const CARDS = [
  {
    title: 'Talk to the author',
    subtitle: 'Book a short call for collaborations, podcasts, press, or just questions about the trilogy.',
    ctaLabel: 'Book a call',
    href: 'mailto:sanjaymm@gmail.com?subject=Request%20a%20call&body=I%27d%20like%20to%20book%20a%20short%20call.',
  },
  {
    title: 'Looking for a priest or Sanskrit teacher?',
    subtitle: 'I perform traditional Vedic ceremonies and teach Sanskrit and Vedic studies to children.',
    ctaLabel: 'Get in touch',
    href: 'mailto:sanjaymm@gmail.com?subject=Priest%20or%20Sanskrit%20teaching%20inquiry',
  },
]

export function Pathway() {
  const fadeUpVariants = useFadeUpVariants()
  const shouldReduceMotion = useReducedMotion()
  return (
    <motion.section
      className="snap-start px-1 py-4"
      initial="hidden"
      whileInView="visible"
      viewport={fadeUpViewport}
      variants={fadeUpVariants}
    >
      <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-14">
        <div>
          <h2 className="font-text text-[26px] font-medium leading-[1.15] tracking-[-0.01em] text-ink lg:text-[30px]">
            Away from the main altar, smaller fires burn.
          </h2>
          <div className="mt-4 space-y-3 text-[16px] leading-[1.65] text-ink-soft lg:text-[17px]">
            <p>
              The Manusmṛti trilogy is backed by the New Jersey Aarya Samaj Mandir, which reviewed and
              endorsed the translation project.
            </p>
            <p>
              I also serve as a priest, performing traditional Vedic ceremonies and rites, and I teach
              Sanskrit and Vedic studies to children, passing on the same tradition this trilogy draws from.
            </p>
          </div>
        </div>
        <div className="aspect-[16/10] overflow-hidden rounded-3xl shadow-[0_10px_24px_-6px_rgba(139,46,34,0.3),0_36px_60px_-20px_rgba(27,24,21,0.55)]">
          <img
            src="/images/headshot.jpg"
            alt="Sañjay Mohan Mittal"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
        {CARDS.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px 0px' }}
            transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : i * 0.1, ease: 'easeOut' }}
            className="rounded-sm bg-ink p-6 sm:p-8"
          >
            <img src="/brand/smm-icon-on-dark.svg" alt="" aria-hidden="true" className="h-9 w-9" />
            <h3 className="mt-5 font-text text-[19px] text-paper">{card.title}</h3>
            <p className="mt-2 max-w-[36ch] text-[14px] leading-[1.55] text-paper/75">{card.subtitle}</p>
            <a
              href={card.href}
              className="mt-3 inline-block font-data text-[12.5px] text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
            >
              {card.ctaLabel} &rarr;
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
