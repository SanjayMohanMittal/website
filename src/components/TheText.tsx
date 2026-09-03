import { motion } from 'framer-motion'
import { useFadeUpVariants, fadeUpViewport } from '@/lib/motion'
import { ChapterHero } from '@/components/ChapterHero'

export function TheText() {
  const fadeUpVariants = useFadeUpVariants()
  return (
    <>
      <ChapterHero
        id="text"
        n="02"
        label="THE TEXT"
        headline="Before the trilogy, the text itself."
        imageSrc="/images/chapter-text.jpg"
        imageAlt="An open ancient manuscript on a stone plinth, lit by a single oil lamp beneath a glowing moon"
      />
      <motion.section
        className="grain snap-start mx-auto max-w-[1280px] px-5 py-16 sm:px-6 lg:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={fadeUpViewport}
        variants={fadeUpVariants}
      >
        <div className="mx-auto max-w-[70ch] space-y-5 text-[17px] leading-[1.75] text-ink-soft lg:text-[18px]">
          <p>
            The Manusmṛti, formally known as the Manava Dharmashastra, is an ancient Sanskrit text on
            dharma: duty, ethics, and how to live a rightful life. It is composed as a long sequence of
            verses, traditionally attributed to Manu, and for centuries it has shaped how people think
            about family, conduct, justice, and the responsibilities owed to others.
          </p>
          <p>
            Over time, verses were added that Manu never wrote, verses that reflect the customs of later
            eras rather than his own teaching. Most editions print the original and the additions side by
            side, with no way to tell them apart. In this trilogy, I have gone through the text and
            separated Manu&rsquo;s own verses from those later additions, each one referenced back to where
            it falls in the traditional numbering.
          </p>
          <p>
            Start with whichever volume fits how you read: the full argument in one place, the original
            teaching on its own, or a close look at what was added and why. However you begin, you will
            know exactly which words are Manu&rsquo;s.
          </p>
        </div>
      </motion.section>
    </>
  )
}
