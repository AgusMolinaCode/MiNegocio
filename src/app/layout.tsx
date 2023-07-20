import './globals.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'

const outfit = Outfit({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Tu negocio con IA',
  description:  'Tu negocio con IA es una plataforma que te ayuda a idear y darle forma a tu negocio con la ayuda de la inteligencia artificial.',
  keywords: [ 
    'tu negocio con ia',
    'tu negocio con inteligencia artificial',
    'crea tu negocio con ia',
    'imprendieminto con ia',
    'emprendimiento con inteligencia artificial',
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  )
}
