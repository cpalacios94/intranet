'use client'

import ClientOnly from './ui/ClientOnly' // Tu componente basado en useSyncExternalStore
import { useEdgeDetector } from '../hooks/useEdgeDetector' // Tu hook de detección de Edge
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure
} from '@heroui/react'

export default function OracleFormsButton() {
  const isEdge = useEdgeDetector()
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  //const formsUrl = 'http://ofr45.ucsg:7777/forms/frmservlet?config=00001'
  const formsUrl = 'http://ucsgofr4.ucsg:7777/forms/frmservlet?config=00001'

  return (
    <ClientOnly fallback={<SkeletonButton />}>
      <button
        onClick={() => {
          if (isEdge) {
            window.open(formsUrl, '_blank')
          } else {
            onOpen()
          }
        }}
        className={`flex justify-center items-center h-full text-[10px] sm:text-xs lg:text-sm font-bold font-['Poppins'] cursor-pointer whitespace-nowrap bg-transparent border-none p-0 outline-none transition-colors ${
          isEdge
            ? 'text-white hover:text-gray-300'
            : 'text-amber-400 hover:text-amber-300'
        }`}
      >
        {isEdge ? 'SIU' : '⚠️ SIU (Solo Edge)'}
      </button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-black">
                Atención
              </ModalHeader>
              <ModalBody>
                <p className="text-black">
                  Este módulo requiere abrirse en{' '}
                  <strong>Microsoft Edge</strong> con el{' '}
                  <strong>Modo Internet Explorer</strong> activado.
                </p>
                <p className="text-sm text-gray-500">
                  Si ya estás en Edge, asegúrate de recargar la página en modo
                  IE.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    window.open(`microsoft-edge:${formsUrl}`, '_blank')
                    onClose()
                  }}
                >
                  Abrir en Edge
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </ClientOnly>
  )
}

function SkeletonButton() {
  return (
    <div className="flex justify-center items-center h-full text-[10px] sm:text-xs lg:text-sm font-bold font-['Poppins'] text-white whitespace-nowrap">
      ...
    </div>
  )
}
