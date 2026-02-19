'use client'

import {
  Layers,
  CircleUserRound,
  Calendar,
  Quote,
  LinkIcon
} from 'lucide-react'
import Image from 'next/image'
import { ComunicacionEspecifica } from '../../types/comunicaciones'
import { FacebookIcon } from '../icons/FacebookIcon'
import { TwitterIcon } from '../icons/TwitterIcon'
import { LinkedinIcon } from '../icons/LinkedinIcon'
import { formatDate } from '@/app/lib/utils'
import Link from 'next/link'

interface NewsDetailProps {
  news: ComunicacionEspecifica
}

const NewsDetail: React.FC<NewsDetailProps> = ({ news }) => {
  return (
    <div className="w-full relative bg-white rounded-bl rounded-[20px] p-8 flex flex-col items-center gap-8">
      <div className="w-full relative h-[400px] md:h-[600px] rounded-[3px] overflow-hidden">
        <Image
          className="object-cover"
          src={news.dirImagen}
          alt={news.titulo}
          fill
          priority
        />
      </div>

      <div className="w-full inline-flex flex-col justify-start items-start gap-8">
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="self-stretch justify-start text-zinc-900 text-3xl font-bold font-['Helvetica'] leading-10">
              {news.titulo}
            </div>
            <div className="self-stretch inline-flex justify-between items-center sm:flex-row flex-col gap-4 sm:gap-0">
              <div className="flex justify-start items-center gap-4 flex-wrap">
                {news.categoria && (
                  <div className="flex justify-center items-center gap-1.5">
                    <Layers className="w-6 h-6 text-rose-800" />
                    <div className="justify-start text-neutral-600 text-sm font-normal font-['Helvetica'] leading-5">
                      {news.categoria}
                    </div>
                  </div>
                )}
                {/* Placeholder for author as it is not in the API yet */}
                {news.descOrganiza && (
                  <div className="flex justify-center items-center gap-1.5">
                    <CircleUserRound className="w-6 h-6 text-rose-800" />
                    <div className="justify-start text-neutral-600 text-sm font-normal font-['Helvetica'] leading-5">
                      {news.descOrganiza}
                    </div>
                  </div>
                )}
                <div className="flex justify-center items-center gap-1.5">
                  <Calendar className="w-6 h-6 text-rose-800" />
                  <div className="justify-start text-neutral-600 text-sm font-normal font-['Helvetica'] leading-5">
                    {formatDate(news.fecInicio, 'long')}
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start gap-2">
                <Link
                  href="https://www.facebook.com/UCSGye"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    data-brands="Facebook"
                    data-circle="False"
                    data-status="True"
                    className="p-3 bg-indigo-800 rounded-[36px] flex justify-start items-start gap-2.5 cursor-pointer hover:bg-indigo-900 transition-colors"
                  >
                    <FacebookIcon className="w-4 h-4 text-white" />
                  </div>
                </Link>
                <Link
                  href="https://x.com/ucatolicagye"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    data-brands="Twitter"
                    data-circle="False"
                    data-status="True"
                    className="p-3 bg-sky-500 rounded-[36px] flex justify-start items-start gap-2.5 cursor-pointer hover:bg-sky-600 transition-colors"
                  >
                    <TwitterIcon className="w-4 h-4 text-white" />
                  </div>
                </Link>
                <Link
                  href="https://www.linkedin.com/school/universidad-catolica-de-santiago-de-guayaquil/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    data-brands="Linkedin"
                    data-circle="False"
                    data-status="True"
                    className="p-3 bg-rose-800 rounded-[36px] flex justify-start items-start gap-2.5 cursor-pointer hover:bg-rose-900 transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4 text-white" />
                  </div>
                </Link>
                <button
                  onClick={() =>
                    navigator.clipboard.writeText(window.location.href)
                  }
                  className="p-2.5 bg-slate-500 rounded-[36px] flex justify-start items-start gap-2.5 cursor-pointer hover:bg-slate-600 transition-colors"
                  title="Copiar enlace"
                >
                  <LinkIcon className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="self-stretch justify-start text-neutral-600 text-lg font-normal font-['Helvetica'] leading-6 whitespace-pre-wrap">
          {news.descripcion}
        </div> */}

        {news.highlight && (
          <div className="self-stretch p-10 bg-rose-800/10 shadow-[inset_4px_0px_0px_0px_rgba(169,0,70,1.00)] inline-flex justify-start items-start gap-6">
            <Quote className="w-14 h-14 text-rose-800" />
            <div className="w-3/4 justify-start text-zinc-900 text-xl font-normal font-['Helvetica'] leading-7">
              {news.highlight}
            </div>
          </div>
        )}

        {news.detalleDesc && (
          <div className="self-stretch justify-start text-neutral-600 text-lg font-normal font-['Helvetica'] leading-6 whitespace-pre-wrap">
            {news.detalleDesc}
          </div>
        )}
      </div>
    </div>
  )
}

export default NewsDetail
