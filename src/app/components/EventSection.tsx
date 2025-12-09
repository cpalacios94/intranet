'use client'
import React from 'react'
import HeaderTitle from './HeaderTitle'
import { ContainerIcon } from './icons/ContainerIcon'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const events = [
  {
    id: 1,
    title: 'Taller interactivo de Inglés y Francés',
    date: '15 Nov, 2023',
    description:
      'La Carrera de Negocios Internacionales organizó un taller interactivo de inglés y francés dirigido a postulantes, con palabras de bienvenida a cargo de su directora... La Carrera de Negocios Internacionales organizó un taller interactivo de inglés y francés dirigido a postulantes, con palabras de bienvenida a cargo de su directora...La Carrera de Negocios Internacionales...',
    image: 'https://placehold.co/417x206'
  },
  {
    id: 2,
    title: 'Conferencia de Marketing Digital',
    date: '20 Nov, 2023',
    description:
      'Expertos en marketing digital comparten las últimas tendencias y estrategias para el éxito en redes sociales y comercio electrónico. Un evento imperdible para estudiantes y profesionales.',
    image: 'https://placehold.co/417x206'
  },
  {
    id: 3,
    title: 'Feria de Emprendimiento Universitario',
    date: '25 Nov, 2023',
    description:
      'Estudiantes presentan sus proyectos innovadores ante un jurado de empresarios e inversores. Descubre el talento y la creatividad de nuestra comunidad universitaria.',
    image: 'https://placehold.co/417x206'
  }
]

