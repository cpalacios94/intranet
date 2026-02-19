'use client'
import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import ClientOnly from '../ui/ClientOnly'
import { ContainerIcon } from '../icons/ContainerIcon'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { ComunicacionEspecifica } from '@/app/types/comunicaciones'
import { formatDate } from '@/app/lib/utils'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import DayCarousel from '../shared/DayCarousel'

interface EventClientProps {
  events: ComunicacionEspecifica[]
}

const EventClient: React.FC<EventClientProps> = ({ events }) => {
  const now = new Date()
  const currentMonth = String(now.getMonth() + 1).padStart(2, '0')
  const currentYear = now.getFullYear()
  const [selectedMonth, setSelectedMonth] = useState<string>(currentMonth)
  const [selectedDay, setSelectedDay] = useState<number>(now.getDate())

  // Filtrar eventos por la fecha seleccionada
  const filteredEvents = useMemo(() => {
    const monthIndex = parseInt(selectedMonth, 10) - 1
    return events.filter((event) => {
      const [year, month, day] = event.fecInicio
        .split('T')[0]
        .split('-')
        .map(Number)
      const eventDate = new Date(year, month - 1, day)
      return (
        eventDate.getDate() === selectedDay &&
        eventDate.getMonth() === monthIndex &&
        eventDate.getFullYear() === currentYear
      )
    })
  }, [events, selectedDay, selectedMonth, currentYear])

  return (
    <>
      <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
        <div className='relative w-full font-["Poppins"] font-bold text-[#181818] text-xl leading-[22px]'>
          {(() => {
            const monthIndex = parseInt(selectedMonth, 10) - 1
            const date = new Date(currentYear, monthIndex, selectedDay)
            const dayName = date.toLocaleDateString('es-ES', {
              weekday: 'long'
            })
            const monthName = date.toLocaleDateString('es-ES', {
              month: 'long'
            })
            const capitalize = (s: string) =>
              s.charAt(0).toUpperCase() + s.slice(1)
            return `${capitalize(dayName)}, ${selectedDay} de ${monthName}`
          })()}
        </div>
      </div>

      <DayCarousel
        selectedMonth={selectedMonth}
        year={currentYear}
        selectedDay={selectedDay}
        onDaySelect={setSelectedDay}
      />

      <div className="flex-1 min-h-0 w-full flex flex-col justify-center items-center gap-4 relative">
        {filteredEvents.length === 0 ? (
          <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 gap-2 py-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
            <p className="text-sm font-['Poppins'] font-medium">
              No hay eventos para esta fecha
            </p>
          </div>
        ) : (
          <ClientOnly>
            <Swiper
              key={`${selectedMonth}-${selectedDay}`}
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="w-full h-full pb-10 [&_.swiper-pagination]:bottom-0! [&_.swiper-pagination-bullet]:bg-zinc-300! [&_.swiper-pagination-bullet]:opacity-100! [&_.swiper-pagination-bullet]:w-3! [&_.swiper-pagination-bullet]:h-3! [&_.swiper-pagination-bullet-active]:bg-rose-700!"
            >
              {filteredEvents.map((event) => (
                <SwiperSlide key={event.codigo}>
                  <div className="w-full h-full inline-flex flex-col justify-start items-center gap-4 pb-28">
                    <div className="relative w-full h-52 shrink-0">
                      <Image
                        className="rounded-[9.77px] object-cover"
                        src={
                          event.dirImagen || 'https://placehold.co/417x206.png'
                        }
                        alt={event.titulo}
                        fill
                      />
                    </div>

                    <div className="self-stretch flex flex-col justify-start items-start gap-2">
                      <div className="self-stretch flex flex-col justify-start items-start gap-[2.92px]">
                        <div className="self-stretch flex flex-col justify-start items-start">
                          <div className="self-stretch inline-flex justify-start items-start">
                            <div className="w-full justify-start text-neutral-900 text-sm font-semibold font-['Poppins'] leading-4 truncate">
                              {event.titulo}
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
                                {formatDate(event.fecInicio)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-full flex flex-col justify-start items-start">
                        <div className="self-stretch justify-start text-zinc-500 text-xs font-normal font-['Poppins'] leading-4 h-12">
                          {event.descripcion}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </ClientOnly>
        )}
      </div>
    </>
  )
}

export default EventClient
