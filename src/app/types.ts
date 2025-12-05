export interface NewsItem {
  id: number
  image: string
  category?: string
  title: string
  date: string
  description: string
  isFeatured: boolean
}

export interface CalendarDay {
  day: string
  date: string
  active: boolean
}

export interface EventItem {
  title: string
  date: string
  image: string
  description: string
}

export interface SectionHeaderProps {
  title: string
  highlight: string
  link: string
}
