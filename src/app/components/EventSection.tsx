import React from 'react'
import { Calendar } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { CALENDAR_DAYS, EVENT_ITEM } from '../constants'

const EventsSection: React.FC = () => {
  return (
    <div className="lg:col-span-4">
      <SectionHeader title="Últimos" highlight="EVENTOS" link="#" />

      <div className="bg-white rounded-xl p-6 shadow-md h-full">
        <h3 className="font-bold text-lg text-gray-800 mb-4">
          Martes, 25 de noviembre
        </h3>

        {/* Carrusel Calendario */}
        <div className="flex justify-between mb-6 gap-2 overflow-x-auto pb-2 no-scrollbar">
          {CALENDAR_DAYS.map((day, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center p-2 rounded-lg min-w-14 border cursor-pointer transition-all ${
                day.active
                  ? 'border-[#9d1e43] bg-pink-50 transform scale-105'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <span className="text-xs text-gray-500 uppercase">{day.day}</span>
              <span
                className={`text-xl font-bold ${
                  day.active ? 'text-[#9d1e43]' : 'text-gray-800'
                }`}
              >
                {day.date}
              </span>
              {/* Puntos de estado */}
              <div className="flex gap-1 mt-1">
                <div
                  className={`w-1 h-1 rounded-full ${
                    day.active ? 'bg-teal-400' : 'bg-teal-400 opacity-50'
                  }`}
                ></div>
                <div
                  className={`w-1 h-1 rounded-full ${
                    day.active ? 'bg-teal-400' : 'hidden'
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Tarjeta de Evento */}
        <div className="rounded-xl overflow-hidden mb-4 group cursor-pointer">
          <div className="overflow-hidden rounded-lg mb-4">
            <img
              src={EVENT_ITEM.image}
              alt="Evento"
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <h3 className="font-bold text-gray-800 mb-2 group-hover:text-[#9d1e43]">
            {EVENT_ITEM.title}
          </h3>
          <div className="flex items-center text-[#9d1e43] text-xs font-semibold mb-3">
            <Calendar size={14} className="mr-1" /> {EVENT_ITEM.date}
          </div>
          <p className="text-gray-500 text-sm mb-6">{EVENT_ITEM.description}</p>

          {/* Indicadores de slide */}
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#9d1e43] cursor-pointer"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventsSection
