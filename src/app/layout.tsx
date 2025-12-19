import './globals.css'
import { Providers } from './providers'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="light">
      <body className={poppins.variable} suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
