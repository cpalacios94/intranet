'use client'

import { MOCK_NEWS } from '../../constants'
import FeaturedNewsCard from './FeaturedNewsCard'
import SideNewsCard from './SideNewsCard'
import SmallNewsCard from './SmallNewsCard'

const NewsMainSection: React.FC = () => {
  const featuredNews = MOCK_NEWS[0]
  const sideNews = MOCK_NEWS.slice(1, 6)
  const bottomNews = MOCK_NEWS.slice(4, 8)

  return (
    <div className="flex flex-col w-full items-start gap-8 relative">
      <div className="relative w-full h-auto rounded-[20px] overflow-hidden shadow-[0px_10px_30px_#00000012] bg-white z-0 p-8">
        <div className="flex flex-col xl:flex-row gap-8 w-full">
          {/* Left Column: Featured + Bottom Grid - Takes 2/3 on desktop */}
          <div className="w-full xl:w-2/3 flex flex-col gap-8 justify-between">
            {/* Featured Section */}
            <div className="w-full">
              {featuredNews && <FeaturedNewsCard news={featuredNews} />}
            </div>

            {/* Bottom Section: 2x2 Grid */}
            {bottomNews.length > 0 && (
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-100 pt-8">
                {bottomNews.map((news) => (
                  <div key={news.id} className="w-full">
                    <SmallNewsCard news={news} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Sidebar - Takes 1/3 on desktop */}
          <div className="w-full xl:w-1/3 flex flex-col gap-6">
            {sideNews.map((news) => (
              <SideNewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsMainSection
