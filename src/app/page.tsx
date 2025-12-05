import TopBar from './components/TopBar'
import Header from './components/Header'
import NavBar from './components/NavBar'
import NewsSection from './components/NewSection'
import EventsSection from './components/EventSection'
import { COLORS } from './constants'

function App() {
  return (
    <div className={`min-h-screen w-screen font-sans ${COLORS.bgGradient}`}>
      <TopBar />
      <Header />
      <NavBar />

      {/* 4. Contenido Principal */}
      <main className="max-w-screen-2xl mx-auto p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <NewsSection />
        <EventsSection />
      </main>
    </div>
  )
}

export default App
