import React from 'react'
import HeaderTitle from './HeaderTitle'
import MainNews from './MainNews'
import GridNews from './GridNews'

const NewsSection: React.FC = () => {
  // const featuredNews = NEWS_ITEMS[0]
  // const otherNews = NEWS_ITEMS.slice(1)

  return (
    // <div className="lg:col-span-8">
    //   <SectionHeader title="Últimas" highlight="NOTICIAS" link="#" />

    //   <div className="bg-white rounded-xl p-6 shadow-md">
    //     {/* Noticia Principal */}
    //     <div className="flex flex-col lg:flex-row gap-6 mb-8 border-b border-gray-100 pb-8">
    //       <img
    //         src={featuredNews.image}
    //         alt="News"
    //         className="w-full lg:w-1/2 h-64 object-cover rounded-lg"
    //       />
    //       <div className="flex flex-col justify-center">
    //         <span className="text-gray-400 text-xs uppercase mb-2">
    //           {featuredNews.category}
    //         </span>
    //         <h3 className="text-2xl font-bold text-gray-800 mb-2">
    //           {featuredNews.title}
    //         </h3>
    //         <div className="flex items-center text-[#9d1e43] text-xs font-semibold mb-3">
    //           <Calendar size={14} className="mr-1" /> {featuredNews.date}
    //         </div>
    //         <p className="text-gray-600 text-sm mb-4 line-clamp-3">
    //           {featuredNews.description}
    //         </p>
    //         <button className="text-[#9d1e43] font-bold text-sm flex items-center hover:underline">
    //           Leer más <ChevronRight size={16} />
    //         </button>
    //       </div>
    //     </div>

    //     {/* Grid de Noticias Pequeñas */}
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //       {otherNews.map((item) => (
    //         <div key={item.id} className="flex gap-4">
    //           <img
    //             src={item.image}
    //             alt="thumb"
    //             className="w-24 h-24 object-cover rounded-md flex-shrink-0"
    //           />
    //           <div>
    //             <h4 className="font-bold text-gray-800 text-sm leading-tight mb-2 hover:text-[#9d1e43] cursor-pointer">
    //               {item.title}
    //             </h4>
    //             <div className="flex items-center text-[#9d1e43] text-xs font-semibold mb-2">
    //               <Calendar size={12} className="mr-1" /> {item.date}
    //             </div>
    //             <p className="text-gray-500 text-xs line-clamp-2">
    //               {item.description}
    //             </p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col w-2/3 items-start gap-[15px] relative">
      {/* <Frame /> */}
      <HeaderTitle />
      <div className="relative w-full h-[635px] rounded-[20px] overflow-hidden shadow-[0px_10px_30px_#00000012]">
        <div className="w-full h-full flex bg-white rounded-[0px_0px_var(--demo-edublink-co-radius-4)_var(--demo-edublink-co-radius-4)]">
          <div className="mt-[22.3px] w-full h-[579.65px] mx-4 flex-col items-start gap-7 flex relative">
            <MainNews />
            <GridNews />
            {/* <FrameWrapper />
            <DivWrapper />
            <Div /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsSection
