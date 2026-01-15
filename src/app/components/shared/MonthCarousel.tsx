'use client'

import React, { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import MonthCard from './MonthCard'

interface MonthCarouselProps {
  selectedMonth: string
  onMonthSelect: (month: string) => void
  currentMonthIndex: number
}

const MonthCarousel: React.FC<MonthCarouselProps> = ({
  selectedMonth,
  onMonthSelect,
  currentMonthIndex
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  // Array of month names in Spanish
  const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ]

  // Generate 12 months starting from currentMonthIndex
  const orderedMonths = Array.from({ length: 12 }, (_, i) => {
    const monthIndex = (currentMonthIndex + i) % 12
    const monthName = months[monthIndex]
    const monthNumber = String(monthIndex + 1).padStart(2, '0')
    return {
      name: monthName,
      number: monthNumber,
      isActive: monthNumber === selectedMonth
    }
  })

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1) // -1 for tolerance
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', checkScroll)
      // Check initial state
      checkScroll()
      window.addEventListener('resize', checkScroll)
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScroll)
      }
      window.removeEventListener('resize', checkScroll)
    }
  }, [])

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      container.scrollBy({
        left: -container.clientWidth / 2,
        behavior: 'smooth'
      })
    }
  }

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      container.scrollBy({
        left: container.clientWidth / 2,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="w-full h-28 relative bg-neutral-50 rounded-lg px-8 flex items-center group">
      {/* Custom Navigation Buttons */}
      <button
        onClick={scrollPrev}
        disabled={!canScrollLeft}
        className="swiper-button-prev-custom absolute left-2 z-10 text-gray-600 hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Previous months"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={scrollNext}
        disabled={!canScrollRight}
        className="swiper-button-next-custom absolute right-2 z-10 text-gray-600 hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Next months"
      >
        <ChevronRight size={24} />
      </button>

      <div
        ref={scrollContainerRef}
        className="flex w-full overflow-x-auto scrollbar-hide scroll-smooth gap-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {orderedMonths.map((month) => (
          <div
            key={month.number}
            className="shrink-0 flex justify-center py-4 w-1/2 sm:w-1/4 md:w-1/6 lg:w-[12.5%]"
          >
            <MonthCard
              month={month.name}
              isActive={month.isActive}
              onClick={() => onMonthSelect(month.number)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MonthCarousel
