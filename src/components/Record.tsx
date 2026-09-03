import { motion } from 'framer-motion'
import { useFadeUpVariants, fadeUpViewport } from '@/lib/motion'
import { ChapterHero } from '@/components/ChapterHero'

export function Record() {
  const fadeUpVariants = useFadeUpVariants()
  return (
    <>
      <ChapterHero
        id="record"
        n="01"
        label="THE RECORD"
        headline="What was offered, and what remains."
        subtext="More than two decades with the Arya Samaj. Spent separating what Manu wrote from what came later."
        imageSrc="/images/havan-hero.jpg"
        imageAlt="A havan altar at dawn beneath the moon, embers rising"
        showScrollPrompt
      />
      <motion.section
        className="grain snap-start mx-auto max-w-[1280px] px-5 py-16 sm:px-6 lg:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={fadeUpViewport}
        variants={fadeUpVariants}
      >
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-[340px_1fr] sm:items-center sm:gap-16">
          <div className="relative mx-auto w-40 sm:mx-0 sm:w-full">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-10 -z-10 rounded-full opacity-70 blur-2xl"
              style={{ background: 'radial-gradient(circle, rgba(139,46,34,0.16) 0%, transparent 70%)' }}
            />
            <div className="relative aspect-square overflow-hidden rounded-3xl shadow-[0_10px_24px_-6px_rgba(139,46,34,0.3),0_36px_60px_-20px_rgba(27,24,21,0.55)]">
              <img
                src="/images/portrait.jpg"
                alt="Sañjay Mohan Mittal"
                className="h-full w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 mix-blend-multiply"
                style={{ background: 'linear-gradient(160deg, rgba(166,131,46,0.14) 0%, transparent 55%)' }}
              />
            </div>
            <p className="mt-5 text-center font-text text-[14px] italic leading-[1.5] text-sindoor sm:text-left">
              Sañjay Mohan Mittal, B.Tech. (GBPUAT), MBA (Cornell University)
            </p>
            <p className="mt-1.5 text-center font-data text-[11px] leading-[1.5] text-olive sm:text-left">
              The Manusmṛti trilogy is endorsed by the Arya Samaj Mandir of New Jersey.
            </p>
          </div>

          <div>
            <h2 className="font-text text-[30px] font-medium leading-[1.15] tracking-[-0.01em] text-ink [text-wrap:balance] lg:text-[38px]">
              A translation I wished existed when I went looking for one.
            </h2>

            <div className="mt-6 max-w-[70ch] space-y-5 text-[17px] leading-[1.75] text-ink-soft lg:text-[18px]">
              <p>
                I am Sañjay Mohan Mittal. I hold a Bachelor of Technology in Mechanical Engineering from
                Govind Ballabh Pant University of Agriculture and Technology, and a Master of Business
                Administration from Cornell University, a technical and managerial foundation that shaped how
                I think. Alongside that formal education, I developed an early and enduring inclination
                toward spirituality and the study of Vedic thought, and that is what led me here.
              </p>
              <p>
                This book is my attempt to present the immense depth of wisdom contained in the Manusmṛti in
                a manner that is concise, clear and approachable, without compromising its essential
                integrity. It presents only the authentic, non-interpolated verses, the ones that reflect the
                original Vedic perspective that Manu actually intended.
              </p>

              <figure className="border-l border-sindoor/70 pl-6">
                <blockquote className="font-text text-[17px] italic leading-[1.6] text-ink">
                  &ldquo;Whether you are coming to the Manusmṛti for the first time, or returning to it with
                  fresh eyes, this edition was written for you.&rdquo;
                </blockquote>
              </figure>
            </div>

            <p className="mt-8 max-w-[70ch] border-t border-olive/20 pt-6 font-text text-[16px] italic leading-[1.6] text-olive">
              But before the three volumes, it helps to know exactly what's authentic in them, and what isn't.
            </p>
          </div>
        </div>
      </motion.section>
    </>
  )
}
