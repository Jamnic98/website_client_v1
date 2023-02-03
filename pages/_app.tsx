import type { AppProps } from 'next/app'
import React from 'react'
import { Navbar } from '../components/navbar/Navbar'
import { Footer } from '../components/footer/Footer'
import { navlinkObjArr } from '../utils'
import '../styles/global.css'

export const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Navbar navlinkObjArr={navlinkObjArr} />
    <Component {...pageProps} />
    <Footer />
  </>
)

export default App
