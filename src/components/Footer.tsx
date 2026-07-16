import { motion } from 'framer-motion'
import { fadeUpVariants, fadeUpViewport } from '@/lib/motion'

export function Footer() {
  return (
    <footer id="contact" className="w-full bg-ink">
      <motion.div
        className="max-w-[1280px] mx-auto grid grid-cols-1 gap-10 border-t border-brass/25 px-5 py-14 sm:grid-cols-[1.2fr_1fr] sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={fadeUpViewport}
        variants={fadeUpVariants}
      >
        <div>
          <h4 className="font-display text-xl text-paper mb-3.5">Stay in touch</h4>
          <p className="text-paper/70 max-w-[44ch] mb-4">
            Occasional notes on new editions, speaking engagements, and university talks. No more than once a month.
          </p>
          <form className="flex max-w-[380px]" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="you@email.com"
              className="flex-1 px-4 py-3 border border-paper/50 border-r-0 bg-paper/10 font-ui text-sm text-paper placeholder:text-paper/55 focus-visible:outline-2 focus-visible:outline-brass-light"
            />
            <button
              type="submit"
              className="font-ui text-sm font-semibold bg-oxide text-paper px-5 py-3 hover:bg-oxide-dark transition-colors focus-visible:outline-2 focus-visible:outline-paper"
            >
              Sign up
            </button>
          </form>
        </div>
        <div className="font-ui text-sm flex flex-col gap-2.5">
          <a href="#" className="text-paper/70 hover:text-brass-light transition-colors">Press and media kit</a>
          <a href="#" className="text-paper/70 hover:text-brass-light transition-colors">Request a speaking engagement</a>
          <a href="#" className="text-paper/70 hover:text-brass-light transition-colors">Goodreads author page</a>
          <a href="mailto:sanjaymm@gmail.com" className="text-paper/70 hover:text-brass-light transition-colors">sanjaymm@gmail.com</a>
          <a href="tel:+12016942956" className="text-paper/70 hover:text-brass-light transition-colors">+1 (201) 694-2956</a>
        </div>
      </motion.div>
    </footer>
  )
}
