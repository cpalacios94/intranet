import { Accordion, AccordionItem } from '@heroui/react'
import { ChevronIcon } from './icons/ChevronIcon'
import { Unidad } from '../../types/directory'

interface SidebarAccordionProps {
  items: Unidad[]
}

export const SidebarAccordion = ({ items }: SidebarAccordionProps) => {
  const itemClasses = {
    base: 'w-full',
    title: 'text-neutral-900 text-sm font-normal font-["Poppins"] text-left',
    trigger:
      'px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center flex-row-reverse gap-3',
    indicator: 'text-medium',
    content: 'text-sm px-2'
  }

  const getCategoryName = (codUnidad: number) => {
    switch (codUnidad) {
      case 1:
        return 'FACULTADES'
      case 2:
        return 'ADMINISTRACIÓN'
      case 3:
        return 'INVESTIGACIÓN'
      default:
        return ''
    }
  }

  return (
    <div className="w-full max-w-[350px] flex flex-col gap-4">
      {items.map((unidad) => (
        <div key={unidad.codUnidad} className="flex flex-col gap-2">
          <h3 className="px-4 text-xs font-semibold text-neutral-500 font-['Poppins']">
            {getCategoryName(unidad.codUnidad)}
          </h3>
          <Accordion
            showDivider={false}
            className="p-2 flex flex-col gap-1 w-full"
            itemClasses={itemClasses}
          >
            {unidad.facultades.map((item) => (
              <AccordionItem
                key={item.codSubunidadPadre}
                aria-label={item.subunidadPadre}
                title={item.subunidadPadre}
                indicator={({ isOpen }) => (
                  <ChevronIcon
                    className={isOpen ? 'rotate-90' : '-rotate-90'}
                  />
                )}
              >
                <div className="flex gap-1 pl-2">
                  <div className="w-[18px] shrink-0" />
                  <div className="flex flex-col gap-2">
                    {item.subunidadesHijas.map((child) => (
                      <span
                        key={child.codSubunidad}
                        className="text-default-500 hover:text-primary cursor-pointer text-neutral-900 text-sm font-normal font-['Poppins']"
                      >
                        {child.subunidad}
                      </span>
                    ))}
                  </div>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </div>
  )
}
