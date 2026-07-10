import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { fadeUpVariants, fadeUpViewport } from '@/lib/motion'

export function Why() {
  return (
    <motion.section
      id="why"
      className="py-14 lg:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={fadeUpViewport}
      variants={fadeUpVariants}
    >
      <span className="font-ui text-[13px] tracking-[0.16em] uppercase text-sage">Why this edition</span>
      <h2 className="font-display font-semibold text-[28px] lg:text-[34px] tracking-[-0.01em] mt-2.5 mb-8 max-w-2xl">
        Built for both the curious reader and the careful scholar.
      </h2>
      <div className="rounded-md border border-brass/20 bg-paper-deep px-6 py-10 sm:px-10 sm:py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-brass/20">
          <div className="lg:pr-12">
            <p className="text-ink-soft mb-4">
              Based on my own analysis, 1,288 of the 2,861 verses in circulation today trace back to Manu&rsquo;s original teaching, the rest added centuries later. This edition presents only that original core, and aims to make that work legible to anyone, not just specialists.
            </p>
            <p className="text-ink-soft mb-4">
              Religious Studies and South Asian Studies departments are welcome to request a review copy, or to invite me to speak. This is the angle I most want universities to know about.
            </p>
            <a href="#">
              <Button variant="outline" className="mt-2">Request a review copy</Button>
            </a>
          </div>
          <div className="flex items-center lg:pl-12">
            <div className="grid grid-cols-2 gap-6 divide-x divide-oxide/15 *:text-center *:px-4">
              <div className="space-y-3">
                <div className="font-display text-5xl font-bold text-oxide">1,288</div>
                <p className="font-ui text-[13px] tracking-[0.02em] text-ink-soft">
                  authentic verses identified, out of 2,861 in common circulation
                </p>
              </div>
              <div className="space-y-3">
                <div className="font-display text-5xl font-bold text-oxide">3</div>
                <p className="font-ui text-[13px] tracking-[0.02em] text-ink-soft">
                  volumes, one continuous argument
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
