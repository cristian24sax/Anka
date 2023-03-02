import axios from 'axios'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Loader } from '../../components/atoms'
import { Container } from '../../components/globals'
import { AsideCategory, CardProduct } from '../../components/molecules'
import { Meta } from '../../interfaces'
import { Categories, CategoriesData } from '../../interfaces/categories'
import { Products, ProductsData } from '../../interfaces/products'
import { baseApi } from '../../lib/baseApi'
import { getGenerals } from '../../lib/getGenerals'

export interface ProductsPageProps {
  products: ProductsData[]
  categories: CategoriesData[]
  pagination : Meta
}

const ProductsPage: NextPage<ProductsPageProps> = ({
  products,
  categories,
  pagination
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [productsList, setProductsList] = useState<ProductsData[]>(products)
  const [paginations , setPagination] = useState()
  const router = useRouter()
  const { category } = router.query
  const fetchApi = async () => {
    setIsLoading(true)
    const { data } = await axios.get(
      `http://localhost:1337/api/products?populate=*&filters[category][slug]=${category}&pagination[page]=1&pagination[pageSize]=10`
    )
    setProductsList(data.data)
    setPagination(data.meta)
    setIsLoading(false)
  }
  useEffect(() => {
    fetchApi()
  }, [category,products])
  
  // console.log('asd',paginations?.pagination?.total)
  // console.log('vvvv',pagination?.pagination?.total)
  const list = !!category ? productsList : products
  return (
    <div className="ProductsPage main-page h-full">
      <Container>
        <div className="ProductsPage-main">
          <aside className="ProductsPage-aside">
            <div className="ProductsPage-category">
              <div>
                <h3>categorias</h3>
                <AsideCategory categories={categories} total={products.length}/>
              </div>
            </div>
            <div className="ProductsPage-featured">
              <li>asada</li>
              <li>asada</li>
              <li>asada</li>
              <li>asada</li>
              <li>asada</li>
            </div>
          </aside>
          <div className="ProductsPage-listProducts">
            {isLoading ? (
              <Loader />
            ) : (
              <div>
                {list.map((c, index) => (
                  <CardProduct
                    key={index}
                    name={c.title}
                    description={c.description}
                    img={c.img?.url}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ProductsPage

export const getStaticProps = async () => {
  const generals = await getGenerals()

  const [{ data: products }, { data: categories }] = await Promise.all([
    baseApi.get<Products>(`/products?populate=*&pagination[page]=1&pagination[pageSize]=10`),
    baseApi.get<Categories>('/categories?populate=*&filters[isActive]=true'),
  ])
  return {
    props: {
      generals,
      categories: categories.data,
      pagination: products.meta,
      products: products.data,
    },
  }
}
