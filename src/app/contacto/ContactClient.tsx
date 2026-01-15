'use client'

import { useState, useMemo, useDeferredValue } from 'react'
import Header from '../components/layout/Header'
import Navbar from '../components/layout/NavBar'
import TopBar from '../components/layout/TopBar'
import HeaderTitle from '../components/ui/HeaderTitle'
import { SidebarAccordion } from '../components/directory/SidebarAccordion'
import ContactCard from '../components/directory/ContactCard'
import { ScrollShadow } from '@heroui/scroll-shadow'
import SearchInput from '../components/ui/SearchInput'
import { Unidad, Contact } from '../../types/directory'

import { filterContacts } from '../actions/contact'

import { Spinner } from '@heroui/react'
import { WaveBackground } from '../components/layout/WaveBackground'

interface ContactClientProps {
  directory: Unidad[]
  contacts: Contact[]
}

export default function ContactClient({
  directory,
  contacts: initialContacts
}: ContactClientProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [contacts, setContacts] = useState<Contact[]>(initialContacts)
  const [isLoading, setIsLoading] = useState(false)

  const deferredSearchQuery = useDeferredValue(searchQuery)
  const isSearching = deferredSearchQuery.trim().length > 0

  const filteredContacts = useMemo(() => {
    if (!isSearching) return contacts

    const lowerQuery = deferredSearchQuery.toLowerCase()
    return initialContacts.filter((contact) => {
      const fullName = `${contact.nombres} ${contact.apellidos}`.toLowerCase()
      return fullName.includes(lowerQuery)
    })
  }, [contacts, initialContacts, isSearching, deferredSearchQuery])

  const handleFilter = async (
    codUnidad: number,
    codPadre: number,
    codHija?: number
  ) => {
    setIsLoading(true)
    try {
      // Artificial delay to ensure spinner visibility
      await new Promise((resolve) => setTimeout(resolve, 500))

      const data = await filterContacts(codUnidad, codPadre, codHija)
      setContacts(data)
    } catch (error) {
      console.error('Error filtering contacts:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div
      className={`min-h-screen w-screen font-sans z-0 relative flex flex-col`}
    >
      <WaveBackground />
      <TopBar />
      <Header />
      <Navbar />

      <div className="flex items-start gap-[22px] relative mx-[10%]">
        <div className="flex flex-col w-1/4 items-start gap-[15px] relative">
          <div className="h-11 flex items-center w-full">
            <HeaderTitle
              titleFirstWorld="Biblioteca de"
              titleSecondWorld="CONTACTO"
              viewAll={false}
            />
          </div>
          <div className="relative w-full h-[635px] rounded-[20px] overflow-hidden shadow-[0px_10px_30px_#00000012]">
            <div className="w-full h-full flex bg-white rounded-[0px_0px_var(--demo-edublink-co-radius-4)_var(--demo-edublink-co-radius-4)]">
              <ScrollShadow className="w-full h-full" size={40} hideScrollBar>
                <div className="py-4 px-2 w-full inline-flex flex-col justify-start items-start gap-5">
                  <SidebarAccordion items={directory} onFilter={handleFilter} />
                </div>
              </ScrollShadow>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-3/4 items-start gap-[15px] relative">
          <div className="w-full h-11 flex items-center justify-end">
            <div className="w-1/2 h-full">
              <SearchInput
                value={searchQuery}
                onChange={setSearchQuery}
                className="w-full h-full px-3"
              />
            </div>
          </div>
          <div className="relative w-full h-[635px] rounded-[20px] overflow-hidden shadow-[0px_10px_30px_#00000012]">
            <div className="w-full h-auto bg-white rounded-[0px_0px_var(--demo-edublink-co-radius-4)_var(--demo-edublink-co-radius-4)]">
              <ScrollShadow
                className="w-full h-[635px] overflow-y-auto"
                size={40}
                hideScrollBar
              >
                <div className="w-full h-auto relative inline-flex flex-col justify-start items-start gap-5">
                  <div className="self-stretch grid grid-cols-3 gap-7 p-8">
                    {isLoading ? (
                      <div className="col-span-3 flex justify-center items-center h-64 w-full">
                        <Spinner
                          size="lg"
                          label="Cargando contactos..."
                          color="danger"
                          classNames={{
                            label: "font-['Poppins']"
                          }}
                        />
                      </div>
                    ) : (
                      filteredContacts.map((contact, index) => (
                        <ContactCard key={index} contact={contact} />
                      ))
                    )}
                  </div>
                </div>
              </ScrollShadow>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-12 bg-ucsg-primary relative top-22" />
    </div>
  )
}
