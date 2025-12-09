import React from 'react'
import { ChevronIcon } from './icons/ChevronIcon'

const HeaderTitle: React.FC = () => {
  return (
    <div className="flex items-center w-full justify-between relative">
      <div className="flex flex-col w-[237px] items-start relative">
        <div className="relative w-[217.7px] h-6">
          <div className="absolute top-0 left-[calc(50.00%-109px)] font-['Poppins']  font-bold text-[#181818] text-[22px] tracking-[0] leading-6 whitespace-nowrap">
            Últimas
          </div>

          <div className="absolute top-0 left-[calc(50.00%-11px)] [-webkit-text-stroke:0.35px_#a90046db] font-['Poppins']  font-bold text-[#a90046db] text-[22px] tracking-[1.10px] leading-6 whitespace-nowrap">
            NOTICIAS
          </div>
          <br />
          <div
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

      <div className="flex w-[99px] h-[26px] items-center gap-[12.79px] relative">
        <div className="inline-flex items-start relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-0.99px] font-['Poppins'] font-medium text-[#a90046] text-[12.5px] tracking-[0] leading-[25.6px] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:0] [-webkit-box-orient:vertical]">
            Ver todas
          </div>
        </div>

        <ChevronIcon className="relative w-[17.05px] h-[17.05px] aspect-[1]" />
      </div>
    </div>
  )
}

export default HeaderTitle
