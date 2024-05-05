import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import GlobalStyles from '@/styles/themes/globalStyles'
import Providers from '@/lib/provider'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MKS Store',
  description: 'Projeto desenvolvido para a vaga de front end na empresa MKS ',
}

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          <GlobalStyles />
          {props.children}
        </Providers>
      </body>
    </html>
  )
}
