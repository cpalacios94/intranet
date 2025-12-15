'use client'

import { Accordion, AccordionItem } from '@heroui/react'
import { ChevronIcon } from './icons/ChevronIcon'

export const SidebarAccordion = () => {
  const itemClasses = {
    base: 'w-full',
    title: 'text-neutral-900 text-sm font-normal font-["Poppins"] text-left',
    trigger:
      'px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center flex-row-reverse gap-3',
    indicator: 'text-medium',
    content: 'text-sm px-2'
  }

  return (
    <Accordion
      showDivider={false}
      className="p-2 flex flex-col gap-1 w-full max-w-[350px]"
      itemClasses={itemClasses}
    >
      <AccordionItem
        key="1"
        aria-label="Dirección de desarrollo tecnológico"
        title="Dirección de desarrollo tecnológico"
        indicator={({ isOpen }) => (
          <ChevronIcon className={isOpen ? 'rotate-90' : '-rotate-90'} />
        )}
      >
        <div className="flex gap-1 pl-2">
          <div className="w-[18px] shrink-0" />
          <div className="flex flex-col gap-2">
            <span className="text-default-500 hover:text-primary cursor-pointer text-neutral-900 text-sm font-normal font-['Poppins']">
              Financiero
            </span>
            <span className="text-default-500 hover:text-primary cursor-pointer text-neutral-900 text-sm font-normal font-['Poppins']">
              Académico
            </span>
            <span className="text-default-500 hover:text-primary cursor-pointer text-neutral-900 text-sm font-normal font-['Poppins']">
              Plataforma
            </span>
          </div>
        </div>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Financiero"
        title="Financiero"
        indicator={({ isOpen }) => (
          <ChevronIcon className={isOpen ? 'rotate-90' : '-rotate-90'} />
        )}
      >
        <div className="flex gap-1 pl-2">
          <div className="w-[18px] shrink-0" />
          <div className="flex flex-col gap-2">
            <span className="text-default-500 hover:text-primary cursor-pointer text-neutral-900 text-sm font-normal font-['Poppins']">
              Sub-item 1
            </span>
          </div>
        </div>
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Académico"
        title="Académico"
        indicator={({ isOpen }) => (
          <ChevronIcon className={isOpen ? 'rotate-90' : '-rotate-90'} />
        )}
      >
        <div className="flex gap-1 pl-2">
          <div className="w-[18px] shrink-0" />
          <div className="flex flex-col gap-2">
            <span className="text-default-500 hover:text-primary cursor-pointer text-neutral-900 text-sm font-normal font-['Poppins']">
              Sub-item 1
            </span>
          </div>
        </div>
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Admisión"
        title="Admisión"
        indicator={({ isOpen }) => (
          <ChevronIcon className={isOpen ? 'rotate-90' : '-rotate-90'} />
        )}
      >
        <div className="flex gap-1 pl-2">
          <div className="w-[18px] shrink-0" />
          <div className="flex flex-col gap-2">
            <span className="text-default-500 hover:text-primary cursor-pointer text-neutral-900 text-sm font-normal font-['Poppins']">
              Tesoreria
            </span>
            <span className="text-default-500 hover:text-primary cursor-pointer text-neutral-900 text-sm font-normal font-['Poppins']">
              Recursos Humanos
            </span>
            <span className="text-default-500 hover:text-primary cursor-pointer text-neutral-900 text-sm font-normal font-['Poppins']">
              Nómina
            </span>
          </div>
        </div>
      </AccordionItem>
      <AccordionItem
        key="5"
        aria-label="Investigación"
        title="Investigación"
        indicator={({ isOpen }) => (
          <ChevronIcon className={isOpen ? 'rotate-90' : '-rotate-90'} />
        )}
      >
        <div className="flex gap-1 pl-2">
          <div className="w-[18px] shrink-0" />
          <div className="flex flex-col gap-2">
            <span className="text-default-500 hover:text-primary cursor-pointer text-neutral-900 text-sm font-normal font-['Poppins']">
              Sub-item 1
            </span>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  )
}
