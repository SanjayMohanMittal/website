import { motion } from 'framer-motion'
import { useFadeUpVariants, fadeUpViewport } from '@/lib/motion'

export function Testimonial() {
  const fadeUpVariants = useFadeUpVariants()
  return (
    <motion.div
      className="grid grid-cols-1 gap-8 rounded-sm border border-olive/20 bg-paper-deep/30 p-7 sm:grid-cols-[260px_1fr] sm:gap-14 sm:p-10"
      initial="hidden"
      whileInView="visible"
      viewport={fadeUpViewport}
      variants={fadeUpVariants}
    >
      <img
        src="/images/cover-main.jpg"
        alt="Manusmṛti: Ancient Wisdom for the Modern World, book cover"
        loading="lazy"
        className="w-32 -rotate-2 rounded-sm object-cover shadow-[0_18px_40px_-16px_rgba(27,24,21,0.5)] sm:w-full"
      />
      <div>
        <span className="font-data text-[11px] tracking-[0.04em] text-olive">A reader, on the main volume</span>
        <blockquote className="mt-2 max-w-[70ch] font-text text-[19px] italic leading-[1.5] text-ink lg:text-[22px]">
          &ldquo;It treats the reader with respect, treats the source text with integrity, and delivers
          ancient wisdom in a form you&rsquo;ll actually finish.&rdquo;
        </blockquote>
        <div className="mt-4 max-w-[70ch] space-y-3 text-[14.5px] leading-[1.6] text-ink-soft">
          <p>
            This book solves a real problem&hellip; most editions of the Manusmṛti bury the reader in dense,
            chapter-by-chapter structure mixed with centuries of later additions, and you come away more
            confused than when you started. Sanjay&rsquo;s approach is refreshingly different. By presenting
            only the authentic, non-interpolated verses and reorganizing them thematically, he&rsquo;s created
            something a modern reader can actually sit down and engage with.
          </p>
          <p>
            What impressed me most is the balance he strikes. This is clearly a labor of serious
            scholarship&hellip; every verse is referenced back to its original verse number, so you can
            cross-check against any traditional edition, but it never reads like a dry academic exercise.
            Dropping the Sanskrit text was the right call for readability, while the verse references keep
            it honest and useful for deeper study.
          </p>
        </div>
        <p className="mt-4 font-data text-[12.5px] text-ink">Michael Evangelis</p>
      </div>
    </motion.div>
  )
}
