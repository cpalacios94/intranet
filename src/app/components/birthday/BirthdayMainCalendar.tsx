'use client'
import React, { useMemo } from 'react'
import { ScrollShadow } from '@heroui/scroll-shadow'
import BirthdayDayCard from './BirthdayDayCard'
import { Birthday } from '../../types/birthday'

interface BirthdayMainCalendarProps {
  birthdays: Birthday[]
  showMonth?: boolean
}

const BirthdayMainCalendar: React.FC<BirthdayMainCalendarProps> = React.memo(
  ({ birthdays, showMonth = false }) => {
    // Group birthdays by day - memoize this expensive operation
    const birthdaysByDay = useMemo(() => {
      return birthdays.reduce((acc, birthday) => {
        const day = birthday.dia
        if (!acc[day]) {
          acc[day] = []
        }
        acc[day].push(birthday)
        return acc
      }, {} as Record<string, Birthday[]>)
    }, [birthdays])

    // Sort days
    const sortedDays = useMemo(
      () => Object.keys(birthdaysByDay).sort(),
      [birthdaysByDay]
    )

    return (
      <div className="w-full flex flex-col justify-start items-start gap-7">
        <ScrollShadow
          className="w-full h-[350px] overflow-y-auto overflow-x-hidden"
          size={40}
          hideScrollBar
        >
          <div className="grid grid-cols-4 gap-8 items-start">
            {sortedDays.map((day) => (
              <BirthdayDayCard
                key={day}
                day={day}
                people={birthdaysByDay[day]}
                showMonth={showMonth}
              />
            ))}
          </div>
        </ScrollShadow>
      </div>
    )
  }
)

BirthdayMainCalendar.displayName = 'BirthdayMainCalendar'

export default BirthdayMainCalendar
