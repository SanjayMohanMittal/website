import { motion } from 'framer-motion'
import { fadeUpVariants, fadeUpViewport } from '@/lib/motion'

export function Excerpts() {
  return (
    <section className="w-full bg-paper-deep">
      <motion.div
        className="max-w-[1280px] mx-auto px-5 sm:px-6 py-16 lg:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={fadeUpViewport}
        variants={fadeUpVariants}
      >
        <span className="font-ui text-[13px] tracking-[0.16em] uppercase text-sage">A few excerpts</span>
        <h2 className="font-display font-semibold text-[28px] lg:text-[34px] tracking-[-0.01em] mt-2.5">
          Read a little before you buy.
        </h2>
        <p className="text-ink-soft max-w-[60ch] mt-2.5">
          Two passages, exactly as they appear in the book, each referenced back to its traditional verse number.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-14 md:gap-16">
          <figure className="flex flex-col border-t-2 border-oxide pt-6">
            <span aria-hidden="true" className="block font-display text-6xl leading-none text-oxide/30">
              &ldquo;
            </span>
            <blockquote className="font-display italic text-xl leading-[1.55] text-ink lg:text-[26px]">
              It is said that where women are honored, noble and divine qualities flourish; where they are dishonored, even well-intentioned efforts fail to bear fruit. A household in which women live in sorrow is believed to decline, while one in which they are content is said to prosper.
            </blockquote>
            <figcaption className="mt-auto pt-6 font-ui text-[13px] font-semibold uppercase tracking-[0.06em] text-brass">
              Manusmṛti 3:56&ndash;3:58
            </figcaption>
          </figure>
          <figure className="flex flex-col border-t-2 border-oxide pt-6">
            <span aria-hidden="true" className="block font-display text-6xl leading-none text-oxide/30">
              &ldquo;
            </span>
            <blockquote className="font-display italic text-xl leading-[1.55] text-ink lg:text-[26px]">
              Varna, in its idealized conception, is determined by qualities and actions rather than merely by birth. A person born in a Śhūdra family may, through learning and righteous conduct, attain the status of a Brāhmana.
            </blockquote>
            <figcaption className="mt-auto pt-6 font-ui text-[13px] font-semibold uppercase tracking-[0.06em] text-brass">
              Manusmṛti 10:65
            </figcaption>
          </figure>
        </div>
      </motion.div>
    </section>
  )
}
