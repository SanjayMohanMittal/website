import { motion } from 'framer-motion'
import { fadeUpVariants, fadeUpViewport } from '@/lib/motion'

export function Paths() {
  return (
    <motion.section
      className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-2 pb-16 lg:pb-20"
      initial="hidden"
      whileInView="visible"
      viewport={fadeUpViewport}
      variants={fadeUpVariants}
    >
      <div className="border-t-2 border-brass pt-5">
        <span className="font-ui text-[13px] tracking-[0.16em] uppercase text-sage block mb-2.5">For general readers</span>
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
        <span className="font-ui text-[13px] tracking-[0.16em] uppercase text-sage block mb-2.5">For scholars and students</span>
        <h3 className="font-display text-xl mb-2.5">Researching interpolations?</h3>
        <p className="text-ink-soft text-base mb-3.5">
          Part Two walks through the added material verse by verse, with full traditional references for citation.
        </p>
        <a href="#why" className="font-ui text-sm font-semibold text-oxide hover:text-oxide-dark hover:underline">
          Read about the methodology &rarr;
        </a>
      </div>
    </motion.section>
  )
}
