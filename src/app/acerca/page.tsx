import Header from '../components/layout/Header'
import HeaderTitle from '../components/ui/HeaderTitle'
import KeyIcon from '../components/icons/KeyIcon'
import Navbar from '../components/layout/NavBar'
import TopBar from '../components/layout/TopBar'
import InstagramFeed from '../components/social/InstagramFeed'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full font-sans">
      <TopBar />
      <Header />
      <Navbar />

      <div className="flex flex-col items-start gap-[22px] relative mx-[10%]">
        <div className="flex items-start gap-[27px] relative self-stretch w-full">
          <HeaderTitle
            titleFirstWorld="Acerca de la"
            titleSecondWorld="UCSG"
            viewAll={false}
          />
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-5 h-full">
          <Link
            href={process.env.NEXT_PUBLIC_CAMBIO_CLAVE_URL ?? '#'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-60 h-40 relative rounded-[20px] mb-10 flex items-center">
              <div className="w-60 h-40 left-0 top-0 absolute bg-white rounded-[20px] border border-zinc-500/40" />
              <div className="w-10 h-10 left-[26px] top-[26px] absolute bg-[#a90046]/10 rounded-xl flex justify-center items-center">
                <KeyIcon className="w-6 h-6" />
              </div>
              <div className="left-[25.96px] top-[73.69px] absolute justify-start text-gray-800 text-sm font-bold font-['Poppins'] leading-9">
                Cambio de clave SIU
              </div>
              <div className="w-48 h-8 left-[25.96px] top-[105.93px] absolute justify-start text-zinc-500 text-xs font-normal font-['Poppins'] leading-4">
                Cambia o desbloquee su clavel del SIU
              </div>
            </div>
          </Link>
          <div className="flex flex-col items-start gap-5 w-full">
            <div className="w-full h-full border rounded-xl">
              <InstagramFeed />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-12 bg-ucsg-primary relative top-22" />
    </div>
  )
}
