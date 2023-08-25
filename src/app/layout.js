import '@/styles/globals.scss'
import { Inter } from 'next/font/google'
import { Inconsolata } from 'next/font/google'
import { Open_Sans } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Md Emmon Hossain - Cybersecurity Specialist | Malware Analysist | Front End',
  description: 'Design by mohammad_emmon',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
