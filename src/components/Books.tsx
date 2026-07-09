import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Testimonial } from '@/components/ui/testimonial'
import { fadeUpVariants, fadeUpViewport } from '@/lib/motion'

interface Book {
  id: string
  badge: string
  title: string
  description: string
  price: string
  coverSrc: string
  coverAlt: string
  amazonUrl: string
}

const books: Book[] = [
  {
    id: 'main',
    badge: 'Main volume',
    title: 'Ancient Wisdom for the Modern World',
    description:
      'The complete overview, for readers meeting the Manusmṛti for the first time. Thematically reorganised so the ideas come through clearly, without losing a single reference back to the traditional text.',
    price: 'Kindle $9.99  ·  Paperback $22.99',
    coverSrc: '/images/cover-main.jpg',
    coverAlt: 'Manusmṛti: Ancient Wisdom for the Modern World, book cover',
    amazonUrl: 'https://www.amazon.com/gp/product/B0H77J81YW?ref_=dbs_m_mng_rwt_calw_tpbk_0&storeType=ebooks',
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
  },
]

export function Books() {
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
        <span className="font-ui text-[13px] tracking-[0.16em] uppercase text-sage">The books</span>
        <h2 className="font-display font-semibold text-[28px] lg:text-[34px] tracking-[-0.01em] mt-2.5">
          One story, told across three volumes.
        </h2>
        <p className="text-ink-soft max-w-[60ch] mx-auto mt-2.5">
          Start wherever your curiosity leads. Each volume stands on its own, and together they trace the full arc, from the authentic Vedic teaching, to what was added later, to why any of this still matters today.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-sm gap-6 *:text-center md:mt-16 lg:max-w-full lg:grid-cols-3">
        {books.map((book) => (
          <Card key={book.id} className="group border-brass/15 bg-paper-deep shadow-none">
            <CardHeader className="pb-3">
              <div>
                <Badge>{book.badge}</Badge>
              </div>
              <img
                src={book.coverSrc}
                alt={book.coverAlt}
                className="mx-auto mt-5 aspect-[2/3] w-48 rounded-md object-cover shadow-[0_20px_45px_-14px_rgba(42,33,24,0.45)] transition-[transform,box-shadow] duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_28px_60px_-14px_rgba(42,33,24,0.55)]"
              />
              <h3 className="mt-6 font-display text-xl font-semibold">{book.title}</h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-ink-soft">{book.description}</p>
              <div className="mt-5 flex flex-col items-center gap-3 font-ui text-sm">
                <span className="font-semibold text-ink">{book.price}</span>
                <a href={book.amazonUrl} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="default"
                    size="sm"
                    className="transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-8px_rgba(139,58,43,0.55)]"
                  >
                    Buy on Amazon
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

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
