import axios from 'axios'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { useEffect, useRef, useState } from 'react'
import { Information } from '../../components/atoms/Information'
import { Container } from '../../components/globals'
import { HomeProductList } from '../../components/molecules'
import { Categories, CategoriesData } from '../../interfaces/categories'
import { Home, HomeProductsList } from '../../interfaces/home'
import { Products, ProductsData } from '../../interfaces/products'
import { baseApi } from '../../lib/baseApi'
import { getGenerals } from '../../lib/getGenerals'

export interface ProductsPageProps {
  // products: HomeProductsList
  products: ProductsData
  categories: CategoriesData[]
}

const ProductsPage: NextPage<ProductsPageProps> = ({
  products,
  categories,
}) => {
  const [cate, setCate] = useState()
  const router = useRouter()
  const { category } = router.query
  const fetchApi = async () => {
    const { data } = await axios.get(
      `http://localhost:1337/api/products?populate*&filters[category][slug]=${category}`
      // `http://localhost:1337/api/categories?populate=*&filters[slug]=${category}`
    )

    setCate(data.data)
  }

  useEffect(() => {
    fetchApi()
    console.log('aqui')
  }, [category])

  let list: boolean | any = category ? cate : products
  const handleClick = () => {
    // list=!category
  }
  return (
    <div className="ProductsPage main-page h-full">
      <Container>
        {/* <button onClick={handleClick}> todos los productos </button> */}
        <aside className="ProductsPage-aside">
          <div>
            <h3>categorias</h3>
            <ul>
              {categories.map((cate, index) => (
                <>
                  <li key={index}>
                    <Link href={`/products?category=${cate.slug}`}>
                      {' '}
                      {cate.name}{' '}
                    </Link>
                    {cate.products.length}
                  </li>
                  {/* {cate.subcategory?.name && cate.subcategory?.name} */}
                </>
              ))}
            </ul>

            <div>{JSON.stringify(list)}</div>
          </div>
        </aside>
      </Container>
    </div>
  )
}

export default ProductsPage

export const getStaticProps = async () => {
  const generals = await getGenerals()

  const [{ data: products }, { data: categories }] = await Promise.all([
    baseApi.get(`/products?populate*`),
    baseApi.get<Categories>('/categories?populate=*&filters[isActive]=true'),
  ])
  return {
    props: {
      generals,
      categories: categories.data,
      products: products.data,
    },
  }
}
