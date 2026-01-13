import React from 'react'
import { ChevronIcon } from '../icons/ChevronIcon'

interface HeaderTitleProps {
  titleFirstWorld: string
  titleSecondWorld: string
  viewAll?: boolean
  link?: string
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({
  titleFirstWorld,
  titleSecondWorld,
  viewAll = true,
  link
}) => {
  return (
    <div className="flex items-center w-full justify-between relative">
      <div className="flex flex-col w-[400px] items-start relative">
        <div className="relative w-full h-6 flex items-start gap-2">
          <div className="relative font-['Poppins']  font-bold text-[#181818] text-[22px] tracking-[0] leading-6">
            {titleFirstWorld}
          </div>

          <div className="relative [-webkit-text-stroke:0.35px_#a90046db] font-['Poppins']  font-bold text-[#a90046db] text-[22px] tracking-[1.10px] leading-6">
            {titleSecondWorld}
          </div>
          <br />
          <div
            className="absolute top-6 -left-2 z-0"
            style={{
              width: '50px',
              height: '50px',
              border: 'solid 2px #000',
              borderColor: '#A81549 transparent transparent transparent',
              borderRadius: '50% / 10px 10px 10px 0'
            }}
          ></div>
        </div>
      </div>

      {viewAll && (
        <div className="flex w-[99px] h-[26px] items-center gap-[12.79px] relative cursor-pointer hover:opacity-80 transition-opacity">
          <div className="inline-flex items-start relative flex-[0_0_auto]">
            {/* <div className="relative w-fit mt-[-0.99px] font-['Poppins'] font-medium text-[#a90046] text-[12.5px] tracking-[0] leading-[25.6px] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:0] [-webkit-box-orient:vertical]">
              Ver todas
            </div> */}
            <a
              href={link}
              className="text-ucsg-secondary text-sm font-medium whitespace-nowrap font-['Poppins'] hover:underline flex items-center"
            >
              Ver todas{' '}
            </a>
          </div>

          <ChevronIcon className="relative w-[17.05px] h-[17.05px] aspect-[1]" />
        </div>
      )}
    </div>
  )
}

export default HeaderTitle
