'use client'

import { NewsItem } from '../../types'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronIcon } from '../icons/ChevronIcon'

interface MediumNewsCardProps {
  news: NewsItem
}

const MediumNewsCard: React.FC<MediumNewsCardProps> = ({ news }) => {
  return (
    <div className="flex flex-col gap-4 group cursor-pointer">
      <div className="relative w-full aspect-16/10 rounded-xl overflow-hidden">
        <Image
          src={news.image}
          alt={news.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3
          className="text-zinc-800 text-sm font-bold font-['Poppins'] leading-tight line-clamp-2"
          title={news.title}
        >
          {news.title}
        </h3>

        <p className="text-zinc-500 text-xs font-normal leading-snug line-clamp-3">
          {news.description}
        </p>

        <Link
          href={`/noticias/${news.slug}`}
          className="text-rose-800 text-xs font-bold hover:underline flex items-center gap-1 font-['Poppins'] mt-1"
        >
          Saber más <ChevronIcon className="w-3 h-3" />
        </Link>
      </div>
    </div>
  )
}

export default MediumNewsCard
