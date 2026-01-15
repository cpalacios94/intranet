'use client'

import { Button } from '@heroui/button'

const GestorBanner: React.FC = () => {
  return (
    <div className="w-full h-56 flex flex-col justify-center items-center bg-ucsg-cuarto rounded-xl gap-4">
      <div className="w-full inline-flex justify-center items-center gap-3.5">
        <div className="w-full flex gap-2 justify-center items-center relative">
          <div className="relative justify-start text-neutral-900 text-xl font-bold font-['Poppins'] leading-6">
            ¿Tienes dudas sobre algún{''}
            <div
              className="absolute top-6 -left-2 z-0"
              style={{
                width: '50px',
                height: '50px',
                border: 'solid 2px #000',
                borderColor: '#A81549 transparent transparent transparent',
                borderRadius: '50% / 10px 10px 10px 0'
              }}
            ></div>
          </div>
          <div className="justify-start text-rose-800/90 text-xl font-bold font-['Poppins'] leading-6 tracking-wide">
            proceso o funcionalidad?
          </div>
        </div>
      </div>
      <div className="w-full h-7 inline-flex flex-col justify-center items-center">
        <div className="self-stretch inline-flex justify-center items-center">
          <div className="w-full text-center justify-center text-neutral-900 text-base font-medium font-['Poppins'] leading-5">
            Visita nuestro Gestor Documental, donde encontrarás manuales, guías
            y documentación de apoyo para resolver tus consultas.
          </div>
        </div>
      </div>
      <Button className="bg-ucsg-primary flex justify-center items-center text-white font-normal font-['Poppins']">
        Ir al gestor documental
      </Button>
    </div>
  )
}

export default GestorBanner
