export interface TestimonialProps {
  eyebrow?: string
  pullQuote: string
  paragraphs: string[]
  name: string
  role?: string
  coverSrc?: string
  coverAlt?: string
}

export function Testimonial({
  eyebrow,
  pullQuote,
  paragraphs,
  name,
  role,
  coverSrc,
  coverAlt,
}: TestimonialProps) {
  return (
    <figure className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr] lg:items-center lg:gap-16">
      {coverSrc && (
        <img
          src={coverSrc}
          alt={coverAlt}
          className="mx-auto w-48 -rotate-3 rounded-md object-cover shadow-[0_24px_50px_-16px_rgba(42,33,24,0.4)] sm:w-56 lg:mx-0 lg:w-full"
        />
      )}
      <div>
        {eyebrow && (
          <span className="mb-3 block font-ui text-[13px] uppercase tracking-[0.16em] text-sage">
            {eyebrow}
          </span>
        )}
        <blockquote className="font-display text-2xl italic leading-snug text-oxide-dark lg:text-[28px]">
          &ldquo;{pullQuote}&rdquo;
        </blockquote>
        <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-soft">
          {paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <figcaption className="mt-6 font-ui text-sm">
          <span className="font-semibold text-ink">{name}</span>
          {role && <span className="text-ink-soft"> &middot; {role}</span>}
        </figcaption>
      </div>
    </figure>
  )
}
