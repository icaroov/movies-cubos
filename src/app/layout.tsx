import { Abel } from 'next/font/google'

import { Footer } from '@/app/components/Footer'
import { Header } from '@/app/components/Header'

import './globals.css'

const abel = Abel({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Filmes | Cubos',
  description: 'Um site de filmes topzera',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='pt-br'>
      <body className={abel.className}>
        <Header />
        <main className='container'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
