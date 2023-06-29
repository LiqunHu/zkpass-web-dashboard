/* Components */
import { Providers } from '@/lib/providers'
import Navbar from '@/components/Navbar'

/* Instruments */
import styles from './styles/layout.module.css'
import './globals.css'

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <Navbar />
          <main className="w-full">{props.children}</main>
        </body>
      </html>
    </Providers>
  )
}
