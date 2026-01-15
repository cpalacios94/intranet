import { notFound } from 'next/navigation'

import NewsDetail from '../../components/news/NewsDetail'
import BreadcrumbsNav from '../../components/ui/BreadcrumbsNav'
import Header from '../../components/layout/Header'
import Navbar from '../../components/layout/NavBar'
import TopBar from '../../components/layout/TopBar'
import { WaveBackground } from '../../components/layout/WaveBackground'
import { NewsItem } from '../../types'
import { MOCK_NEWS } from '../../constants'

// Mock data service
const getNewsBySlug = async (slug: string): Promise<NewsItem | undefined> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  return MOCK_NEWS.find((n) => n.slug === slug)
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function NewsPage({ params }: PageProps) {
  const { slug } = await params
  const news = await getNewsBySlug(slug)

  if (!news) {
    notFound()
  }

  return (
    <div className="min-h-screen w-screen font-sans relative flex flex-col z-0">
      <WaveBackground />
      <TopBar />
      <Header />
      <Navbar />

      <div className="flex flex-col items-start gap-[22px] relative mx-4 xl:mx-[10%] z-10 grow mb-8">
        <BreadcrumbsNav
          items={[
            { label: 'Noticias', href: '/noticias' },
            { label: news.title }
          ]}
        />

        <NewsDetail news={news} />
      </div>

      <div className="w-full h-12 bg-ucsg-primary relative z-10" />
    </div>
  )
}
