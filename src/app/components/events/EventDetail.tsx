'use client'

import {
  Layers,
  CircleUserRound,
  Calendar,
  Link as LinkIcon
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ComunicacionEspecifica } from '@/app/types/comunicaciones'
import { formatDate } from '@/app/lib/utils'
import { FacebookIcon } from '../icons/FacebookIcon'
import { TwitterIcon } from '../icons/TwitterIcon'
import { LinkedinIcon } from '../icons/LinkedinIcon'

interface EventDetailProps {
  event: ComunicacionEspecifica
}

const EventDetail: React.FC<EventDetailProps> = ({ event }) => {
  return (
    <div className="w-full relative bg-white rounded-bl rounded-[20px] p-8 flex flex-col items-center gap-8">
      <div className="w-full relative h-[400px] md:h-[600px] rounded-[3px] overflow-hidden">
        <Image
          className="object-cover"
          src={event.dirImagen || 'https://placehold.co/1271x740'}
          alt={event.titulo}
          fill
          priority
        />
      </div>

      <div className="w-full inline-flex flex-col justify-start items-start gap-8">
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="self-stretch justify-start text-zinc-900 text-3xl font-bold font-['Helvetica'] leading-10">
              {event.titulo}
            </div>
            <div className="self-stretch inline-flex justify-between items-center">
              <div className="flex justify-start items-center gap-4">
                {event.categoria && (
                  <div className="flex justify-center items-center gap-1.5">
                    <Layers className="w-6 h-6 text-rose-800" />
                    <div className="justify-start text-neutral-600 text-sm font-normal font-['Helvetica'] leading-5">
                      {event.categoria}
                    </div>
                  </div>
                )}
                {event.descOrganiza && (
                  <div className="flex justify-center items-center gap-1.5">
                    <CircleUserRound className="w-6 h-6 text-rose-800" />
                    <div className="justify-start text-neutral-600 text-sm font-normal font-['Helvetica'] leading-5">
                      {event.descOrganiza}
                    </div>
                  </div>
                )}
                <div className="flex justify-center items-center gap-1.5">
                  <Calendar className="w-6 h-6 text-rose-800" />
                  <div className="justify-start text-neutral-600 text-sm font-normal font-['Helvetica'] leading-5">
                    {formatDate(event.fecInicio, 'long')}
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
        <div className="self-stretch justify-start text-neutral-600 text-lg font-normal font-['Helvetica'] leading-6">
          {event.descripcion}
        </div>
      </div>
    </div>
  )
}

export default EventDetail
