import React from 'react'
import { UcsgIcon } from './icons/UcsgIcon'
import { IntranetIcon } from './icons/IntranetIcon'

const Header: React.FC = () => {
  return (
    // <header className="bg-white py-6 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center shadow-sm">

    <header className="h-36 bg-white flex items-start mx-[10%] my-6 gap-12">
      <UcsgIcon className="w-72 h-14 mr-[10%]" />
      <IntranetIcon className="w-72 h-14" />

      {/* <div className="w-[1728px] h-36 bg-white shadow-[0px_30px_60px_0px_rgba(171,190,209,0.40)]" /> */}
      {/* <div className="flex items-center gap-4"> */}
      {/* Logo placeholder */}
      {/* <div className="text-[#9d1e43]">
          <Globe size={40} />
        </div>
        <div className="flex flex-col">
          <span className="text-xs tracking-widest text-[#9d1e43] font-bold">
            UNIVERSIDAD CATÓLICA
          </span>
          <span className="text-xs tracking-widest text-[#9d1e43]">
            DE SANTIAGO DE GUAYAQUIL
          </span>
        </div>
      </div>
      <h1 className="text-5xl font-light tracking-widest text-[#9d1e43] mt-4 md:mt-0 font-mono">
        iNTRANE<span className="font-bold">T</span>
      </h1> */}
    </header>
  )
}

export default Header
