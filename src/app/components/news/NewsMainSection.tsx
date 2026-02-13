import React, { Suspense } from 'react'
import NewsMainContent from './NewsMainContent'
import NewsMainSkeleton from './NewsMainSkeleton'

interface NewsMainSectionProps {
  tipoEvento?: number
  seccion?: number
  tipSitio?: number
}

const NewsMainSection: React.FC<NewsMainSectionProps> = ({
  tipoEvento = 1,
  seccion = 2,
  tipSitio = 1
}) => {
  return (
    <div className="flex flex-col w-full items-start gap-8 relative">
      <div className="relative w-full h-auto rounded-[20px] overflow-hidden shadow-[0px_10px_30px_#00000012] bg-white z-0 p-8">
        <Suspense fallback={<NewsMainSkeleton />}>
          <NewsMainContent
            tipoEvento={tipoEvento}
            seccion={seccion}
            tipSitio={tipSitio}
          />
        </Suspense>
      </div>
    </div>
  )
}

export default NewsMainSection
