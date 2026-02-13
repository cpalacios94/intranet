import { notFound } from 'next/navigation'

import NewsDetail from '../../components/news/NewsDetail'
import BreadcrumbsNav from '../../components/ui/BreadcrumbsNav'
import Header from '../../components/layout/Header'
import Navbar from '../../components/layout/NavBar'
import TopBar from '../../components/layout/TopBar'
import { WaveBackground } from '../../components/layout/WaveBackground'
import { getComunicacionByCodigo } from '../../lib/api'
import { extractCodigoFromSlug } from '../../lib/utils'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function NewsPage({ params }: PageProps) {
  const { slug } = await params

  // Extraer el código del slug (último segmento después del guión)
  const codigo = extractCodigoFromSlug(slug)

  if (!codigo) {
    notFound()
  }

  // Obtener la noticia por código
  const news = await getComunicacionByCodigo(codigo)

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
            { label: news.titulo }
          ]}
        />

        <NewsDetail news={news} />
      </div>

      <div className="w-full h-12 bg-ucsg-primary relative z-10" />
    </div>
  )
}
