import { Unidad } from '../../types/directory'
import ContactClient from './ContactClient'

async function getDirectory(): Promise<Unidad[]> {
  try {
    const res = await fetch('http://localhost:8080/api/directorio/unidades', {
      cache: 'no-store'
    })

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    const unidades: Unidad[] = await res.json()
    return unidades
  } catch (error) {
    console.error('Error fetching directory:', error)
    return []
  }
}

export default async function ContactPage() {
  const directory = await getDirectory()

  return <ContactClient directory={directory} />
}
