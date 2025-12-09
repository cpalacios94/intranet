import Header from '../components/Header'
import Navbar from '../components/NavBar'
import TopBar from '../components/TopBar'
function App() {
  return (
    <div className={`min-h-screen w-screen font-sans`}>
      <TopBar />
      <Header />
      <Navbar />

      {/* 4. Contenido Principal */}
      <div className="flex flex-col items-start gap-[22px] relative mx-[10%]">
        <div className="flex items-start gap-[27px] relative self-stretch w-full"></div>
      </div>

      <div className="w-full h-12 bg-ucsg-primary relative top-22" />
    </div>
  )
}

export default App
