'use client'
import { useState, useMemo, useDeferredValue } from 'react'
import BirthdayMonthCarousel from './BirthdayMonthCarousel'
import SearchInput from './SearchInput'
import BirthdayMainCalendar from './BirthdayMainCalendar'
import { BirthdayBackground } from './BirthdayBackground'
import ClientOnly from './ClientOnly'
import { Birthday } from '../types/birthday'

interface BirthdayMainSectionProps {
  birthdays: Birthday[]
  initialMonth: string
  currentMonthIndex: number
}

const BirthdayMainSection: React.FC<BirthdayMainSectionProps> = ({
  birthdays,
  initialMonth,
  currentMonthIndex
}) => {
  // Initialize with initialMonth prop
  const [selectedMonth, setSelectedMonth] = useState<string>(initialMonth)
  const [searchQuery, setSearchQuery] = useState('')
  const deferredSearchQuery = useDeferredValue(searchQuery)

  // Use deferred value for filtering logic to unblock UI updates
  const isSearching = deferredSearchQuery.trim().length > 0

  // Memoize filtered results to avoid re-calculation on every render
  const filteredBirthdays = useMemo(() => {
    return birthdays.filter((birthday) => {
      // Always filter by selected month
      if (birthday.mes !== selectedMonth) return false

      // If searching, further filter by name
      if (isSearching) {
        return birthday.nombre
          .toLowerCase()
          .includes(deferredSearchQuery.toLowerCase())
      }
      return true
    })
  }, [birthdays, isSearching, deferredSearchQuery, selectedMonth])

  const handleMonthSelect = (month: string) => {
    setSelectedMonth(month)
    setSearchQuery('') // Clear search when selecting a month
  }

  return (
    <div className="flex flex-col w-full items-start gap-[15px] relative">
      <div className="relative w-full h-[635px] rounded-[20px] overflow-hidden shadow-[0px_10px_30px_#00000012] bg-white z-0">
        <ClientOnly>
          <BirthdayBackground />
        </ClientOnly>
        <div className="w-full h-full flex rounded-[0px_0px_var(--demo-edublink-co-radius-4)_var(--demo-edublink-co-radius-4)]">
          <div className="mt-[22.3px] w-full h-auto mx-4 flex-col items-start gap-7 flex relative">
            <BirthdayMonthCarousel
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
            <BirthdayMainCalendar
              birthdays={filteredBirthdays}
              showMonth={false}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BirthdayMainSection
