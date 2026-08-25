import { motion } from 'framer-motion'
import { useFadeUpVariants, fadeUpViewport } from '@/lib/motion'

const excerpts = [
  {
    text: 'It is said that where women are honored, noble and divine qualities flourish; where they are dishonored, even well-intentioned efforts fail to bear fruit. A household in which women live in sorrow is believed to decline, while one in which they are content is said to prosper.',
    ref: 'Manusmṛti 3:56–3:58',
    theme: 'on honoring women',
  },
  {
    text: 'Varna, in its idealized conception, is determined by qualities and actions rather than merely by birth. A person born in a Śhūdra family may, through learning and righteous conduct, attain the status of a Brāhmana; conversely, one born in a Brāhmana family may, through neglect of duty and decline in conduct, fall to the status of a Śhūdra. The same principle is understood to apply across the Kshatriya and Vaishya orders as well.',
    ref: 'Manusmṛti 10:65',
    theme: 'on varna and conduct',
  },
  {
    text: 'Every being is born alone, and alone it dies. Alone it reaps the fruit of its good deeds, and alone it bears the weight of its wrongs. When death comes, even mother, father, spouse, and children stand aside — only one’s own righteousness remains, a companion into this life and beyond.',
    ref: 'Manusmṛti 4:239–4:240',
    theme: 'on mortality and dharma',
  },
  {
    text: 'One should speak the truth, and speak it in a way that is kind to hear. Never speak an unwelcome truth, and never speak a pleasant falsehood. This alone is the eternal code of conduct.',
    ref: 'Manusmṛti 4:138',
    theme: 'on truthful speech',
  },
  {
    text: 'Wisdom should be gathered wherever it is found — sound advice even from a child, right conduct even from an enemy, virtue even from a person of humble birth. As nectar may be drawn even from poison, so wisdom must never be refused for the lowliness of its source.',
    ref: 'Manusmṛti 2:238–2:239',
    theme: 'on learning without prejudice',
  },
  {
    text: 'No one should be mocked for a disability, for old age, for lacking beauty or wealth, for want of learning, or for a lowly birth.',
    ref: 'Manusmṛti 4:141',
    theme: 'on compassion',
  },
  {
    text: 'One who seeks happiness must first make peace with what they have. Contentment is the root of happiness; its absence is the root of every sorrow.',
    ref: 'Manusmṛti 4:12',
    theme: 'on contentment',
  },
  {
    text: 'Fortitude, forgiveness, self-restraint, non-stealing, purity, control of the senses, discernment, learning, truthfulness, and freedom from anger — these ten mark the righteous life.',
    ref: 'Manusmṛti 6:92',
    theme: 'the ten marks of dharma',
  },
  {
    text: 'A ruler who upholds justice sees his good name spread like a drop of oil across water, even if he lives on nothing but the gleanings of the harvest. But the name of one who abandons justice shrinks back like a drop of butter dropped into that same water.',
    ref: 'Manusmṛti 7:33–7:34',
    theme: 'on just rule',
  },
]

/**
 * The one dark section outside the hero chapters and the footer, on
 * purpose: quoted primary text reads as an artifact under glass, set
 * apart from the surrounding authorial prose, echoing the same ink/gold
 * register the site already uses at its two other dark bookends rather
 * than introducing a new color.
 */
export function Excerpts() {
  const fadeUpVariants = useFadeUpVariants()
  const track = [...excerpts, ...excerpts]
  return (
    <section className="grain snap-start w-full bg-ink">
      <motion.div
        className="py-16 lg:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={fadeUpViewport}
        variants={fadeUpVariants}
      >
        <h2 className="mx-auto max-w-[1280px] px-5 font-text text-[28px] font-medium leading-[1.15] tracking-[-0.01em] text-paper [text-wrap:balance] sm:px-6 lg:text-[34px]">
          Primary sources, quoted exactly.
        </h2>
        <div className="marquee-viewport mt-12" style={{ '--marquee-duration': '110s' } as React.CSSProperties}>
          <div className="marquee-track items-start gap-6 pl-5 sm:gap-8 sm:pl-6">
            {track.map((excerpt, i) => (
              <figure
                key={`${excerpt.ref}-${i}`}
                className="flex h-[420px] w-[340px] shrink-0 flex-col rounded-sm border border-paper/15 bg-paper/[0.03] p-7 shadow-[0_2px_12px_-4px_rgba(139,46,34,0.18),0_30px_50px_-30px_rgba(0,0,0,0.6)] sm:h-[380px] sm:w-[440px] sm:p-8"
              >
                <blockquote className="flex-1 overflow-hidden font-text text-[17px] italic leading-[1.65] text-paper/90 lg:text-[19px]">
                  &ldquo;{excerpt.text}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-baseline justify-between gap-3 border-t border-paper/10 pt-4 font-data text-[12px] tracking-[0.03em] text-gold">
                  <span>{excerpt.ref}</span>
                  <span className="text-paper/40">{excerpt.theme}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
