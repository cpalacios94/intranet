import React from 'react'
import { UcsgIcon } from './icons/UcsgIcon'
import { IntranetIcon } from './icons/IntranetIcon'

const Header: React.FC = () => {
  return (
    // <header className="bg-white py-6 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center shadow-sm">

    <header className="h-36 bg-white grid grid-cols-[1fr_auto_1fr] mx-[10%] my-6">
      <div className="flex justify-start">
        <UcsgIcon className="w-72 h-14" />
      </div>
      <div className="flex justify-center">
        <IntranetIcon className="w-72 h-14" />
      </div>
      <div />
    </header>
  )
}

export default Header
