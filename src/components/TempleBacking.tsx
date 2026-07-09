export function TempleBacking() {
  return (
    <div className="flex items-center justify-center gap-5 py-8 lg:py-10">
      <span aria-hidden="true" className="hidden h-px w-16 bg-brass/40 sm:block" />
      <p className="text-center font-ui text-[13px] tracking-[0.12em] uppercase">
        <span className="text-sage">Backed by</span>{' '}
        <span className="font-semibold text-oxide">New Jersey Aarya Samaj Mandir</span>
      </p>
      <span aria-hidden="true" className="hidden h-px w-16 bg-brass/40 sm:block" />
    </div>
  )
}
