import { GetStaticProps, NextPage } from "next"
import { AppProps } from "next/app"
import { useGenerals } from "../../context/generals.context"
import { Categories } from "../../interfaces/categories"
import { Home } from "../../interfaces/home"
import { baseApi } from "../../lib/baseApi"
import { getGenerals } from "../../lib/getGenerals"

export interface ProductPageProps{
  titleProduct:string
  category:string[]
}

const ProductPage = ({titleProduct,category}:ProductPageProps) =>{
  return(
    <div className="ProductPage">
        <h2>{titleProduct}</h2>
        <ul>
          {category.map((cat,index)=><li key={index}>{cat}</li>)}
        </ul>
    </div>
    
  );
  
  
}
export const getStaticProps: GetStaticProps = async () => {
  const generals = await getGenerals()

  const [{ data: home },{data:categories}] = await Promise.all([
     baseApi.get<Home>('/home?populate=deep'),
     baseApi.get<Categories>('/categories?populate=deep'),
  ])

  return {
     props: {
        titleProduct: home.data.HomeProducts.title,
        category: categories.data.map(data=>data.name),
        generals,
     },
     revalidate: 1,
  }
}

export default ProductPage