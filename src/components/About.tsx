import { motion } from 'framer-motion'
import { fadeUpVariants, fadeUpViewport } from '@/lib/motion'
import { AnimatedQuote } from '@/components/ui/animated-quote'

export function About() {
  return (
    <motion.section
      id="about"
      className="grid grid-cols-1 items-center gap-10 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-14"
      initial="hidden"
      whileInView="visible"
      viewport={fadeUpViewport}
      variants={fadeUpVariants}
    >
      <div>
        <span className="font-ui text-[13px] tracking-[0.16em] uppercase text-sage">About the author</span>
        <h2 className="font-display font-semibold text-[28px] lg:text-[34px] tracking-[-0.01em] mt-2.5 mb-5">
          A translation I wished existed when I went looking for one.
        </h2>
        <p className="text-ink-soft mb-4">
          I am Sañjay Mohan Mittal. I hold a Bachelor of Technology and a Master of Business Administration from Cornell University, a technical and managerial foundation that shaped how I think. But alongside that formal education, I developed an early and enduring inclination toward spirituality and the study of Vedic thought, and that is what led me here.
        </p>
        <p className="text-ink-soft mb-7">
          This book is my attempt to present the immense depth of wisdom contained in the Manusmṛti in a manner that is concise, clear and approachable, without compromising its essential integrity. It presents only the authentic, non-interpolated verses, the ones that reflect the original Vedic perspective that Manu actually intended.
        </p>
        <AnimatedQuote quote="Whether you are coming to the Manusmṛti for the first time, or returning to it with fresh eyes, this edition was written for you." />
        <p className="mt-5 font-ui text-[13px] text-ink-soft tracking-[0.02em]">
          Sañjay Mohan Mittal, B.Tech., MBA (Cornell University)
        </p>
      </div>
      <div>
        <img
          src="/images/portrait.jpg"
          alt="Sañjay Mohan Mittal, author of the Manusmṛti trilogy, standing before an Om tapestry"
          className="mx-auto block aspect-[4/5] w-full max-w-[440px] rounded-2xl object-cover shadow-[0_24px_60px_-16px_rgba(42,33,24,0.4)] sepia-[.08] lg:mx-0"
        />
      </div>
    </motion.section>
  )
}
