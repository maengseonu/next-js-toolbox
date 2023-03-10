import AppBarComponent from '@/components/app/appbar'
import { AppSideBar } from '@/components/app/appSideBar'
import '@/styles/globals.css'
import GlobalStyle from '@/styles/GlobalStyle'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import styled from 'styled-components'

const AppLayout = styled('div')`
  display: flex;
  width: 100%;
  height: 100%;

  overflow-y: hidden;
`

const AppContentLayout = styled('div')`
  width: 85%;
  height: 100%;

  overflow-y: auto;
`

const AppContentComponentLayout = styled('div')`
  display: flex;
  width: 100%;
  height: 100%;
`

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Toolbox</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>

        <AppSideBar />

        <AppContentLayout>
          <AppBarComponent />

          <AppContentComponentLayout>
            <Component {...pageProps} />
          </AppContentComponentLayout>

        </AppContentLayout>

      </AppLayout>
    </>
  )
}
