import './globals.css'
import "./Components/CSS/progress.css"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Abhinav Yadav',
  description: 'Abhinav Yadav Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={inter.className}>{children}</body>
    </html>
  )
}
