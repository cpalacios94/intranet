import TopBar from './components/TopBar'
import Header from './components/Header'
import NavBar from './components/NavBar'
import NewsSection from './components/NewSection'
import EventsSection from './components/EventSection'
import { WaveBackground } from './components/WaveBackground'

function App() {
  return (
    <div className={`min-h-screen w-screen font-sans relative flex flex-col`}>
      <WaveBackground />
      <TopBar />
      <Header />
      <NavBar />

      {/* 4. Contenido Principal */}
      <div className="flex flex-col items-start gap-[22px] relative mx-4 xl:mx-[10%] z-10 grow mb-8">
        <div className="flex flex-col xl:flex-row items-start gap-[27px] relative self-stretch w-full">
          <NewsSection />
          <EventsSection />
          {/* <div className="p-4 border border-gray-200 rounded-lg">
            <SidebarAccordion />
          </div> */}
        </div>
      </div>

      <div className="w-full h-12 bg-ucsg-primary relative z-10" />
    </div>
  )
}

export default App
