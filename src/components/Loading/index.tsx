import { useEffect } from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Router from 'next/router'
const NProgressBar = () => {
  useEffect(() => {
    NProgress.configure({ showSpinner: false })
    const start = () => {
      NProgress.start()
    }

    const end = () => {
      NProgress.done()
    }

    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)

    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])

  return null
}

export default NProgressBar