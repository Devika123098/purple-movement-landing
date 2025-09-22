import type { Metadata } from 'next'
import { Inter, Montserrat, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })
const poppins = Poppins({ 
  subsets: ['latin'], 
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Purple Movement - Rebuilding How India Learns',
  description: 'We are building more than a movement — we are uniting dreamers, doers, and changemakers to shape a borderless future.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${montserrat.variable} ${poppins.variable} bg-slate-950`}>
        {children}
      </body>
    </html>
  );
}