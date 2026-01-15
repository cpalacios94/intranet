'use client'

import { Calendar } from 'lucide-react'
import { NewsItem } from '../../types'
import Image from 'next/image'
import Link from 'next/link'

interface SideNewsCardProps {
  news: NewsItem
}

const SideNewsCard: React.FC<SideNewsCardProps> = ({ news }) => {
  return (
    <Link
      href={`/noticias/${news.slug}`}
      className="w-full flex gap-4 bg-white items-start group cursor-pointer"
    >
      <div className="w-24 h-24 relative shrink-0 rounded-lg overflow-hidden">
        <Image
          src={news.image}
          alt={news.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-zinc-900 text-sm font-bold font-['Helvetica'] leading-tight line-clamp-2 group-hover:text-rose-800 transition-colors">
          {news.title}
        </h4>
        <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
          <Calendar className="w-3 h-3 text-rose-800" />
          <span>{news.date}</span>
        </div>
        <p className="text-zinc-600 text-xs font-normal leading-snug line-clamp-2">
          {news.description}
        </p>
      </div>
    </Link>
  )
}

export default SideNewsCard
