import Image from 'next/image'
import { ContainerIcon } from '../icons/ContainerIcon'

const CardNews: React.FC = () => {
  return (
    <div className="w-96 flex justify-start items-center gap-4 whitespace-break-spaces">
      <Image
        alt="News thumbnail"
        className="rounded-[9.77px] object-cover"
        src="https://placehold.co/105x112.png"
        width={112}
        height={112}
      />
      <div className="w-72 h-24 inline-flex flex-col justify-start items-start gap-2">
        <div className="self-stretch flex flex-col justify-start items-start gap-[2.92px]">
          <div className="self-stretch h-4 flex flex-col justify-start items-start">
            <div className="self-stretch inline-flex justify-start items-start">
              <div className="w-80 justify-start text-neutral-900 text-sm font-semibold font-['Poppins'] leading-4">
                Taller interactivo de Inglés y Francés
              </div>
            </div>
          </div>
          <div className="self-stretch h-5 inline-flex justify-start items-start flex-wrap content-start">
            <div className="w-20 self-stretch py-[2.92px] inline-flex flex-col justify-center items-start">
              <div className="h-4 pb-[0.55px] inline-flex justify-start items-center gap-1.5">
                <div className="flex justify-start items-start">
                  <div className="w-2.5 h-2.5 relative">
                    {/* <div className="w-2.5 h-2.5 left-0 top-0 absolute bg-rose-800" /> */}
                    <ContainerIcon className="w-2.5 h-2.5 left-0 top-0 absolute" />
                  </div>
                </div>
                <div className="max-h-4 justify-start text-neutral-900 text-[8.76px] font-normal font-['Poppins'] leading-4">
                  15 Nov, 2023
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-16 flex flex-col justify-start items-start">
          <div className="self-stretch justify-start text-zinc-500 text-xs font-normal font-['Poppins'] leading-4">
            La Carrera de Negocios Internacionales organizó un taller
            interactivo de inglés y francés dirigido a postulantes..
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardNews
