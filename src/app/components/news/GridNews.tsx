import CardNews from './CardNews'
import { ComunicacionEspecifica } from '@/app/types/comunicaciones'

interface GridNewsProps {
  newsItems: ComunicacionEspecifica[]
}

const GridNews: React.FC<GridNewsProps> = ({ newsItems }) => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
      {newsItems.map((item) => (
        <CardNews key={item.codigo} news={item} />
      ))}
    </div>
  )
}

export default GridNews
