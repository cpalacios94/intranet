import { PersonIcon } from './icons/PersonIcon'
import { BadgeIcon } from './icons/BadgeIcon'
import { CallIcon } from './icons/CallIcon'
import { MailIcon } from './icons/MailIcon'

const ContactCard = () => {
  return (
    <div className="w-full h-36 flex p-3.5 relative bg-white rounded-[5px] shadow-[0px_0px_11.600000381469727px_0px_rgba(128,128,128,0.25)] border-l-[3px] border-rose-800/90">
      <div className="w-full justify-between align-start relative flex flex-col items-start gap-3">
        <div className="h-4 inline-flex justify-start items-center gap-1.5">
          <PersonIcon className="w-6 h-6" />
          <div className="flex-1 flex justify-start items-start">
            <div className="w-full justify-start text-neutral-900 text-sm font-normal font-['Poppins'] leading-4">
              Nombre Apellido
            </div>
          </div>
        </div>
        <div className="h-4 inline-flex justify-start items-center gap-1.5">
          <BadgeIcon className="w-6 h-6" />
          <div className="flex-1 flex justify-start items-start">
            <div className="w-full justify-start text-neutral-900 text-sm font-normal font-['Poppins'] leading-4">
              Nombre del cargo
            </div>
          </div>
        </div>
        <div className="h-4 inline-flex justify-start items-center gap-1.5">
          <CallIcon className="w-6 h-6" />
          <div className="flex-1 flex justify-start items-start">
            <div className="w-full justify-start text-neutral-900 text-sm font-normal font-['Poppins'] leading-4">
              Extensión
            </div>
          </div>
        </div>
        <div className="h-4 inline-flex justify-start items-center gap-1.5">
          <MailIcon className="w-6 h-6" />
          <div className="flex-1 flex justify-start items-start">
            <div className="w-full justify-start text-neutral-900 text-sm font-normal font-['Poppins'] leading-4">
              correo@ucsg.edu.ec
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactCard
