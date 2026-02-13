import { getNewsMainSectionData } from '@/app/lib/api'
import FeaturedNewsCard from './FeaturedNewsCard'
import SideNewsCard from './SideNewsCard'
import SmallNewsCard from './SmallNewsCard'

interface NewsMainContentProps {
  tipoEvento?: number
  seccion?: number
  tipSitio?: number
}

const NewsMainContent: React.FC<NewsMainContentProps> = async ({
  tipoEvento = 1,
  seccion = 2,
  tipSitio = 1
}) => {
  const { featuredNews, sideNews, smallNews } = await getNewsMainSectionData({
    tipoEvento,
    seccion,
    tipSitio
  })

  if (!featuredNews && sideNews.length === 0 && smallNews.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center text-gray-500 py-12">
        No hay noticias disponibles
      </div>
    )
  }

  return (
    <div className="flex flex-col xl:flex-row gap-8 w-full">
      {/* Left Column: Featured + Bottom Grid - Takes 2/3 on desktop */}
      <div className="w-full xl:w-2/3 flex flex-col gap-8 justify-between">
        {/* Featured Section */}
        {featuredNews && (
          <div className="w-full">
            <FeaturedNewsCard news={featuredNews} />
          </div>
        )}

        {/* Bottom Section: 2x2 Grid */}
        {smallNews.length > 0 && (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-100 pt-8">
            {smallNews.map((news) => (
              <div key={news.codigo} className="w-full">
                <SmallNewsCard news={news} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right Column: Sidebar - Takes 1/3 on desktop */}
      {sideNews.length > 0 && (
        <div className="w-full xl:w-1/3 flex flex-col gap-6">
          {sideNews.map((news) => (
            <SideNewsCard key={news.codigo} news={news} />
          ))}
        </div>
      )}
    </div>
  )
}

export default NewsMainContent
