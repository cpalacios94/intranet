'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MapPinned } from 'lucide-react'

interface EventHeroCardProps {
  slug: string
  title: string
  date: string
  location: string
  description: string
  image: string
}

const EventHeroCard: React.FC<EventHeroCardProps> = ({
  slug,
  title,
  date,
  location,
  description,
  image
}) => {
  return (
    <Link
      href={`/eventos/${slug}`}
      className="w-full h-auto inline-flex flex-col justify-start items-center gap-4 group cursor-pointer"
    >
      <div className="relative w-full h-64">
        <Image
          className="rounded-[9.77px] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          src={image}
          alt={title}
          fill
        />
      </div>
      <div className="self-stretch flex flex-col justify-start items-start gap-2">
        <div className="self-stretch flex flex-col justify-start items-start gap-[2.92px]">
          <div className="self-stretch h-auto flex flex-col justify-start items-start">
            <div className="self-stretch inline-flex justify-start items-start">
              <div className="w-full justify-start text-neutral-900 text-sm font-semibold font-['Poppins'] leading-4 group-hover:text-ucsg-primary transition-colors">
                {title}
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-[3px]">
            <div className="self-stretch h-5 inline-flex justify-start items-start flex-wrap content-start">
              <div className="w-auto pr-2 py-[2.92px] inline-flex flex-col justify-center items-start">
                <div className="h-4 pb-[0.55px] inline-flex justify-start items-center gap-1.5">
                  {/* <div className="flex justify-start items-start">
                    <div className="w-2.5 h-2.5 relative">
                      <div className="w-2.5 h-2.5 left-0 top-0 absolute bg-rose-800" />
                    </div>
                  </div> */}
                  <Calendar className="w-4 h-4 text-rose-800" />
                  <div className="max-h-4 justify-start text-neutral-900 text-xs font-normal font-['Poppins'] leading-4">
                    {date}
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-5 inline-flex justify-start items-start flex-wrap content-start">
              <div className="w-auto pr-2 py-[2.92px] inline-flex flex-col justify-center items-start">
                <div className="h-4 pl-px pb-[0.55px] inline-flex justify-start items-center gap-1.5">
                  {/* <div className="w-2 h-3 bg-rose-800" /> */}
                  <MapPinned className="w-4 h-4 text-rose-800" />
                  <div className="max-h-4 justify-start text-neutral-900 text-xs font-normal font-['Poppins'] leading-4">
                    {location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <div className="self-stretch justify-start text-zinc-500 text-sm font-normal font-['Poppins'] leading-6 line-clamp-2">
            {description}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default EventHeroCard
