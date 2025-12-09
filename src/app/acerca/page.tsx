import Header from '../components/Header'
import Navbar from '../components/NavBar'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Header />
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-ucsg-primary mb-4">
          Acerca de la UCSG
        </h1>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-700">
            La Universidad Católica de Santiago de Guayaquil (UCSG) es una
            institución de educación superior...
          </p>
        </div>
      </div>
    </div>
  )
}
