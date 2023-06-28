import './globals.css'

export const metadata = {
  title: 'Wallet Age - Check the age of the wallet on multiple blockchains',
  description: 'Check the age of the wallet on multiple blockchains',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-background'>{children}</body>
    </html>
  )
}
