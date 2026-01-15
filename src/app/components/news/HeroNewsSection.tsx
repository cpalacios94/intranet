'use client'

import { MOCK_NEWS } from '../../constants'
import SmallNewsCard from './SmallNewsCard'
import MediumNewsCard from './MediumNewsCard'
import Image from 'next/image'

const HeroNewsSection = () => {
  // We'll use the first few items for the grid
  const smallNewsItems = MOCK_NEWS.slice(0, 2)
  const bottomNewsItems = MOCK_NEWS.slice(2, 5)
  // For the large hero image, we can use the first item's image or a specific one
  // The screenshot shows a large building image. We'll use the image from the first item for now.
  const heroImage = MOCK_NEWS[0]?.image

  return (
    <section className="w-full mx-auto py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* TOP ROW */}

        {/* Top Left: 2 Small Items (Stacked) - Spans 4 columns (1/3) */}
        <div className="lg:col-span-4 flex flex-col gap-6 justify-start">
          {smallNewsItems.map((item) => (
            <SmallNewsCard key={item.id} news={item} />
          ))}
        </div>

        {/* Top Right: Large Hero Image - Spans 8 columns (2/3) */}
        <div className="lg:col-span-8 relative lg:h-[470px] lg:min-h-0 rounded-2xl overflow-hidden group">
          <Image
            src={heroImage}
            alt="Hero News"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
          {/* Optional: Add a subtle gradient or overlay if needed for text visibility, 
               though the screenshot shows a clean image. */}
        </div>

        {/* BOTTOM ROW */}

        {/* 3 Medium Items - Span 4 columns each (1/3 each) */}
        {bottomNewsItems.map((item) => (
          <div key={item.id} className="lg:col-span-4">
            <MediumNewsCard news={item} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default HeroNewsSection
