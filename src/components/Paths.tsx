import { motion } from 'framer-motion'
import { useFadeUpVariants, fadeUpViewport } from '@/lib/motion'

export function Paths() {
  const fadeUpVariants = useFadeUpVariants()
  return (
    <motion.section
      className="py-14 lg:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={fadeUpViewport}
      variants={fadeUpVariants}
    >
      <h2 className="font-display italic font-semibold text-[28px] lg:text-[36px] tracking-[-0.01em] max-w-xl mb-10 lg:mb-12">
        Two ways in.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="border-t-2 border-brass pt-5">
          <h3 className="font-display text-xl mb-2.5">New to the Manusmṛti?</h3>
          <p className="text-ink-soft text-base mb-3.5">
            Start with the main volume for the full overview, written in plain modern English with nothing assumed.
          </p>
          <a
            href="https://www.amazon.com/gp/product/B0H77J81YW?ref_=dbs_m_mng_rwt_calw_tpbk_0&storeType=ebooks"
            target="_blank"
            rel="noopener noreferrer"
            className="font-ui text-sm font-semibold text-oxide hover:text-oxide-dark hover:underline"
          >
            Start with the main volume &rarr;
          </a>
        </div>
        <div className="border-t-2 border-brass pt-5">
          <h3 className="font-display text-xl mb-2.5">Researching interpolations?</h3>
          <p className="text-ink-soft text-base mb-3.5">
            Part Two walks through the added material verse by verse, with full traditional references for citation.
          </p>
          <a href="#why" className="font-ui text-sm font-semibold text-oxide hover:text-oxide-dark hover:underline">
            Read about the methodology &rarr;
          </a>
        </div>
      </div>
    </motion.section>
  )
}
