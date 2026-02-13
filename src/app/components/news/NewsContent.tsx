import MainNews from './MainNews'
import GridNews from './GridNews'
import { getComunicacionesEspecificas } from '@/app/lib/api'

interface NewsContentProps {
  tipoEvento?: number
  seccion?: number
  tipSitio?: number
}

const NewsContent: React.FC<NewsContentProps> = async ({
  tipoEvento = 1,
  seccion = 1,
  tipSitio = 1
}) => {
  const comunicaciones = await getComunicacionesEspecificas({
    tipoEvento,
    seccion,
    tipSitio
  })

  // Primer elemento para MainNews
  const mainNewsItem = comunicaciones[0]
  // Del índice 1 en adelante para GridNews
  const gridNewsItems = comunicaciones.slice(1)

  if (!mainNewsItem) {
    return (
      <div className="w-full h-full flex items-center justify-center text-gray-500">
        No hay noticias disponibles
      </div>
    )
  }

  return (
    <>
      <MainNews news={mainNewsItem} />
      {gridNewsItems.length > 0 && <GridNews newsItems={gridNewsItems} />}
    </>
  )
}

export default NewsContent
