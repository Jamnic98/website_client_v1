import { type FC } from 'react'
import type { AppProps } from 'next/app'
import { Navbar, Footer } from '../components'
import { navlinkObjArr } from '../utils'
import '../styles/global.css'

export const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Navbar navlinkObjArr={navlinkObjArr} />
    <Component {...pageProps} />
    <Footer />
  </>
)

export default App
