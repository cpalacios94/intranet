import { CalendarDay, EventItem, NewsItem } from './types'

export const COLORS = {
  primary: 'bg-ucsg-primary', // Rojo oscuro tipo UCSG
  secondary: 'text-ucsg-secondary', // Rosa/Rojo titulos
  bgGradient: 'bg-gradient-to-b from-white via-pink-50 to-gray-100'
}

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'EDUCACIÓN',
    title: 'Taller interactivo de Inglés y Francés',
    date: '15 Nov, 2023',
    description:
      'La Carrera de Negocios Internacionales organizó un taller interactivo de inglés y francés dirigido a postulantes, con palabras de bienvenida a cargo de su directora...',
    isFeatured: true
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    title: 'Taller interactivo de Inglés y Francés',
    date: '15 Nov, 2023',
    description:
      'La Carrera de Negocios Internacionales organizó un taller interactivo...',
    isFeatured: false
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    title: 'Taller interactivo de Inglés y Francés',
    date: '15 Nov, 2023',
    description:
      'La Carrera de Negocios Internacionales organizó un taller interactivo...',
    isFeatured: false
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    title: 'Taller interactivo de Inglés y Francés',
    date: '15 Nov, 2023',
    description:
      'La Carrera de Negocios Internacionales organizó un taller interactivo...',
    isFeatured: false
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    title: 'Taller interactivo de Inglés y Francés',
    date: '15 Nov, 2023',
    description:
      'La Carrera de Negocios Internacionales organizó un taller interactivo...',
    isFeatured: false
  }
]

export const CALENDAR_DAYS: CalendarDay[] = [
  { day: 'LUN', date: '21', active: false },
  { day: 'LUN', date: '21', active: true }, // Activo según diseño
  { day: 'LUN', date: '21', active: false },
  { day: 'LUN', date: '21', active: false },
  { day: 'LUN', date: '21', active: false }
]

export const EVENT_ITEM: EventItem = {
  title: 'Taller interactivo de Inglés y Francés',
  date: '15 Nov, 2023',
  image:
    'https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  description:
    'La Carrera de Negocios Internacionales organizó un taller interactivo de inglés y francés dirigido a postulantes...'
}
