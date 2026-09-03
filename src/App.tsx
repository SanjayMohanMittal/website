import { Analytics } from '@vercel/analytics/react'
import { SiteNav } from '@/components/SiteNav'
import { TheText } from '@/components/TheText'
import { Record } from '@/components/Record'
import { Trilogy } from '@/components/Trilogy'
import { Excerpts } from '@/components/Excerpts'
import { Facets } from '@/components/Facets'
import { Pathway } from '@/components/Pathway'
import { Testimonial } from '@/components/Testimonial'
import { Footer } from '@/components/Footer'

function App() {
  return (
    <>
      <Analytics />
      <a
        href="#main"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-sm bg-sindoor px-4 py-2 font-data text-[13px] text-paper transition-transform focus-visible:translate-y-0"
      >
        Skip to main content
      </a>
      <SiteNav />
      <main id="main">
        <Record />
        <TheText />
        <Trilogy />
        <Excerpts />
        <Facets />

        <div className="mx-auto max-w-[1280px] px-5 pb-14 sm:px-6 lg:pb-20">
          <Pathway />
          <div className="mt-14">
            <Testimonial />
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App
