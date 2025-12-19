import { ChevronIcon } from '../icons/ChevronIcon'

const DirectoryMenu: React.FC = () => {
  return (
    <div className="flex flex-col w-1/4 items-start gap-[15px] relative">
      <div className="relative w-full h-[635px] rounded-[20px] overflow-hidden shadow-[0px_10px_30px_#00000012]">
        <div className="w-full h-full flex bg-white rounded-[0px_0px_var(--demo-edublink-co-radius-4)_var(--demo-edublink-co-radius-4)]">
          {/* <div className="mt-[22.3px] w-full h-[579.65px] mx-4 flex-col items-start gap-7 flex relative"></div> */}
          <div className="w-80 left-[20px] top-[39px] absolute inline-flex flex-col justify-start items-start gap-5">
            <div className="flex flex-col justify-start items-start gap-2">
              <div className="inline-flex justify-start items-center gap-2">
                <ChevronIcon className="relative w-6 h-6" />
                <div className="flex-1 flex justify-start items-start">
                  <div className="w-80 justify-start text-neutral-900 text-sm font-normal font-['Poppins'] leading-4">
                    Dirección de desarrollo tecnológico
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start gap-2 pl-[30px]">
                <div className="h-4 inline-flex justify-start items-center gap-3">
                  <div className="flex-1 flex justify-start items-start">
                    <div className="w-80 justify-start text-neutral-900 text-sm font-normal font-['Poppins'] leading-4">
                      Financiero
                    </div>
                  </div>
                </div>
                <div className="h-4 inline-flex justify-start items-center gap-3">
                  <div className="flex-1 flex justify-start items-start">
                    <div className="w-80 justify-start text-neutral-900 text-sm font-normal font-['Poppins'] leading-4">
                      Académico
                    </div>
                  </div>
                </div>
                <div className="h-4 inline-flex justify-start items-center gap-3">
                  <div className="flex-1 flex justify-start items-start">
                    <div className="w-80 justify-start text-neutral-900 text-sm font-normal font-['Poppins'] leading-4">
                      Plataforma
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="self-stretch h-4 inline-flex justify-start items-center gap-3">
                <div className="w-0 h-6 bg-zinc-300" />
                <div className="w-0 h-3 bg-black" />
                <div className="flex-1 flex justify-start items-start">
                  <div className="w-80 justify-start text-neutral-900 text-sm font-normal font-['Poppins'] leading-4">
                    Financiero
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="self-stretch h-4 inline-flex justify-start items-center gap-3">
                <div className="w-0 h-6 bg-zinc-300" />
                <div className="w-0 h-3 bg-black" />
                <div className="flex-1 flex justify-start items-start">
                  <div className="w-80 justify-start text-neutral-900 text-sm font-normal font-['Poppins'] leading-4">
                    Académico
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="self-stretch h-4 inline-flex justify-start items-center gap-3">
                <div className="w-0 h-6 bg-zinc-300" />
                <div className="w-0 h-3 bg-black" />
                <div className="flex-1 flex justify-start items-start">
                  <div className="w-80 justify-start text-neutral-900 text-sm font-normal font-['Poppins'] leading-4">
                    Admisión
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="self-stretch h-4 inline-flex justify-start items-center gap-3">
                  <div className="w-0 h-6 bg-zinc-300" />
                  <div className="w-0 h-3 bg-white" />
                  <div className="flex-1 flex justify-start items-start">
                    <div className="w-80 justify-start text-neutral-900 text-sm font-normal font-['Poppins'] leading-4">
                      Tesorería
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-4 inline-flex justify-start items-center gap-3">
                  <div className="w-0 h-6 bg-zinc-300" />
                  <div className="w-0 h-3 bg-white" />
                  <div className="flex-1 flex justify-start items-start">
                    <div className="w-80 justify-start text-neutral-900 text-sm font-normal font-['Poppins'] leading-4">
                      Recursos Humanos
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-4 inline-flex justify-start items-center gap-3">
                  <div className="w-0 h-6 bg-zinc-300" />
                  <div className="w-0 h-3 bg-white" />
                  <div className="flex-1 flex justify-start items-start">
                    <div className="w-80 justify-start text-neutral-900 text-sm font-normal font-['Poppins'] leading-4">
                      Nómina
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="self-stretch h-4 inline-flex justify-start items-center gap-3">
                <div className="w-0 h-6 bg-zinc-300" />
                <div className="w-0 h-3 bg-black" />
                <div className="flex-1 flex justify-start items-start">
                  <div className="w-80 justify-start text-neutral-900 text-sm font-normal font-['Poppins'] leading-4">
                    Investigación
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DirectoryMenu
