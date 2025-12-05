import { FacebookIcon } from './icons/FacebookIcon'
import { InstagramIcon } from './icons/InstagramIcon'
import { LinkedinIcon } from './icons/LinkedinIcon'
import { TwitterIcon } from './icons/TwitterIcon'
import { EmailIcon } from './icons/EmailIcon'
import { LanguageIcon } from './icons/LanguageIcon'
import { GiftIcon } from './icons/GiftIcon'
import React from 'react'

const TopBar: React.FC = () => {
  return (
    <>
      <div className="w-full h-16 bg-ucsg-primary flex justify-end">
        <div
          className="w-[612px] h-20 bg-neutral-900 inline-flex items-center gap-8 justify-center"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 30px 100%)' }}
        >
          <div className="inline-flex justify-start items-start gap-8">
            <FacebookIcon className="text-white w-8 h-8" />
            <InstagramIcon className="text-white w-8 h-8" />
            <LinkedinIcon className="text-white w-8 h-8" />
            <TwitterIcon className="text-white w-8 h-8" />
          </div>
          <div className="inline-flex w-[3px] h-12 bg-white" />
          <div className="inline-flex justify-start items-start gap-8">
            <EmailIcon className="text-white w-8 h-8" />
            <LanguageIcon className="text-white w-8 h-8" />
            <GiftIcon className="text-white w-8 h-8" />
          </div>
        </div>
      </div>
    </>

    // <div className="bg-gray-900 text-white py-2 px-4 md:px-12 flex justify-end items-center gap-6 text-sm relative overflow-hidden">
    //   {/* Decoración Roja en la esquina superior */}
    //   <div className="absolute top-0 right-0 w-32 h-full bg-[#9d1e43] -skew-x-12 translate-x-10 z-0"></div>

    //   <div className="flex gap-4 z-10 border-r border-gray-600 pr-4">
    //     <Facebook size={16} className="cursor-pointer hover:text-gray-300" />
    //     <Twitter size={16} className="cursor-pointer hover:text-gray-300" />
    //     <Instagram size={16} className="cursor-pointer hover:text-gray-300" />
    //     <Linkedin size={16} className="cursor-pointer hover:text-gray-300" />
    //   </div>
    //   <div className="flex gap-4 z-10 pl-2">
    //     <Mail size={16} className="cursor-pointer hover:text-gray-300" />
    //     <Globe size={16} className="cursor-pointer hover:text-gray-300" />
    //     <Gift size={16} className="cursor-pointer hover:text-gray-300" />
    //   </div>
    // </div>
  )
}

export default TopBar
