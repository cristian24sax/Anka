import type { NextPage } from 'next'
import { Information } from '../../components/atoms/Information'
import { Container } from '../../components/globals'
import { HomeProductList } from '../../components/molecules'
import { Home, HomeProductsList } from '../../interfaces/home'
import { baseApi } from '../../lib/baseApi'
import { getGenerals } from '../../lib/getGenerals'

export interface ProductsPageProps {
  products: HomeProductsList
}
const ProductsPage: NextPage<ProductsPageProps> = ({ products }) => {
  // console.log(products.List_cardProducts.map((product)=>(
  //   product.slug
  // )))
  return (
    <div className="ProductsPage main-page h-full">
      <Container>
        <Information title={products.title} type="center" />
        <p className='ProductsPage-content'>{products.content}</p>
        <HomeProductList list={products.List_cardProducts} />
      </Container>
    </div>
  )
}

export default ProductsPage

export const getStaticProps = async () => {
  const generals = await getGenerals()
  const [{ data: products }] = await Promise.all([
    baseApi.get<Home>('/home?populate=deep'),
  ])
  return {
    props: {
      generals,
      products: products.data.HomeProductsList,
    },
  }
}
