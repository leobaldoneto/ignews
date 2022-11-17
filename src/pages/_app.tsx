import type { AppProps } from 'next/app'

import { Header } from '../components/Header'

import { SessionProvider } from 'next-auth/react'
import type { Session } from 'next-auth'

import '../styles/global.scss'

export default function MyApp({
  Component, 
  pageProps: { session, ...pageProps },
 }: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  )
}
