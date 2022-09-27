import { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster position='bottom-right' />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
