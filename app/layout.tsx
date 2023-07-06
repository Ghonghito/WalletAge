import Header from '@/components/Header'
import './globals.css'

export const metadata = {
  title: 'Wallet Age - Check age of the wallet on multiple blockchains',
  description: 'Check age of the wallet on multiple blockchains',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-background'>
        <Header />
        {children}
      </body>
    </html>
  )
}
