import TopBar from './components/TopBar'
import Header from './components/Header'
import NavBar from './components/NavBar'
import NewsSection from './components/NewSection'
import EventsSection from './components/EventSection'
function App() {
  return (
    <div className={`min-h-screen w-screen font-sans`}>
      <TopBar />
      <Header />
      <NavBar />

      {/* 4. Contenido Principal */}
      <div className="flex flex-col items-start gap-[22px] relative mx-[10%]">
        <div className="flex items-start gap-[27px] relative self-stretch w-full">
          <NewsSection />
          <EventsSection />
        </div>
      </div>

      <div className="w-full h-12 bg-ucsg-primary relative top-22" />
    </div>
  )
}

export default App
