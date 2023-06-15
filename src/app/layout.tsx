import { Abel } from 'next/font/google'

import { Footer } from '@/app/components/Footer'
import { Header } from '@/app/components/Header'

import 'react-loading-skeleton/dist/skeleton.css'

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
      <link rel='manifest' href='/manifest.json' />
      <meta name='theme-color' content='#116193' />

      <body className={abel.className}>
        <Header />
        <main className='container'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
