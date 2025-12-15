import React from 'react'
import { Birthday } from '../types/birthday'

interface BirthdayDayCardProps {
  day: string
  people: Birthday[]
  showMonth?: boolean
}

const monthNames: Record<string, string> = {
  '01': 'Ene',
  '02': 'Feb',
  '03': 'Mar',
  '04': 'Abr',
  '05': 'May',
  '06': 'Jun',
  '07': 'Jul',
  '08': 'Ago',
  '09': 'Sep',
  '10': 'Oct',
  '11': 'Nov',
  '12': 'Dic'
}

const BirthdayDayCard: React.FC<BirthdayDayCardProps> = React.memo(
  ({ day, people, showMonth = false }) => {
    return (
      <div className="w-full flex justify-start items-start gap-4">
        <div className="w-12 h-12 relative bg-zinc-100 rounded-lg outline -outline-offset-1 outline-rose-800 shrink-0">
          <div className="left-0 top-0 relative flex h-full items-center text-center justify-center text-rose-800/90 text-2xl font-extrabold font-['Poppins'] leading-6 tracking-wide">
            {day}
          </div>
        </div>
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
          {people.map((person, index) => (
            <div
              key={index}
              className="self-stretch h-auto flex flex-col justify-start items-start"
            >
              <div className="self-stretch inline-flex justify-start items-start">
                <div className="w-full justify-start text-neutral-900 text-sm font-normal font-['Poppins'] leading-4">
                  <span className="capitalize">
                    {person.nombre.toLowerCase()}
                  </span>
                  {showMonth && (
                    <span className="text-neutral-500 ml-1">
                      ({monthNames[person.mes]})
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
)

export default BirthdayDayCard
