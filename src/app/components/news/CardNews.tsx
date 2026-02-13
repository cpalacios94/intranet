import Image from 'next/image'
import Link from 'next/link'
import { ContainerIcon } from '../icons/ContainerIcon'
import { ComunicacionEspecifica } from '@/app/types/comunicaciones'
import { generateSlug, formatDate } from '@/app/lib/utils'

interface CardNewsProps {
  news: ComunicacionEspecifica
}

const CardNews: React.FC<CardNewsProps> = ({ news }) => {
  const slug = generateSlug(news.titulo, news.codigo)

  return (
    <Link
      href={`/noticias/${slug}`}
      className="w-full flex flex-col sm:flex-row justify-start items-center gap-4 whitespace-break-spaces cursor-pointer group"
    >
      <div className="relative w-full sm:w-[112px] h-[112px] shrink-0">
        <Image
          alt={news.titulo}
          className="rounded-[9.77px] object-cover"
          src={news.dirImagen}
          fill
          sizes="(max-width: 640px) 100vw, 112px"
        />
      </div>
      <div className="w-full min-h-24 flex flex-col justify-start items-start gap-2">
        <div className="self-stretch flex flex-col justify-start items-start gap-[2.92px]">
          <div className="self-stretch flex flex-col justify-start items-start">
            <div className="self-stretch inline-flex justify-start items-start">
              <div className="w-full justify-start text-neutral-900 text-sm font-semibold font-['Poppins'] leading-4 group-hover:text-rose-800 transition-colors line-clamp-2">
                {news.titulo}
              </div>
            </div>
          </div>
          <div className="self-stretch inline-flex justify-start items-start flex-wrap content-start">
            <div className="w-full py-[2.92px] inline-flex flex-col justify-center items-start">
              <div className="h-4 pb-[0.55px] inline-flex justify-start items-center gap-1.5">
                <div className="flex justify-start items-start">
                  <div className="w-2.5 h-2.5 relative">
                    <ContainerIcon className="w-2.5 h-2.5 left-0 top-0 absolute" />
                  </div>
                </div>
                <div className="max-h-4 justify-start text-neutral-900 text-[8.76px] font-normal font-['Poppins'] leading-4">
                  {formatDate(news.fecInicio)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <div className="self-stretch justify-start text-zinc-500 text-xs font-normal font-['Poppins'] leading-4 line-clamp-2">
            {news.descripcion}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CardNews
