import { notFound } from 'next/navigation'

import EventDetail from '../../components/events/EventDetail'
import BreadcrumbsNav from '../../components/ui/BreadcrumbsNav'
import Header from '../../components/layout/Header'
import Navbar from '../../components/layout/NavBar'
import TopBar from '../../components/layout/TopBar'
import { WaveBackground } from '../../components/layout/WaveBackground'
import { Event } from '../../types'
import { MOCK_EVENTS } from '../../constants'

// Mock data service - move to a real service later
const getEventBySlug = async (slug: string): Promise<Event | undefined> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  return MOCK_EVENTS.find((e) => e.slug === slug)
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function EventPage({ params }: PageProps) {
  const { slug } = await params
  const event = await getEventBySlug(slug)

  if (!event) {
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
            { label: 'Eventos', href: '/eventos' },
            { label: event.title }
          ]}
        />

        <EventDetail event={event} />
      </div>

      <div className="w-full h-12 bg-ucsg-primary relative z-10" />
    </div>
  )
}
