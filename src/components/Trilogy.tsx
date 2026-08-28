import { motion, useReducedMotion } from 'framer-motion'
import { useFadeUpVariants, fadeUpViewport } from '@/lib/motion'
import { useCountUp } from '@/lib/useCountUp'
import { ChapterHero } from '@/components/ChapterHero'

export interface Volume {
  id: string
  label: string
  title: string
  description: string
  price: string
  coverSrc: string
  coverAlt: string
  amazonUrl: string
  otherEditions?: { label: string; url: string }[]
}

export const volumes: Volume[] = [
  {
    id: 'main',
    label: 'Main volume',
    title: 'Ancient Wisdom for the Modern World',
    description:
      "The complete overview, for readers meeting the Manusmṛti for the first time. Thematically reorganised so the ideas come through clearly, with every one still referenced back to its source verse.",
    price: 'Kindle $9.99 · Paperback from $15.96',
    coverSrc: '/images/cover-main.jpg',
    coverAlt: 'Manusmṛti: Ancient Wisdom for the Modern World, book cover',
    amazonUrl: 'https://www.amazon.com/gp/product/B0H77J81YW?ref_=dbs_m_mng_rwt_calw_tpbk_0&storeType=ebooks',
    otherEditions: [
      { label: 'Hindi', url: 'https://www.amazon.com/gp/product/B0HBZCXCXL?ref_=dbs_m_mng_rwt_calw_tkin_3&storeType=ebooks' },
      { label: 'Gujarati', url: 'https://www.amazon.com/dp/B0HGSNCJFS' },
    ],
  },
  {
    id: 'part-one',
    label: 'Part one',
    title: 'Original Vedic Perspective',
    description:
      "Only the verses that trace directly back to Manu's own teaching, nothing added later. If you want the source material itself, unclouded by centuries of later additions, this is where to begin.",
    price: 'Kindle $11.99 · Paperback $22.99 · Hardcover $34.99',
    coverSrc: '/images/cover-part1.jpg',
    coverAlt: 'Manusmṛti Part One: Original Vedic Perspective, book cover',
    amazonUrl: 'https://www.amazon.com/gp/product/B0H7YNBQXW?ref_=dbs_m_mng_rwt_calw_tpbk_1&storeType=ebooks',
  },
  {
    id: 'part-two',
    label: 'Part two',
    title: 'Interpolations',
    description:
      'A close look at the verses added centuries after Manu, what they changed, and why the distinction matters. Written for the reader who wants the fuller, more scholarly picture of the text.',
    price: 'Kindle $11.99 · Paperback $23.99 · Hardcover $35.99',
    coverSrc: '/images/cover-part2.jpg',
    coverAlt: 'Manusmṛti Part Two: Interpolations, book cover',
    amazonUrl: 'https://www.amazon.com/gp/product/B0H7YRRYJD?ref_=dbs_m_mng_rwt_calw_tpbk_2&storeType=ebooks',
  },
]

function VolumeCards() {
  const shouldReduceMotion = useReducedMotion()
  const maxEditions = Math.max(...volumes.map((vol) => vol.otherEditions?.length ?? 0))

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
      {volumes.map((v, i) => (
        <motion.div
          key={v.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px 0px' }}
          transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : i * 0.08, ease: 'easeOut' }}
          className="relative flex flex-col"
        >
          {v.id === 'main' && (
            <span className="absolute -top-3 left-4 z-10 inline-flex w-fit items-center rounded-[2px] bg-sindoor px-2.5 py-1 font-data text-[10px] tracking-[0.06em] text-paper shadow-[0_4px_10px_-2px_rgba(139,46,34,0.4)]">
              Start here
            </span>
          )}
          <div className="group flex flex-1 flex-col rounded-sm border border-olive/20 bg-paper-deep/30 p-4 shadow-[0_2px_10px_-4px_rgba(139,46,34,0.12),0_26px_46px_-30px_rgba(27,24,21,0.5)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_4px_16px_-4px_rgba(139,46,34,0.2),0_34px_58px_-26px_rgba(27,24,21,0.6)]">
            <div className="flex aspect-[2/3] w-full items-center justify-center rounded-[2px] bg-paper-deep shadow-[0_18px_36px_-18px_rgba(27,24,21,0.5)]">
              <img
                src={v.coverSrc}
                alt={v.coverAlt}
                loading="lazy"
                className="h-full w-full rounded-[2px] object-contain"
              />
            </div>

            <span className="mt-4 font-data text-[10.5px] tracking-[0.04em] text-olive">{v.label}</span>
            <h3 className="mt-1 font-text text-[17px] font-medium leading-tight text-ink">{v.title}</h3>
            <p className="mt-2 flex-1 text-[13px] leading-[1.55] text-ink-soft">{v.description}</p>

            <span className="mt-3 font-data text-[11px] text-ink-soft">{v.price}</span>
            <a
              href={v.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex h-9 items-center justify-center rounded-sm bg-sindoor px-4 font-data text-[12px] tracking-[0.02em] text-paper transition-[transform,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:bg-sindoor-dark active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sindoor"
            >
              Buy on Amazon
            </a>
            {Array.from({ length: maxEditions }).map((_, editionIndex) => {
              const edition = v.otherEditions?.[editionIndex]
              return edition ? (
                <a
                  key={edition.label}
                  href={edition.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-center font-data text-[11px] text-olive underline decoration-olive/40 underline-offset-4 transition-colors hover:text-sindoor hover:decoration-sindoor/60"
                >
                  Also available in {edition.label} &rarr;
                </a>
              ) : (
                <span key={editionIndex} className="mt-2 block h-[17px]" aria-hidden="true" />
              )
            })}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function Stats() {
  const verses = useCountUp(1288)
  const volumeCount = useCountUp(3)
  return (
    <div className="mt-14 rounded-sm border border-olive/20 bg-paper-deep/30 px-6 py-10 sm:px-10 sm:py-12">
      <div className="grid grid-cols-1 divide-y divide-olive/20 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        <div className="pb-8 sm:pr-8 sm:pb-0">
          <span className="block h-[3px] w-8 bg-sindoor" aria-hidden="true" />
          <div ref={verses.ref} className="tabular mt-4 font-text text-5xl font-medium leading-none text-ink sm:text-6xl">
            {verses.value.toLocaleString()}
          </div>
          <p className="mt-3 font-data text-[12px] leading-relaxed text-olive">
            authentic verses identified, out of 2,861 in common circulation
          </p>
        </div>
        <div className="pt-8 sm:pl-8 sm:pt-0">
          <span className="block h-[3px] w-8 bg-sindoor" aria-hidden="true" />
          <div ref={volumeCount.ref} className="tabular mt-4 font-text text-5xl font-medium leading-none text-ink sm:text-6xl">
            {volumeCount.value}
          </div>
          <p className="mt-3 font-data text-[12px] leading-relaxed text-olive">
            volumes, one continuous argument
          </p>
        </div>
      </div>
    </div>
  )
}

export function Trilogy() {
  const fadeUpVariants = useFadeUpVariants()
  return (
    <>
      <ChapterHero
        id="trilogy"
        n="02"
        label="THE TRILOGY"
        headline="One argument, bound in three volumes."
        imageSrc="/images/chapter-trilogy.jpg"
        imageAlt="Three leather-bound books resting on the steps of a havan altar at dawn"
      />
      <motion.section
        className="grain snap-start relative mx-auto max-w-[1280px] px-5 py-14 sm:px-6 lg:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={fadeUpViewport}
        variants={fadeUpVariants}
      >
      <VolumeCards />

      <Stats />
      </motion.section>
    </>
  )
}
