import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useFadeUpVariants, fadeUpViewport } from '@/lib/motion'
import { useCountUp } from '@/lib/useCountUp'

function Stat({ target, label }: { target: number; label: string }) {
  const { ref, value } = useCountUp(target)
  return (
    <div className="space-y-3">
      <div ref={ref} className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tabular-nums text-oxide">
        {value.toLocaleString()}
      </div>
      <p className="font-ui text-[13px] tracking-[0.02em] text-ink-soft">{label}</p>
    </div>
  )
}

export function Why() {
  const fadeUpVariants = useFadeUpVariants()
  return (
    <motion.section
      id="why"
      className="py-14 lg:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={fadeUpViewport}
      variants={fadeUpVariants}
    >
      <h2 className="font-display italic font-semibold text-[30px] lg:text-[38px] tracking-[-0.01em] mb-8 max-w-2xl [text-wrap:balance]">
        Built for both the curious reader and the careful scholar.
      </h2>
      <div className="rounded-md border border-brass/20 bg-paper-deep px-6 py-10 sm:px-10 sm:py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-brass/20">
          <div className="lg:pr-12">
            <p className="text-ink-soft mb-4">
              Based on textual analysis, 1,288 of the 2,861 verses in circulation today trace back to Manu&rsquo;s original teaching, the rest added centuries later. This edition presents only that original core, and aims to make that work legible to anyone, not just specialists.
            </p>
            <p className="text-ink-soft mb-4">
              Religious Studies and South Asian Studies departments are welcome to request a review copy, or to invite me to speak. This is the angle I most want universities to know about.
            </p>
            <Button asChild variant="outline" className="mt-2">
              <a href="mailto:sanjaymm@gmail.com?subject=Review%20copy%20request%20-%20Manusmriti">
                Request a review copy
              </a>
            </Button>
          </div>
          <div className="flex items-center lg:pl-12">
            <div className="grid grid-cols-2 gap-6 divide-x divide-oxide/15 *:text-center *:px-4">
              <Stat target={1288} label="authentic verses identified, out of 2,861 in common circulation" />
              <Stat target={3} label="volumes, one continuous argument" />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
