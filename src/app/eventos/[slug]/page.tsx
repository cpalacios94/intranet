import { notFound } from 'next/navigation'

import EventDetail from '../../components/events/EventDetail'
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

export default async function EventPage({ params }: PageProps) {
  const { slug } = await params

  // Extraer el código del slug (último segmento después del guión)
  const codigo = extractCodigoFromSlug(slug)

  if (!codigo) {
    notFound()
  }

  // Obtener el evento por código (tipoEvento=2 para eventos)
  const event = await getComunicacionByCodigo(codigo, 2)

  if (!event) {
    notFound()
  }

  return (
    <div className="min-h-screen w-full font-sans relative flex flex-col z-0">
      <WaveBackground />
      <TopBar />
      <Header />
      <Navbar />

      <div className="flex flex-col items-start gap-[22px] relative mx-4 xl:mx-[10%] z-10 grow mb-8">
        <BreadcrumbsNav
          items={[
            { label: 'Eventos', href: '/eventos' },
            { label: event.titulo }
          ]}
        />

        <EventDetail event={event} />
      </div>

      <div className="w-full h-12 bg-ucsg-primary relative z-10" />
    </div>
  )
}
