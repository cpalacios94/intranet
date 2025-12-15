'use client'
import { useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/NavBar'
import TopBar from '../components/TopBar'
import HeaderTitle from '../components/HeaderTitle'
import { SidebarAccordion } from '../components/SidebarAccordion'
import ContactCard from '../components/ContactCard'
import { ScrollShadow } from '@heroui/scroll-shadow'
import SearchInput from '../components/SearchInput'

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className={`min-h-screen w-screen font-sans`}>
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
              <div className="py-4 px-2 w-full absolute inline-flex flex-col justify-start items-start gap-5">
                <SidebarAccordion />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-3/4 items-start gap-[15px] relative">
          <div className="w-full flex justify-end">
            <div className="w-1/2">
              <SearchInput
                value={searchQuery}
                onChange={setSearchQuery}
                className="w-full"
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
                    <ContactCard />
                    <ContactCard />
                    <ContactCard />
                    <ContactCard />
                    <ContactCard />
                    <ContactCard />
                    <ContactCard />
                    <ContactCard />
                    <ContactCard />
                    <ContactCard />
                    <ContactCard />
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

export default App
