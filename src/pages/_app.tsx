import type { AppProps } from 'next/app'

import { Header } from '../components/header'

import { SessionProvider } from 'next-auth/react'
import type { Session } from 'next-auth'

import '../styles/global.scss'

export default function MyApp({
  Component, 
  pageProps: { session, ...pageProps },
 }: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  )
}
