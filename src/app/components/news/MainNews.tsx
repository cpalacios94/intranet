import { ContainerIcon } from '../icons/ContainerIcon'
import { MOCK_NEWS } from '../../constants'
import { ChevronIcon } from '../icons/ChevronIcon'
import Link from 'next/link'

const MainNews: React.FC = () => {
  const featuredNews = MOCK_NEWS[0]
  console.log(featuredNews.image)
  if (!featuredNews) return null
  return (
    <Link
      href={`/noticias/${featuredNews.slug}`}
      className="flex h-[300px] items-center gap-[25px] relative group cursor-pointer"
    >
      <div
        className="relative flex-1 grow h-[300px] rounded-[7.1px] bg-cover bg-position-[50%_50%]"
        style={{
          backgroundImage: `url(${
            typeof featuredNews.image === 'string'
              ? featuredNews.image
              : featuredNews.image.src
          })`
        }}
      />

      <div className="gap-[10.66px] flex-1 grow flex flex-col items-start relative">
        <div className="flex flex-col h-[18px] items-start justify-center relative self-stretch w-full">
          <div className="inline-flex items-start relative flex-[0_0_auto] mt-[-3.79px] mb-[-3.79px]">
            <div className="relative w-fit mt-[-0.99px] font-['Poppins'] font-normal text-[#808080] text-[14.8px] tracking-[0] leading-[25.6px] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:0] [-webkit-box-orient:vertical]">
              EDUCACIÓN
            </div>
          </div>
        </div>

        <div className="gap-[3.55px] self-stretch w-full flex-[0_0_auto] flex flex-col items-start relative">
          <div className="flex flex-col h-[27.71px] items-start relative self-stretch w-full">
            <div className="flex self-stretch w-full items-start relative flex-[0_0_auto]">
              <p className="relative w-[390.77px] mt-[-1.05px] font-['Poppins'] font-semibold text-[#181818] text-base tracking-[0] leading-5 group-hover:text-rose-800 transition-colors">
                Taller interactivo de Inglés y Francés
              </p>
            </div>
          </div>

          <div className="flex flex-wrap h-[25.53px] items-start gap-[0px_0px] relative self-stretch w-full">
            <div className="flex flex-col w-[95.21px] items-start justify-center px-0 py-[3.55px] relative self-stretch">
              <div className="inline-flex h-[18.43px] items-center gap-[7.1px] pt-0 pb-[0.67px] px-0 relative">
                {/* <img
                  className="relative flex-[0_0_auto]"
                  alt="Container"
                  src={container}
                /> */}
                <ContainerIcon className="relative flex-[0_0_auto]" />

                <div className="relative w-fit mt-[-1.05px] font-['Poppins'] font-normal text-[#181818] text-[10.7px] tracking-[0] leading-[18.4px] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:0] [-webkit-box-orient:vertical]">
                  15 Nov, 2023
                </div>

                <div className="absolute top-0.5 -right-3 w-px h-[13px] bg-[#dadada]" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col h-[120px] items-start relative self-stretch w-full">
          <p className="relative self-stretch mt-[-0.71px] font-['Poppins'] font-normal text-[#808080] text-xs tracking-[0] leading-[18px] whitespace-break-spaces">
            La Carrera de Negocios Internacionales organizó un taller
            interactivo de inglés y francés dirigido a postulantes, con palabras
            de bienvenida a cargo de su directora, Gabriela Hurtado Cevallos. La
            Carrera de Negocios Internacionales organizó un taller interactivo
            de inglés y francés dirigido a postulantes, con palabras de
            bienvenida a cargo de su directora, Gabriela Hurtado Cevallos.
          </p>
        </div>

        <div className="flex h-[25.58px] items-center gap-[12.79px] relative self-stretch w-full">
          <div className="inline-flex items-start relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-0.99px] font-['Poppins'] font-medium text-[#a90046] text-[12.5px] tracking-[0] leading-[25.6px] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:0] [-webkit-box-orient:vertical]">
              Leer más
            </div>
          </div>

          {/* <img
            className="relative w-[17.05px] h-[17.05px] aspect-[1]"
            alt="Chevron forward"
            src={chevronForward}
          /> */}
          <ChevronIcon className="relative w-[17.05px] h-[17.05px] aspect-[1]" />
        </div>
      </div>
    </Link>
  )
}

export default MainNews
