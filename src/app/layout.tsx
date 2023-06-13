import { Abel } from 'next/font/google'

import './globals.css'

import { Footer } from './components/Footer'
import { Header } from './components/Header'

const abel = Abel({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Filmes | Cubos',
  description: 'Um site de filmes topzera',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pt-br'>
      <body className={abel.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
