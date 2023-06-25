import ProgressBar from '@/components/Loading'
import type { AppProps } from 'next/app'
import 'nprogress/nprogress.css'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <ProgressBar />
      <Component {...pageProps} />
    </>
  )
}
