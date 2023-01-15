import { GetStaticProps, NextPage } from "next"
import { AppProps } from "next/app"
import { useGenerals } from "../../context/generals.context"
import { baseApi } from "../../lib/baseApi"
import { getGenerals } from "../../lib/getGenerals"

const ProductPage = ({}) =>{

  return(
    <div>asd</div>
  );
  
  
}
export const getStaticProps: GetStaticProps = async () => {
  const generals = await getGenerals()

  const [{ data: home }] = await Promise.all([
     baseApi.get('/home?populate=deep'),
    //  baseApi.get<Service>('/services?populate=deep'),
  ])

  return {
     props: {
        contact: home.data,
        // services: services.data,
        generals,
     },
     revalidate: 1,
  }
}

export default ProductPage