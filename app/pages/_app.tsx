import type { AppProps } from 'next/app'
import Head from 'next/head'

import { ControllerState, GeneralsProvider } from '../context/generals.context'
import { NavbarProvider } from '../context/navbar.context'

import '../styles/globals.css'
import '../styles/container.css'
// import 'swiper/css'
import { Layout } from '../components/layouts/Layout'
// import { ServiceData } from '../interfaces'
// import { ServicesControllerState, ServicesProvider } from '../context/services.context'
interface CustomPageProps {
   generals: ControllerState
  //  services: ServiceData[]
}

function MyApp({ Component, pageProps }: AppProps<CustomPageProps>) {
   return (
      <>
         <Head>
            <title>NAN Cosntruction</title>
            {/* <Favicon /> */}
         </Head>
         <GeneralsProvider generals={pageProps.generals}>
            <NavbarProvider>
               <Layout >
                  <Component {...pageProps} />
               </Layout>
            </NavbarProvider>
         </GeneralsProvider>
      </>
   )
}

export default MyApp
