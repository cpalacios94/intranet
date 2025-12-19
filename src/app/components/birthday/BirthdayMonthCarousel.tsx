import BirthdayMonthCard from './BirthdayMonthCard'

interface BirthdayMonthCarouselProps {
  selectedMonth: string
  onMonthSelect: (month: string) => void
  currentMonthIndex: number
}

const BirthdayMonthCarousel: React.FC<BirthdayMonthCarouselProps> = ({
  selectedMonth,
  onMonthSelect,
  currentMonthIndex
}) => {
  // Array of month names in Spanish
  const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ]

  // Generate next 8 months starting from current
  const next8Months = Array.from({ length: 8 }, (_, i) => {
    const monthIndex = (currentMonthIndex + i) % 12
    const monthNumber = String(monthIndex + 1).padStart(2, '0')
    return {
      name: months[monthIndex],
      number: monthNumber,
      isActive: monthNumber === selectedMonth
    }
  })

  return (
    <div className="w-full h-28 relative bg-neutral-50 rounded-lg">
      <div className="w-full top-[14px] absolute inline-flex justify-around items-center gap-4">
        {next8Months.map((month) => (
          <BirthdayMonthCard
            key={month.number}
            month={month.name}
            isActive={month.isActive}
            onClick={() => onMonthSelect(month.number)}
          />
        ))}
      </div>
    </div>
  )
}

export default BirthdayMonthCarousel
