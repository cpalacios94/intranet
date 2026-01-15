'use client'

import { useState, useDeferredValue } from 'react'
import MonthCarousel from '../shared/MonthCarousel'
import DayCarousel from '../shared/DayCarousel'
import SearchInput from '../ui/SearchInput'
import HeaderTitle from '../ui/HeaderTitle'
import EventHeroCard from './EventHeroCard'

import { Event } from '../../types'
import { MOCK_EVENTS } from '../../constants'

interface EventMainSectionProps {
  events: Event[]
  initialMonth: string
  currentMonthIndex: number
}

const EventMainSection: React.FC<EventMainSectionProps> = ({
  events,
  initialMonth,
  currentMonthIndex
}) => {
  const [selectedMonth, setSelectedMonth] = useState<string>(initialMonth)
  // Default to current day or 1st of month. For now, let's pick today's date if in current month, else 1.
  // Actually, keeping it simple: default to 1 or current day.
  const today = new Date()
  const currentYear = today.getFullYear()
  const [selectedDay, setSelectedDay] = useState<number>(today.getDate())

  const [searchQuery, setSearchQuery] = useState('')
  const deferredSearchQuery = useDeferredValue(searchQuery)

  const handleMonthSelect = (month: string) => {
    setSelectedMonth(month)
    // Reset day to 1 when changing month, or keep if valid? Resetting is safer.
    setSelectedDay(1)
  }

  const eventsLocal = events && events.length > 0 ? events : MOCK_EVENTS

  return (
    <div className="flex flex-col w-full items-start gap-[15px] relative">
      <div className="relative w-full h-auto rounded-[20px] overflow-hidden shadow-[0px_10px_30px_#00000012] bg-white z-0">
        <div className="w-full h-full flex rounded-[0px_0px_var(--demo-edublink-co-radius-4)_var(--demo-edublink-co-radius-4)]">
          <div className="mt-[22.3px] w-full h-auto px-4 flex-col items-start gap-7 flex relative">
            <MonthCarousel
              selectedMonth={selectedMonth}
              onMonthSelect={handleMonthSelect}
              currentMonthIndex={currentMonthIndex}
            />
            <div className="w-full flex justify-start items-start">
              <div className="self-stretch w-full">
                <SearchInput
                  value={searchQuery}
                  onChange={setSearchQuery}
                  className="w-full h-11 px-3 py-2"
                />
              </div>
            </div>

            <DayCarousel
              selectedMonth={selectedMonth}
              year={currentYear}
              selectedDay={selectedDay}
              onDaySelect={setSelectedDay}
            />

            <HeaderTitle
              titleFirstWorld="Eventos de"
              titleSecondWorld="DICIEMBRE"
              viewAll={false}
            />

            <div className="w-full grid grid-cols-3 gap-x-[15px] gap-y-[30px] pr-4 pb-10">
              {eventsLocal.map((event, index) => {
                return (
                  <EventHeroCard
                    key={index}
                    slug={event.slug}
                    title={event.title}
                    date={event.date}
                    location={event.location || ''}
                    description={event.description}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventMainSection
