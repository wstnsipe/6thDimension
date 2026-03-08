import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '6th Dimension, Inc. | Defense Simulation & Software Engineering',
  description:
    'Huntsville-based defense simulation and software engineering firm delivering modeling, simulation, and software architecture solutions for Army Aviation and DoD programs.',
  keywords: [
    'defense simulation',
    'software engineering',
    'Army Aviation',
    'DoD',
    'Huntsville',
    'modeling and simulation',
    'software architecture',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
