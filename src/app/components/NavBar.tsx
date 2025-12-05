import React from 'react'

const NavBar: React.FC = () => {
  return (
    <nav className="bg-black text-white h-20 mx-[10%] relative bottom-20 flex justify-between items-center pl-8">
      <div className="flex items-center gap-8 h-full overflow-x-auto no-scrollbar">
        <div className="flex justify-center items-center h-full text-base font-bold font-['Poppins'] cursor-pointer hover:text-gray-300 whitespace-nowrap">
          Inicio
        </div>
        <div className="flex justify-center items-center h-full text-base font-bold font-['Poppins'] cursor-pointer hover:text-gray-300 whitespace-nowrap">
          SIU
        </div>
        <div className="flex justify-center items-center h-full text-base font-bold font-['Poppins'] cursor-pointer hover:text-gray-300 whitespace-nowrap">
          SIU 2.0
        </div>
        <div className="flex justify-center items-center h-full text-base font-bold font-['Poppins'] cursor-pointer hover:text-gray-300 whitespace-nowrap">
          Servicios en línea administrativos
        </div>
        <div className="flex justify-center items-center h-full text-base font-bold font-['Poppins'] cursor-pointer hover:text-gray-300 whitespace-nowrap">
          Gestor documental
        </div>
        <div className="flex justify-center items-center h-full text-base font-bold font-['Poppins'] cursor-pointer hover:text-gray-300 whitespace-nowrap">
          Mesa de ayuda
        </div>
        <div className="flex justify-center items-center h-full text-base font-bold font-['Poppins'] cursor-pointer hover:text-gray-300 whitespace-nowrap">
          Acerca de la UCSG
        </div>
      </div>

      <div
        className="bg-ucsg-primary h-full flex items-center px-12 cursor-pointer hover:bg-ucsg-secondary transition-colors"
        style={{ clipPath: 'polygon(30px 0, 100% 0, 100% 100%, 0 100%)' }}
      >
        <div className="text-white text-base font-bold font-['Poppins']">
          Contacto
        </div>
      </div>
    </nav>
  )
}

export default NavBar
