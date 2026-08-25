import { Record } from '@/components/Record'
import { Facets } from '@/components/Facets'

/**
 * Mock — "snap where it fits naturally". Record and Facets already fit
 * within roughly one screen each after the narrative rewrite, so this
 * demonstrates the recommended scroll-snap scope using real content
 * rather than placeholder blocks. Each direct child of .snap-wrap
 * (banner, then prose section) becomes its own locked screen.
 */
export default function SnapPreviewPage() {
  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-50 border-b border-olive/30 bg-ink py-2 text-center font-data text-[12px] text-paper">
        SNAP DEMO — scroll normally; each screen should lock into place
      </div>
      <div className="snap-wrap">
        <Record />
        <Facets />
      </div>
    </>
  )
}
