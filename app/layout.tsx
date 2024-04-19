import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'GatherGurus',
  description: 'GatherGurus is a platform for event management.',
  icons: {
    icon: '/assets/images/metalogo.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" className='bg-gradient-to-r from-blue-600 via-blue-100 to-orange-700'>
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
