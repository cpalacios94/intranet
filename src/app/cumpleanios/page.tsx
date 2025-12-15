import Header from '../components/Header'
import Navbar from '../components/NavBar'
import HeaderTitle from '../components/HeaderTitle'
import TopBar from '../components/TopBar'
import BirthdayMainSection from '../components/BirthdayMainSection'
import { WaveBackground } from '../components/WaveBackground'
import { Birthday } from '../types/birthday'

export const dynamic = 'force-dynamic'

const getBirthdays = async (): Promise<Birthday[]> => {
  try {
    const res = await fetch('http://localhost:8080/api/cumpleanios', {
      cache: 'no-store' // Ensure fresh data
    })
    if (!res.ok) {
      throw new Error('Failed to fetch birthdays')
    }
    return res.json()
  } catch (error) {
    console.error('Error fetching birthdays:', error)
    return []
  }
}

export default async function BirthdayPage() {
  const birthdays = await getBirthdays()

  // Calculate current date info on the server
  const now = new Date()
  const currentMonth = String(now.getMonth() + 1).padStart(2, '0')
  const currentMonthIndex = now.getMonth()

  return (
    <div className={`min-h-screen w-screen font-sans relative flex flex-col`}>
      <WaveBackground />
      <TopBar />
      <Header />
      <Navbar />

      <div className="flex flex-col items-start gap-[22px] relative mx-4 xl:mx-[10%] z-10 grow mb-8">
        <div className="flex items-start gap-[27px] relative self-stretch w-full">
          <HeaderTitle
            titleFirstWorld="Cumpleaños del"
            titleSecondWorld="MES"
            viewAll={false}
          />
        </div>
        <BirthdayMainSection
          birthdays={birthdays}
          initialMonth={currentMonth}
          currentMonthIndex={currentMonthIndex}
        />
      </div>

      <div className="w-full h-12 bg-ucsg-primary relative z-10" />
    </div>
  )
}
