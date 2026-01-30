import React from 'react'
import HeaderTitle from '../ui/HeaderTitle'
import MainNews from './MainNews'
import GridNews from './GridNews'

const NewsSection: React.FC = () => {
  return (
    <div className="flex flex-col w-full xl:w-2/3 items-stretch gap-[15px] relative h-full">
      <HeaderTitle
        titleFirstWorld="Últimas"
        titleSecondWorld="NOTICIAS"
        link="/noticias"
      />
      <div className="relative w-full flex-1 min-h-[635px] rounded-[20px] overflow-hidden shadow-[0px_10px_30px_#00000012]">
        <div className="w-full h-full flex bg-white rounded-[0px_0px_var(--demo-edublink-co-radius-4)_var(--demo-edublink-co-radius-4)]">
          <div className="w-full h-auto mx-4 py-4 flex-col items-start gap-7 flex relative">
            <MainNews />
            <GridNews />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsSection
