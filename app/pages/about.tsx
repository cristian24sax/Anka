import type { NextPage } from 'next'
import { About, AboutData } from '../interfaces/about'
// import { Service } from '../interfaces'
import { baseApi } from '../lib/baseApi'
import { getGenerals } from '../lib/getGenerals'

export interface AboutProps{
  about:AboutData
}
const AboutPage: NextPage<AboutProps> = ({about}) => {
  console.log(about) 
  return <div className='AboutPage'>

   <div className='AboutPage-title'>{about.about.title}</div>
  </div>
}

export default AboutPage

export const getStaticProps = async () => {
   const generals = await getGenerals()
   const [{ data: about }] = await Promise.all([baseApi.get('/about?populate=deep')])
   return {
      props: {
         generals,
         about: about.data,
      },
   }
}
