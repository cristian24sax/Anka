import type { NextPage } from 'next'
// import { Service } from '../interfaces'
import { baseApi } from '../lib/baseApi'
import { getGenerals } from '../lib/getGenerals'

const NotFound: NextPage = () => {
   return <div>404</div>
}

export default NotFound

export const getStaticProps = async () => {
   const generals = await getGenerals()
//    const [{ data: services }] = await Promise.all([baseApi.get<Service>('/services?populate=deep')])
   return {
      props: {
         generals,
        //  services: services.data,
         //asdasd
      },
   }
}
