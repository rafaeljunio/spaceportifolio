import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Footer from '@/components/main/Footer'
import Navbar from '@/components/main/Navbar'
import StarsCanvas from '@/components/main/StartBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Space Portfolio',
  description: 'This is my portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <Navbar />
        <StarsCanvas />
        {children}
        <Footer />
      </body>
    </html>
  )
}
