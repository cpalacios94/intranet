import { getComunicacionesEspecificas } from '@/app/lib/api'
import EventMainClient from './EventMainClient'

interface EventMainContentProps {
  tipoEvento?: number
  seccion?: number
  tipSitio?: number
}

const EventMainContent: React.FC<EventMainContentProps> = async ({
  tipoEvento = 2,
  seccion = 1,
  tipSitio = 1
}) => {
  const comunicaciones = await getComunicacionesEspecificas({
    tipoEvento,
    seccion,
    tipSitio
  })

  if (comunicaciones.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center text-gray-500 py-12">
        No hay eventos disponibles
      </div>
    )
  }

  return <EventMainClient events={comunicaciones} />
}

export default EventMainContent
