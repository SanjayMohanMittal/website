import { useState, type FormEvent } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useFadeUpVariants, fadeUpViewport } from '@/lib/motion'

export function Footer() {
  const fadeUpVariants = useFadeUpVariants()
  const shouldReduceMotion = useReducedMotion()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  // No mailing-list backend exists yet, so "sign up" hands off to a
  // pre-filled email to the author instead of silently no-op'ing,
  // consistent with how the press/speaking links already work.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) return
    const subject = encodeURIComponent('Newsletter sign-up')
    const body = encodeURIComponent(
      `Please add ${email} to the mailing list for new editions, speaking engagements, and university talks.`,
    )
    window.location.href = `mailto:sanjaymm@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

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
          <h3 className="font-display text-xl text-paper mb-3.5">Stay in touch</h3>
          <p className="text-paper/70 max-w-[44ch] mb-4">
            Occasional notes on new editions, speaking engagements, and university talks. No more than once a month.
          </p>
          <form className="flex max-w-[380px]" onSubmit={handleSubmit}>
            <label htmlFor="footer-email" className="sr-only">Email address</label>
            <input
              id="footer-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="flex-1 px-4 py-3 border border-paper/50 border-r-0 bg-paper/10 font-ui text-sm text-paper placeholder:text-paper/55 focus-visible:outline-2 focus-visible:outline-brass-light"
            />
            <button
              type="submit"
              className="font-ui text-sm font-semibold bg-oxide text-paper px-5 py-3 hover:bg-oxide-dark transition-[transform,background-color] duration-150 ease-out active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-paper"
            >
              Sign up
            </button>
          </form>
          {submitted && (
            <motion.p
              className="mt-3 font-ui text-sm text-brass-light"
              role="status"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              Opening your email client to confirm. Send it and you&rsquo;re on the list.
            </motion.p>
          )}
        </div>
        <div className="font-ui text-sm flex flex-col gap-2.5">
          <a href="mailto:sanjaymm@gmail.com?subject=Press%20and%20media%20kit%20request" className="text-paper/70 hover:text-brass-light transition-colors">Press and media kit</a>
          <a href="mailto:sanjaymm@gmail.com?subject=Speaking%20engagement%20request" className="text-paper/70 hover:text-brass-light transition-colors">Request a speaking engagement</a>
          <a href="mailto:sanjaymm@gmail.com" className="text-paper/70 hover:text-brass-light transition-colors">sanjaymm@gmail.com</a>
          <a href="tel:+12016942956" className="text-paper/70 hover:text-brass-light transition-colors">+1 (201) 694-2956</a>
        </div>
      </motion.div>
    </footer>
  )
}
