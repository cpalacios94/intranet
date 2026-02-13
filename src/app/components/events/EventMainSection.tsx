import React, { Suspense } from 'react'
import EventMainContent from './EventMainContent'
import EventMainSkeleton from './EventMainSkeleton'

interface EventMainSectionProps {
  tipoEvento?: number
  seccion?: number
  tipSitio?: number
}

const EventMainSection: React.FC<EventMainSectionProps> = ({
  tipoEvento = 2,
  seccion = 1,
  tipSitio = 1
}) => {
  return (
    <div className="flex flex-col w-full items-start gap-[15px] relative">
      <div className="relative w-full h-auto rounded-[20px] overflow-hidden shadow-[0px_10px_30px_#00000012] bg-white z-0">
        <div className="w-full h-full flex rounded-[0px_0px_var(--demo-edublink-co-radius-4)_var(--demo-edublink-co-radius-4)]">
          <Suspense fallback={<EventMainSkeleton />}>
            <EventMainContent
              tipoEvento={tipoEvento}
              seccion={seccion}
              tipSitio={tipSitio}
            />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default EventMainSection