const EventsSection: React.FC = () => {
  return (
    <div className="flex flex-col w-1/3 items-start gap-[15px] relative">
      <HeaderTitle />
      <div className="relative w-full h-[635px] rounded-[20px] overflow-hidden shadow-[0px_10px_30px_#00000012]">
        <div className="w-full h-[874px] bg-white rounded-[0px_0px_var(--demo-edublink-co-radius-4)_var(--demo-edublink-co-radius-4)]">
          <div className="flex mt-[22px] w-auto justify-center h-[603px] mx-[27px] relative flex-col items-start gap-[22px]">
            <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className='relative w-[320.59px] mt-[-0.86px] font-["Poppins"] font-bold text-[#181818] text-xl tracking-[0] leading-[22px]'>
                Martes, 25 de noviembre
              </div>
            </div>
            <div className="self-stretch h-36 relative bg-neutral-50 rounded-lg">
              <div className="left-0 top-[13.98px] absolute flex justify-between w-full p-[0%_5%] items-center gap-4">
                <div className="w-14 h-16 relative bg-white rounded-lg outline -outline-offset-1 outline-zinc-300">
                  <div className="w-6 left-[15px] top-[10px] absolute inline-flex flex-col justify-start items-end gap-2.5">
                    <div className="self-stretch justify-start text-stone-500 text-sm font-medium font-['Poppins'] leading-4">
                      LUN
                    </div>
                    <div className="self-stretch justify-start text-black text-2xl font-medium font-['Poppins'] leading-4">
                      21
                    </div>
                  </div>
                  <div className="left-[22px] top-[77px] absolute inline-flex justify-start items-start gap-[3px]">
                    <div className="w-[5px] h-[5px] bg-teal-400 rounded-[38px]" />
                    <div className="w-[5px] h-[5px] bg-teal-400 rounded-[38px]" />
                  </div>
                </div>
                <div className="w-14 h-16 relative bg-rose-800/10 rounded-lg outline-1 -outline-offset-1 outline-rose-800">
                  <div className="w-6 left-[15px] top-[10px] absolute inline-flex flex-col justify-start items-end gap-2.5">
                    <div className="self-stretch justify-start text-stone-500 text-sm font-medium font-['Poppins'] leading-4">
                      LUN
                    </div>
                    <div className="self-stretch justify-start text-black text-2xl font-medium font-['Poppins'] leading-4">
                      21
                    </div>
                  </div>
                  <div className="left-[22px] top-[77px] absolute inline-flex justify-start items-start gap-[3px]">
                    <div className="w-[5px] h-[5px] bg-teal-400 rounded-[38px]" />
                    <div className="w-[5px] h-[5px] bg-teal-400 rounded-[38px]" />
                  </div>
                </div>
                <div className="w-14 h-16 relative bg-white rounded-lg outline -outline-offset-1 outline-zinc-300">
                  <div className="w-6 left-[15px] top-[10px] absolute inline-flex flex-col justify-start items-end gap-2.5">
                    <div className="self-stretch justify-start text-stone-500 text-sm font-medium font-['Poppins'] leading-4">
                      LUN
                    </div>
                    <div className="self-stretch justify-start text-black text-2xl font-medium font-['Poppins'] leading-4">
                      21
                    </div>
                  </div>
                  <div className="left-[22px] top-[77px] absolute inline-flex justify-start items-start gap-[3px]">
                    <div className="w-[5px] h-[5px] bg-teal-400 rounded-[38px]" />
                    <div className="w-[5px] h-[5px] bg-teal-400 rounded-[38px]" />
                  </div>
                </div>
                <div className="w-14 h-16 relative bg-white rounded-lg outline-1 -outline-offset-1 outline-zinc-300">
                  <div className="w-6 left-[15px] top-[10px] absolute inline-flex flex-col justify-start items-end gap-2.5">
                    <div className="self-stretch justify-start text-stone-500 text-sm font-medium font-['Poppins'] leading-4">
                      LUN
                    </div>
                    <div className="self-stretch justify-start text-black text-2xl font-medium font-['Poppins'] leading-4">
                      21
                    </div>
                  </div>
                  <div className="left-[22px] top-[77px] absolute inline-flex justify-start items-start gap-[3px]">
                    <div className="w-[5px] h-[5px] bg-teal-400 rounded-[38px]" />
                    <div className="w-[5px] h-[5px] bg-teal-400 rounded-[38px]" />
                  </div>
                </div>
                <div className="w-14 h-16 relative bg-white rounded-lg outline-1 -outline-offset-1 outline-zinc-300">
                  <div className="w-6 left-[15px] top-[10px] absolute inline-flex flex-col justify-start items-end gap-2.5">
                    <div className="self-stretch justify-start text-stone-500 text-sm font-medium font-['Poppins'] leading-4">
                      LUN
                    </div>
                    <div className="self-stretch justify-start text-black text-2xl font-medium font-['Poppins'] leading-4">
                      21
                    </div>
                  </div>
                  <div className="left-[22px] top-[77px] absolute inline-flex justify-start items-start gap-[3px]">
                    <div className="w-[5px] h-[5px] bg-teal-400 rounded-[38px]" />
                    <div className="w-[5px] h-[5px] bg-teal-400 rounded-[38px]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full w-full flex flex-col justify-center items-center gap-4 relative">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                className="w-full h-full [&_.swiper-pagination-bullet]:bg-zinc-300! [&_.swiper-pagination-bullet]:opacity-100! [&_.swiper-pagination-bullet]:w-3! [&_.swiper-pagination-bullet]:h-3! [&_.swiper-pagination-bullet-active]:bg-rose-700!"
              >
                {events.map((event) => (
                  <SwiperSlide key={event.id}>
                    <div className="w-full h-full inline-flex flex-col justify-start items-center gap-4">
                      <img
                        className="self-stretch h-52 rounded-[9.77px] object-cover"
                        src={event.image}
                        alt={event.title}
                      />
                      <div className="self-stretch flex flex-col justify-start items-start gap-2">
                        <div className="self-stretch flex flex-col justify-start items-start gap-[2.92px]">
                          <div className="self-stretch h-4 flex flex-col justify-start items-start">
                            <div className="self-stretch inline-flex justify-start items-start">
                              <div className="w-80 justify-start text-neutral-900 text-sm font-semibold font-['Poppins'] leading-4 truncate">
                                {event.title}
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch h-5 inline-flex justify-start items-start flex-wrap content-start">
                            <div className="w-20 self-stretch py-[2.92px] inline-flex flex-col justify-center items-start">
                              <div className="h-4 pb-[0.55px] inline-flex justify-start items-center gap-1.5">
                                <div className="flex justify-start items-start">
                                  <div className="w-2.5 h-2.5 relative">
                                    <ContainerIcon className="w-2.5 h-2.5 left-0 top-0 absolute" />
                                  </div>
                                </div>
                                <div className="max-h-4 justify-start text-neutral-900 text-[8.76px] font-normal font-['Poppins'] leading-4">
                                  {event.date}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch h-full flex flex-col justify-start items-start">
                          <div className="self-stretch justify-start text-zinc-500 text-xs font-normal font-['Poppins'] leading-4">
                            {event.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/* <FrameWrapper />
            <DivWrapper />
            <Div /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventsSection
