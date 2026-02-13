import { ContainerIcon } from '../icons/ContainerIcon'
import NextImage from 'next/image'
import { ChevronIcon } from '../icons/ChevronIcon'
import Link from 'next/link'
import { ComunicacionEspecifica } from '@/app/types/comunicaciones'
import { generateSlug, formatDate } from '@/app/lib/utils'

interface MainNewsProps {
  news: ComunicacionEspecifica
}

const MainNews: React.FC<MainNewsProps> = ({ news }) => {
  if (!news) return null

  const slug = generateSlug(news.titulo, news.codigo)

  return (
    <Link
      href={`/noticias/${slug}`}
      className="flex flex-col md:flex-row w-full min-h-[300px] items-center gap-[25px] relative group cursor-pointer"
    >
      <div className="relative w-full md:w-1/2 h-[300px] rounded-[7.1px] overflow-hidden shrink-0">
        <NextImage
          src={news.dirImagen}
          alt={news.titulo}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1280px) 100vw, 50vw"
        />
      </div>

      <div className="flex flex-col gap-4 w-full md:w-1/2">
        <div className="flex flex-col items-start justify-center w-full">
          <div className="font-['Poppins'] font-normal text-[#808080] text-[14.8px] leading-[25.6px]">
            {news.categoria || 'NOTICIAS'}
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <h3 className="font-['Poppins'] font-semibold text-[#181818] text-base leading-5 group-hover:text-rose-800 transition-colors line-clamp-2">
            {news.titulo}
          </h3>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 text-[#181818]">
              <ContainerIcon className="w-4 h-4" />
              <span className="font-['Poppins'] text-sm">
                {formatDate(news.fecInicio)}
              </span>
            </div>
            <div className="w-px h-[13px] bg-[#dadada]" />
          </div>
        </div>

        <div className="w-full">
          <p className="font-['Poppins'] font-normal text-[#808080] text-xs leading-[18px] line-clamp-3">
            {news.descripcion}
          </p>
        </div>

        <div className="flex items-center gap-2 mt-auto">
          <span className="font-['Poppins'] font-medium text-[#a90046] text-[12.5px]">
            Leer más
          </span>
          <ChevronIcon className="w-4 h-4 text-rose-800" />
        </div>
      </div>
    </Link>
  )
}

export default MainNews
