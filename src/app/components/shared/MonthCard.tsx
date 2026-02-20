import React from 'react'

interface MonthCardProps {
  month: string
  isActive?: boolean
  onClick?: () => void
}

const MonthCard: React.FC<MonthCardProps> = ({
  month,
  isActive = false,
  onClick
}) => {
  return (
    <div
      className="w-full relative flex flex-col items-center gap-4 cursor-pointer"
      onClick={onClick}
      data-active={isActive}
    >
      <div
        className={`w-full h-16 relative rounded-lg outline -outline-offset-1 ${
          isActive
            ? 'bg-rose-800/5 outline-rose-800'
            : 'bg-white outline-zinc-300'
        }`}
      >
        <div className="w-full h-full relative flex flex-col justify-center items-center gap-2.5">
          <div
            className={`justify-start text-xl font-medium font-['Poppins'] leading-4 ${
              isActive ? 'text-rose-800' : 'text-black'
            }`}
          >
            {month}
          </div>
        </div>
      </div>
      <div className="left-0 top-0 relative justify-center inline-flex items-center gap-[3px]">
        <div className="w-[5px] h-[5px] bg-teal-400 rounded-[38px]" />
        <div className="w-[5px] h-[5px] bg-teal-400 rounded-[38px]" />
      </div>
    </div>
  )
}

export default MonthCard
