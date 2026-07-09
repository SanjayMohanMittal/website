export interface TestimonialProps {
  eyebrow?: string
  paragraphs: string[]
  name: string
  role?: string
}

export function Testimonial({ eyebrow, paragraphs, name, role }: TestimonialProps) {
  return (
    <figure className="rounded-md border border-brass/20 bg-paper-deep px-6 py-10 sm:px-10 sm:py-12">
      <span aria-hidden="true" className="block font-display text-6xl leading-none text-oxide/30">
        &ldquo;
      </span>
      {eyebrow && (
        <span className="-mt-2 mb-4 block font-ui text-[13px] uppercase tracking-[0.16em] text-sage">
          {eyebrow}
        </span>
      )}
      <blockquote className="space-y-4">
        {paragraphs.map((paragraph, i) => (
          <p key={i} className="font-display text-lg italic leading-relaxed text-ink lg:text-xl">
            {paragraph}
          </p>
        ))}
      </blockquote>
      <figcaption className="mt-6 font-ui text-sm">
        <span className="font-semibold text-ink">{name}</span>
        {role && <span className="text-ink-soft"> &middot; {role}</span>}
      </figcaption>
    </figure>
  )
}
