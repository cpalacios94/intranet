import React from 'react'
import { ChevronRight } from 'lucide-react'
import { SectionHeaderProps } from '../types'

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  highlight,
  link
}) => (
  <div className="flex justify-between items-end mb-4 px-2">
    <h2 className="text-2xl font-bold text-gray-800">
      {title} <span className="text-[#c2185b]">{highlight}</span>
      {/* Pequeña curva decorativa debajo del titulo */}
      <div className="h-1 w-12 bg-[#9d1e43] rounded-full mt-1"></div>
    </h2>
    <a
      href={link}
      className="text-[#c2185b] text-sm font-semibold hover:underline flex items-center"
    >
      Ver todas <ChevronRight size={14} />
    </a>
  </div>
)

export default SectionHeader
