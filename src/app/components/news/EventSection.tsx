'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import HeaderTitle from '../ui/HeaderTitle'
import ClientOnly from '../ui/ClientOnly'
import { ContainerIcon } from '../icons/ContainerIcon'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import DayCarousel from '../shared/DayCarousel'

const events = [
  {
    id: 1,
    title: 'Taller interactivo de Inglés y Francés',
    date: '15 Nov, 2023',
    description:
      'La Carrera de Negocios Internacionales organizó un taller interactivo de inglés y francés dirigido a postulantes, con palabras de bienvenida a cargo de su directora... La Carrera de Negocios Internacionales organizó un taller interactivo de inglés y francés dirigido a postulantes, con palabras de bienvenida a cargo de su directora...La Carrera de Negocios Internacionales...',
    image: 'https://placehold.co/417x206.png'
  },
  {
    id: 2,
    title: 'Conferencia de Marketing Digital',
    date: '20 Nov, 2023',
    description:
      'Expertos en marketing digital comparten las últimas tendencias y estrategias para el éxito en redes sociales y comercio electrónico. Un evento imperdible para estudiantes y profesionales.',
    image: 'https://placehold.co/417x206.png'
  },
  {
    id: 3,
    title: 'Feria de Emprendimiento Universitario',
    date: '25 Nov, 2023',
    description:
      'Estudiantes presentan sus proyectos innovadores ante un jurado de empresarios e inversores. Descubre el talento y la creatividad de nuestra comunidad universitaria.',
    image: 'https://placehold.co/417x206.png'
  }
]

const EventsSection: React.FC = () => {
  const now = new Date()
  const currentMonth = String(now.getMonth() + 1).padStart(2, '0')
  const currentMonthIndex = now.getMonth()
  const [selectedMonth, setSelectedMonth] = useState<string>(currentMonth)
  const currentYear = now.getFullYear()
  const [selectedDay, setSelectedDay] = useState<number>(now.getDate())

  return (
    <div className="flex flex-col w-full xl:w-1/3 items-stretch gap-[15px] relative h-full">
      <HeaderTitle
        titleFirstWorld="Últimos"
        titleSecondWorld="EVENTOS"
        link="/eventos"
      />
      <div className="relative w-full flex-1 min-h-[635px] rounded-[20px] overflow-hidden shadow-[0px_10px_30px_#00000012]">
        <div className="w-full h-full bg-white rounded-[0px_0px_var(--demo-edublink-co-radius-4)_var(--demo-edublink-co-radius-4)]">
          <div className="flex w-auto justify-center h-full pt-4 mx-[27px] relative flex-col items-start gap-[22px] pb-4">
            <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className='relative w-full font-["Poppins"] font-bold text-[#181818] text-xl leading-[22px]'>
                Martes, 25 de noviembre
              </div>
            </div>

            {/* <div className="self-stretch w-full relative bg-neutral-50 rounded-lg p-4">
              <div className="flex justify-between w-full items-center gap-2 overflow-x-auto">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <div
                    key={index}
                    className={`w-14 h-16 relative flex flex-col items-center justify-center shrink-0 rounded-lg border ${index === 1 ? 'bg-rose-800/10 border-rose-800' : 'bg-white border-zinc-300'}`}
                  >
                    <div className="flex flex-col items-center gap-0">
                      <span className="text-stone-500 text-sm font-medium font-['Poppins'] uppercase">
                        LUN
                      </span>
                      <span className="text-black text-2xl font-medium font-['Poppins']">
                        21
                      </span>
                    </div>
                    {(index === 0 || index === 1) && (
                      <div className="flex gap-[3px] absolute bottom-1.5 left-2">
                        <div className="w-[5px] h-[5px] bg-teal-400 rounded-full" />
                        <div className="w-[5px] h-[5px] bg-teal-400 rounded-full" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div> */}

            <DayCarousel
              selectedMonth={selectedMonth}
              year={currentYear}
              selectedDay={selectedDay}
              onDaySelect={setSelectedDay}
            />

            <div className="flex-1 min-h-0 w-full flex flex-col justify-center items-center gap-4 relative">
              <ClientOnly>
                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  className="w-full h-full pb-10 [&_.swiper-pagination]:bottom-0! [&_.swiper-pagination-bullet]:bg-zinc-300! [&_.swiper-pagination-bullet]:opacity-100! [&_.swiper-pagination-bullet]:w-3! [&_.swiper-pagination-bullet]:h-3! [&_.swiper-pagination-bullet-active]:bg-rose-700!"
                >
                  {events.map((event) => (
                    <SwiperSlide key={event.id}>
                      <div className="w-full h-full inline-flex flex-col justify-start items-center gap-4 pb-28">
                        <div className="relative w-full h-52 shrink-0">
                          <Image
                            className="rounded-[9.77px] object-cover"
                            src={event.image}
                            alt={event.title}
                            fill
                          />
                        </div>

                        <div className="self-stretch flex flex-col justify-start items-start gap-2">
                          <div className="self-stretch flex flex-col justify-start items-start gap-[2.92px]">
                            <div className="self-stretch flex flex-col justify-start items-start">
                              <div className="self-stretch inline-flex justify-start items-start">
                                <div className="w-full justify-start text-neutral-900 text-sm font-semibold font-['Poppins'] leading-4 truncate">
                                  {event.title}
                                </div>
                              </div>
                            </div>
                            <div className="self-stretch inline-flex justify-start items-start flex-wrap content-start">
                              <div className="w-full py-[2.92px] inline-flex flex-col justify-center items-start">
                                <div className="pb-[0.55px] inline-flex justify-start items-center gap-1.5">
                                  <div className="flex justify-start items-start">
                                    <ContainerIcon className="w-2.5 h-2.5" />
                                  </div>
                                  <div className="justify-start text-neutral-900 text-[8.76px] font-normal font-['Poppins'] leading-4">
                                    {event.date}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch h-full flex flex-col justify-start items-start">
                            <div className="self-stretch justify-start text-zinc-500 text-xs font-normal font-['Poppins'] leading-4 h-12">
                              {event.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </ClientOnly>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventsSection
