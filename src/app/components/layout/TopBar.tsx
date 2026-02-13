import { FacebookIcon } from '../icons/FacebookIcon'
import { InstagramIcon } from '../icons/InstagramIcon'
import { LinkedinIcon } from '../icons/LinkedinIcon'
import { TwitterIcon } from '../icons/TwitterIcon'
import { EmailIcon } from '../icons/EmailIcon'
import { LanguageIcon } from '../icons/LanguageIcon'
import { GiftIcon } from '../icons/GiftIcon'
import React from 'react'
import Link from 'next/link'

const TopBar: React.FC = () => {
  return (
    <>
      <div className="w-full h-16 bg-ucsg-primary flex justify-end">
        <div
          className="w-[612px] h-20 bg-neutral-900 inline-flex items-center gap-8 justify-center"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 30px 100%)' }}
        >
          <div className="inline-flex justify-start items-start gap-8">
            <Link
              href="https://www.facebook.com/UCSGye"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className="text-white w-8 h-8" />
            </Link>
            <Link
              href="https://www.instagram.com/ucsgye/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="text-white w-8 h-8" />
            </Link>
            <Link
              href="https://www.linkedin.com/school/universidad-catolica-de-santiago-de-guayaquil/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon className="text-white w-8 h-8" />
            </Link>
            <Link
              href="https://x.com/ucatolicagye"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon className="text-white w-8 h-8" />
            </Link>
          </div>
          <div className="inline-flex w-[3px] h-12 bg-white" />
          <div className="inline-flex justify-start items-start gap-8">
            <Link href="mailto:ucsg@ucsg.edu.ec">
              <EmailIcon className="text-white w-8 h-8" />
            </Link>
            <Link
              href="https://www.ucsg.edu.ec"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LanguageIcon className="text-white w-8 h-8" />
            </Link>
            <Link href="/cumpleanios">
              <GiftIcon className="text-white w-8 h-8" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopBar
