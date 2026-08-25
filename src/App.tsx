import { Analytics } from '@vercel/analytics/react'
import { SiteNav } from '@/components/SiteNav'
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
      <SiteNav />
      <Record />
      <Trilogy />
      <Excerpts />
      <Facets />

      <div className="mx-auto max-w-[1280px] px-5 pb-14 sm:px-6 lg:pb-20">
        <Pathway />
        <div className="mt-14">
          <Testimonial />
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App
