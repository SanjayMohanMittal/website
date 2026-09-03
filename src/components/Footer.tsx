import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import { useFadeUpVariants, fadeUpViewport } from '@/lib/motion'
import { ChapterHero } from '@/components/ChapterHero'

const EXPLORE_LINKS = [
  { label: 'The Text', href: '#text' },
  { label: 'The Record', href: '#record' },
  { label: 'The Trilogy', href: '#trilogy' },
  { label: 'FAQ', href: '/faq.html' },
  { label: 'The Facets', href: '#facets' },
  { label: 'Contact', href: '#contact' },
]

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy-policy.html' },
  { label: 'Terms of Use', href: '/terms.html' },
  { label: 'Accessibility', href: '/accessibility.html' },
]

export function Footer() {
  const fadeUpVariants = useFadeUpVariants()

  return (
    <>
      <ChapterHero
        id="contact"
        n="05"
        label="CONTACT"
        headline="The way back."
        imageSrc="/images/chapter-contact.jpg"
        imageAlt="A stone path leading away from a havan altar at dusk"
      />
      <footer className="w-full bg-ink">
      <motion.div
        className="mx-auto max-w-[1280px] border-t border-paper/15 px-5 py-14 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={fadeUpViewport}
        variants={fadeUpVariants}
      >
        <h3 className="font-text text-[19px] text-paper">Get in touch</h3>
        <div className="mt-4 flex flex-col gap-2.5 font-data text-[14px] sm:flex-row sm:items-center sm:gap-8">
          <a href="mailto:sanjaymm@gmail.com" className="flex items-center gap-2 text-paper/65 transition-colors hover:text-gold">
            <Mail className="h-4 w-4" aria-hidden="true" />
            sanjaymm@gmail.com
          </a>
          <a href="tel:+12016942956" className="flex items-center gap-2 text-paper/65 transition-colors hover:text-gold">
            <Phone className="h-4 w-4" aria-hidden="true" />
            +1 (201) 694-2956
          </a>
          <a
            href="https://www.amazon.com/stores/Mr.-Sanjay-Mohan-Mittal/author/B0H7Z6YVXG?ref=ap_rdr&shoppingPortalEnabled=true"
            target="_blank"
            rel="noopener noreferrer"
            className="text-paper/65 transition-colors hover:text-gold"
          >
            Amazon Author Page
          </a>
        </div>
      </motion.div>

      <div className="mx-auto max-w-[1280px] border-t border-paper/10 px-5 py-10 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3.5">
            <img src="/brand/smm-icon-on-dark.svg" alt="" aria-hidden="true" className="h-14 w-14" />
            <img src="/brand/smm-wordmark-on-dark.svg" alt="Sañjay Mohan Mittal" className="h-8" />
          </div>
          <nav aria-label="Site sections" className="flex flex-wrap gap-x-6 gap-y-2 font-data text-[13px]">
            {EXPLORE_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-paper/65 transition-colors hover:text-gold">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-8 flex flex-col gap-3 border-t border-paper/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-data text-[11.5px] text-paper/65">
            &copy; {new Date().getFullYear()} Sañjay Mohan Mittal.
          </p>
          <div className="flex gap-5 font-data text-[11.5px]">
            {LEGAL_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-paper/65 transition-colors hover:text-gold">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <p className="mt-4 font-data text-[11px] text-paper/65">
          Designed by{' '}
          <a
            href="https://throughline.community/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-paper/30 underline-offset-2 transition-colors hover:text-gold"
          >
            Throughline Co
          </a>{' '}
          · Riya Mittal
        </p>
      </div>
      </footer>
    </>
  )
}
