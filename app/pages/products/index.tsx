import type { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react'
import { Information } from '../../components/atoms/Information'
import { Container } from '../../components/globals'
import { HomeProductList } from '../../components/molecules'
import { Categories, CategoriesData } from '../../interfaces/categories'
import { Home, HomeProductsList } from '../../interfaces/home'
import { baseApi } from '../../lib/baseApi'
import { getGenerals } from '../../lib/getGenerals'

export interface ProductsPageProps {
  // products: HomeProductsList
  categories: CategoriesData[]
}

const ProductsPage: NextPage<ProductsPageProps> = ({
  products,
  categories,
}) => {
  // console.log(products.List_cardProducts.map((product)=>(
  //   product.slug
  // )))
  // console.log(categories.map(cat => cat.products.length))
  // let total = 0
  const [category, setCategory] = useState<string>('')
  const handleClick = (category: string) => {
    setCategory(category)
  }
  // console.log(category)
  const categoryRef = useRef<string>(null)
  console.log(categoryRef.current?.innerHTML)
  useEffect(()=>{

  },[categoryRef.current?.innerHTML])
  return (
    <div className="ProductsPage main-page h-full">
      <Container>
        {/* <Information title={products.title} type="center" /> */}
        {/* <p className='ProductsPage-content'>{products.content}</p> */}
        {/* <HomeProductList list={products.List_cardProducts} /> */}
        <aside className="ProductsPage-aside">
          <div>
            <h3>categorias</h3>
            <ul>
              {categories.map((cate, index) => (
                <>
                  {/* {(total += cate.products.length)} */}
                  <li
                    key={index}
                    onClick={() => handleClick(cate.name)}
                    ref={categoryRef}
                  >
                    {cate.name}
                  </li>
                  {cate.products.length}
                  {cate.subcategory?.name && cate.subcategory?.name}
                </>
              ))}
            </ul>

            <div>{JSON.stringify(products)}</div>
          </div>
        </aside>
      </Container>
    </div>
  )
}

// console.log(cat)
export default ProductsPage

export const getStaticProps = async () => {
  const generals = await getGenerals()

  const [{ data: products }, { data: categories }] = await Promise.all([
    baseApi.get(`/products?populate*&filter[category][name]='xadas' `),
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
