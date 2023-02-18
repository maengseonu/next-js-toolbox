import AppBarComponent from '@/components/app/appbar'
import '@/styles/globals.css'
import GlobalStyle from '@/styles/GlobalStyle'
import type { AppProps } from 'next/app'
import styled from 'styled-components'

const AppLayout = styled('div')`
  display: flex;
  width: 100%;
  height: 100%;
`

const AppSideBarLayout = styled('div')`
  display: flex;
  width: 15%;
  height: 100%;
  border-right: 1px;
  border-style: solid;
  border-color: rgb(231, 235, 240);
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
      <AppLayout>

        <AppSideBarLayout></AppSideBarLayout>

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
