import BreadcrumbsNav from '../components/ui/BreadcrumbsNav'

import Header from '../components/layout/Header'
import Navbar from '../components/layout/NavBar'
import HeaderTitle from '../components/ui/HeaderTitle'
import TopBar from '../components/layout/TopBar'
import { WaveBackground } from '../components/layout/WaveBackground'
import EventMainSection from '../components/events/EventMainSection'

export const dynamic = 'force-dynamic'

export default async function EventosPage() {
  return (
    <div className={`min-h-screen w-full font-sans relative flex flex-col z-0`}>
      <WaveBackground />
      <TopBar />
      <Header />
      <Navbar />

      <div className="flex flex-col items-start gap-[22px] relative mx-4 xl:mx-[10%] z-10 grow mb-8">
        <BreadcrumbsNav items={[{ label: 'Eventos' }]} />
        <div className="flex items-start gap-[27px] relative self-stretch w-full">
          <HeaderTitle
            titleFirstWorld="Eventos de"
            titleSecondWorld="INTERES"
            viewAll={false}
          />
        </div>
        <EventMainSection />
      </div>

      <div className="w-full h-12 bg-ucsg-primary relative z-10" />
    </div>
  )
}
