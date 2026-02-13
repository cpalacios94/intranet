import { getComunicacionesEspecificas } from '@/app/lib/api'
import { formatDate } from '@/app/lib/utils'
import { generateSlug } from '@/app/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar } from 'lucide-react'
import { ChevronIcon } from '../icons/ChevronIcon'

interface BottomNewsContentProps {
  tipoEvento?: number
  seccion?: number
  tipSitio?: number
}

const BottomNewsContent: React.FC<BottomNewsContentProps> = async ({
  tipoEvento = 1,
  seccion = 4,
  tipSitio = 1
}) => {
  const comunicaciones = await getComunicacionesEspecificas({
    tipoEvento,
    seccion,
    tipSitio
  })

  // Filtrar: destacado='S' y subseccion='main'
  const news = comunicaciones.find(
    (c) => c.destacado === 'S' && c.subseccion === 'main'
  )

  if (!news) {
    return (
      <div className="w-full h-full flex items-center justify-center text-gray-500 py-12">
        No hay noticias disponibles
      </div>
    )
  }

  const slug = news.slug || generateSlug(news.titulo, news.codigo)

  return (
    <div className="w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col lg:flex-row min-h-[400px]">
      {/* Left Side - Image with Overlay */}
      <div className="relative w-full lg:w-3/4 h-[600px] lg:min-h-full group overflow-hidden">
        <Image
          src={news.dirImagen}
          alt={news.titulo}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay Content */}
        <div className="absolute inset-y-0 left-0 p-8 w-full md:w-1/3 flex flex-col justify-center gap-6 bg-black/60">
          <h2 className="text-white text-3xl md:text-4xl font-bold font-['Poppins'] leading-tight drop-shadow-lg">
            {news.titulo}
          </h2>

          <Link
            href={`/noticias/${slug}`}
            className="text-white text-base font-medium hover:underline flex items-center gap-2 w-fit"
          >
            Leer más <ChevronIcon className="w-5 h-5 text-white" />
          </Link>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="w-full lg:w-1/4 p-8 lg:p-12 flex flex-col justify-center items-start gap-6 bg-white">
        {/* Category */}
        <span className="text-zinc-400 text-xs font-medium uppercase tracking-widest font-['Poppins']">
          {news.categoria || 'NOTICIAS'}
        </span>

        {/* Title */}
        <h3 className="text-black text-2xl lg:text-3xl font-semibold font-['Spartan'] leading-8">
          {news.titulo}
        </h3>

        {/* Date */}
        <div className="flex items-center gap-2 text-rose-800 text-xs font-semibold font-['Poppins']">
          <Calendar className="w-4 h-4" />
          <span>{formatDate(news.fecInicio)}</span>
        </div>

        {/* Description */}
        <p className="text-zinc-500 text-sm font-normal font-['Poppins'] leading-7">
          {news.descripcion}
        </p>

        {/* Link */}
        <Link
          href={`/noticias/${slug}`}
          className="text-rose-800 text-sm font-bold hover:underline flex items-center gap-2 mt-2 font-['Poppins']"
        >
          Leer más <ChevronIcon className="w-4 h-4 text-rose-800" />
        </Link>
      </div>
    </div>
  )
}

export default BottomNewsContent
