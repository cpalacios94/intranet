import React from 'react'

interface DayCardProps {
  dayNumber: string | number
  dayName: string
  isActive?: boolean
  onClick?: () => void
}

const DayCard: React.FC<DayCardProps> = ({
  dayNumber,
  dayName,
  isActive = false,
  onClick
}) => {
  return (
    <div
      className={`w-14 h-16 relative rounded-lg outline -outline-offset-1 cursor-pointer transition-all ${
        isActive
          ? 'bg-rose-800/10 outline-1 outline-rose-800'
          : 'bg-white outline-zinc-300'
      }`}
      onClick={onClick}
    >
      <div className="w-full h-full items-center left-0 top-0 absolute flex flex-col justify-center self-center gap-2.5">
        <div className="self-stretch justify-start text-stone-500 text-sm text-center font-medium font-['Poppins'] leading-4">
          {dayName}
        </div>
        <div className="self-stretch justify-start text-black text-2xl font-medium text-center font-['Poppins'] leading-4">
          {dayNumber}
        </div>
      </div>
    </div>
  )
}

export default DayCard
