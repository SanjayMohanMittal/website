import { Nav } from '@/components/Nav'
import { About } from '@/components/About'
import { Excerpts } from '@/components/Excerpts'
import { Books } from '@/components/Books'
import { Why } from '@/components/Why'
import { Paths } from '@/components/Paths'
import { Footer } from '@/components/Footer'
import { TempleBacking } from '@/components/TempleBacking'
import { ManuscriptHero } from '@/components/ui/hero-section'

function App() {
  return (
    <>
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6">
        <Nav />

        <ManuscriptHero
          title={
            <>
              The Manusmṛti, <span className="italic text-oxide">without the interpolations.</span>
            </>
          }
          description="I spent years separating Manu's original Vedic verses from what was added centuries later, then reorganised what remained so a modern reader could actually sit with it. This is that edition."
          buttonText="See the three books"
          buttonLink="#books"
          secondaryButtonText="Buy now"
          secondaryButtonLink="https://www.amazon.com/dp/B0H7746XH2?binding=paperback&ref=dbs_dp_rwt_sb_pc_tpbk"
          coverMain={{ src: '/images/cover-main.jpg', alt: 'Manusmṛti: Ancient Wisdom for the Modern World, book cover' }}
          coverLeft={{ src: '/images/cover-part1.jpg', alt: 'Manusmṛti Part One: Original Vedic Perspective, book cover' }}
          coverRight={{ src: '/images/cover-part2.jpg', alt: 'Manusmṛti Part Two: Interpolations, book cover' }}
        />

        <TempleBacking />
        <About />
      </div>

      <Excerpts />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-6">
        <Books />
        <Why />
        <Paths />
      </div>

      <Footer />
    </>
  )
}

export default App
