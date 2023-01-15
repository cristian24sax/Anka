import { FC, PropsWithChildren } from 'react'
// import { ServiceData } from '../../interfaces'
import ObserverTop from '../atoms/ObserverTop'
import { InfoHeader } from '../molecules'
// import { Footer } from '../ui'
// import { CustomHead } from '../globals'
// import { InfoHeader } from '../molecules'
import {Header,Footer} from '../ui'

interface LayoutProps extends PropsWithChildren {
//    services: ServiceData[]
}

export const Layout: FC<LayoutProps> = ({ children}) => {
   return (
      <>
         {/* <CustomHead /> */}
         <InfoHeader />
         <ObserverTop />
         <Header  />
         
         {children}
         <Footer />
      </>
   )
}
