import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Testimonial } from '@/components/ui/testimonial'
import { useFadeUpVariants, fadeUpViewport } from '@/lib/motion'
import { cn } from '@/lib/utils'

// Nested under the section's own fadeUpVariants the same way hero-section.tsx
// nests its stagger levels: no separate whileInView here, this inherits the
// hidden/visible state from the ancestor motion.section that triggers it.
const gridContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const reducedGridContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0 } },
}
const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}
const reducedCardItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
}

interface Book {
  id: string
  badge: string
  title: string
  description: string
  price: string
  coverSrc: string
  coverAlt: string
  amazonUrl: string
  // Matches each cover's actual source pixel ratio (main is a true 2:3,
  // parts one/two are printed slightly shorter) so object-cover never
  // crops real cover art.
  coverAspect: string
}

const books: Book[] = [
  {
    id: 'main',
    badge: 'Main volume',
    title: 'Ancient Wisdom for the Modern World',
    description:
      'The complete overview, for readers meeting the Manusmṛti for the first time. Thematically reorganised so the ideas come through clearly, without losing a single reference back to the traditional text.',
    price: 'Kindle $9.99  ·  Paperback $16.83',
    coverSrc: '/images/cover-main.jpg',
    coverAlt: 'Manusmṛti: Ancient Wisdom for the Modern World, book cover',
    amazonUrl: 'https://www.amazon.com/gp/product/B0H77J81YW?ref_=dbs_m_mng_rwt_calw_tpbk_0&storeType=ebooks',
    coverAspect: '2 / 3',
  },
  {
    id: 'part-one',
    badge: 'Part one',
    title: 'Original Vedic Perspective',
    description:
      "Only the verses I could trace back to Manu's original teaching. If you want the source material, unclouded by later additions, this is where to begin.",
    price: 'Kindle $11.99  ·  Paperback $22.99  ·  Hardcover $34.99',
    coverSrc: '/images/cover-part1.jpg',
    coverAlt: 'Manusmṛti Part One: Original Vedic Perspective, book cover',
    amazonUrl: 'https://www.amazon.com/gp/product/B0H7YNBQXW?ref_=dbs_m_mng_rwt_calw_tpbk_1&storeType=ebooks',
    coverAspect: '420 / 543',
  },
  {
    id: 'part-two',
    badge: 'Part two',
    title: 'Interpolations',
    description:
      'A close look at the verses added centuries after Manu, what they changed, and why the distinction matters. Written for the reader who wants the fuller, more scholarly picture.',
    price: 'Kindle $11.99  ·  Paperback $23.99  ·  Hardcover $35.99',
    coverSrc: '/images/cover-part2.jpg',
    coverAlt: 'Manusmṛti Part Two: Interpolations, book cover',
    amazonUrl: 'https://www.amazon.com/gp/product/B0H7YRRYJD?ref_=dbs_m_mng_rwt_calw_tpbk_2&storeType=ebooks',
    coverAspect: '420 / 543',
  },
]

export function Books() {
  const fadeUpVariants = useFadeUpVariants()
  const shouldReduceMotion = useReducedMotion()
  return (
    <motion.section
      id="books"
      className="py-14 lg:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={fadeUpViewport}
      variants={fadeUpVariants}
    >
      <div className="text-center">
        <h2 className="font-display font-bold text-[30px] lg:text-[38px] tracking-[-0.01em] [text-wrap:balance]">
          One story, told across three volumes.
        </h2>
        <p className="text-ink-soft max-w-[60ch] mx-auto mt-3">
          Start wherever your curiosity leads. Each volume stands on its own, and together they trace the full arc, from the authentic Vedic teaching, to what was added later, to why any of this still matters today.
        </p>
      </div>

      <motion.div
        className="mx-auto mt-10 grid max-w-sm gap-6 *:text-center md:mt-16 md:max-w-2xl md:grid-cols-2 lg:max-w-full lg:grid-cols-[1.15fr_1fr_1fr] lg:items-start"
        variants={shouldReduceMotion ? reducedGridContainerVariants : gridContainerVariants}
      >
        {books.map((book) => (
          <motion.div key={book.id} variants={shouldReduceMotion ? reducedCardItemVariants : cardItemVariants}>
            <Card
              className={cn(
                'group border-brass/15 bg-paper-deep shadow-none',
                book.id === 'main' && 'lg:border-oxide/25',
              )}
            >
              <CardHeader className="pb-3">
                <div>
                  <Badge className={cn(book.id === 'main' && '-rotate-3')}>{book.badge}</Badge>
                </div>
                <img
                  src={book.coverSrc}
                  alt={book.coverAlt}
                  style={{ aspectRatio: book.coverAspect }}
                  className="mx-auto mt-5 w-48 rounded-md object-cover shadow-[0_20px_45px_-14px_rgba(42,33,24,0.45)] transition-[transform,box-shadow] duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_28px_60px_-14px_rgba(42,33,24,0.55)]"
                />
                <h3 className="mt-6 font-display text-xl font-semibold">{book.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-ink-soft">{book.description}</p>
                <div className="mt-5 flex flex-col items-center gap-3 font-ui text-sm">
                  <span className="font-semibold text-ink">{book.price}</span>
                  <Button
                    asChild
                    variant="default"
                    size="sm"
                    className="transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-8px_rgba(139,58,43,0.55)]"
                  >
                    <a href={book.amazonUrl} target="_blank" rel="noopener noreferrer">
                      Buy on Amazon
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-14 lg:mt-20">
        <Testimonial
          eyebrow="A reader on Ancient Wisdom for the Modern World"
          pullQuote="It treats the reader with respect, treats the source text with integrity, and delivers ancient wisdom in a form you'll actually finish."
          paragraphs={[
            "This book solves a real problem… most editions of the Manusmṛti bury the reader in dense, chapter-by-chapter structure mixed with centuries of later additions, and you come away more confused than when you started. Sanjay's approach is refreshingly different. By presenting only the authentic, non-interpolated verses and reorganizing them thematically, he's created something a modern reader can actually sit down and engage with.",
            'What impressed me most is the balance he strikes. This is clearly a labor of serious scholarship… every verse is referenced back to its original verse number, so you can cross-check against any traditional edition, but it never reads like a dry academic exercise. Dropping the Sanskrit text was the right call for readability, while the verse references keep it honest and useful for deeper study.',
            'The thematic organization is the real game-changer. Instead of wading through the ancient layout, related ideas are grouped so the wisdom builds naturally. Concepts that would otherwise be scattered across chapters come together in a way that actually lands for a contemporary reader.',
            "Whether you're new to Hindu scripture or someone who has bounced off the Manusmṛti before because of impenetrable editions, this is the version to get. It treats the reader with respect, treats the source text with integrity, and delivers ancient wisdom in a form you'll actually finish. Highly recommended!",
          ]}
          name="Michael Evangelis"
          coverSrc={books[0].coverSrc}
          coverAlt={books[0].coverAlt}
        />
      </div>
    </motion.section>
  )
}
