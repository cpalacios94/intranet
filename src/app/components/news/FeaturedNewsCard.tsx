import { Calendar } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronIcon } from '../icons/ChevronIcon'
import { ComunicacionEspecifica } from '@/app/types/comunicaciones'
import { generateSlug, formatDate } from '@/app/lib/utils'

interface FeaturedNewsCardProps {
  news: ComunicacionEspecifica
}

const FeaturedNewsCard: React.FC<FeaturedNewsCardProps> = ({ news }) => {
  const slug = generateSlug(news.titulo, news.codigo)

  return (
    <Link
      href={`/noticias/${slug}`}
      className="w-full h-auto flex flex-col md:flex-row gap-6 bg-white shrink-0 group"
    >
      <div className="w-full md:w-1/2 relative h-[300px] rounded-lg overflow-hidden">
        <Image
          src={news.dirImagen}
          alt={news.titulo}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-4 py-2">
        <div className="text-zinc-500 text-sm font-normal uppercase tracking-wide">
          {news.categoria || 'NOTICIAS'}
        </div>
        <h3 className="text-zinc-900 text-xl font-bold font-['Poppins'] leading-tight group-hover:text-rose-800 transition-colors">
          {news.titulo}
        </h3>
        <div className="flex items-center gap-2 text-rose-800 text-xs font-medium font-['Poppins']">
          <Calendar className="w-4 h-4" />
          <span>{formatDate(news.fecInicio)}</span>
        </div>
        <p className="text-zinc-600 text-sm font-normal font-['Poppins'] leading-relaxed line-clamp-4">
          {news.descripcion}
        </p>
        <div className="text-rose-800 text-sm font-bold group-hover:underline flex items-center gap-1 font-['Poppins']">
          Leer más <ChevronIcon className="w-4 h-4" />
        </div>
      </div>
    </Link>
  )
}

export default FeaturedNewsCard
