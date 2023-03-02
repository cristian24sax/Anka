import { useCategoryContext } from 'context/product.context'
import { CategoriesData } from 'interfaces/categories'
import { useRouter } from 'next/router'

export interface AsideCategoryProps {
  categories: CategoriesData[]
  total: number
}

export const AsideCategory = ({ categories, total }: AsideCategoryProps) => {
  const router = useRouter()
  const { active, setActive } = useCategoryContext()

  const handleCLick = (i: number) => {
    setActive(i + 1)
  }
  const handlerouter = (slug: string) => {
    router.push(`/products?category=${slug}`)
  }

  return (
    <div className="AsideCategory">
      <div
        className={`AsideCategory-head ${0 === active ? 'isActive ' : ''}`}
        onClickCapture={() => {
          setActive(0)
      
          router.push('/products')
        }}
      >
        todos los productos <pre>{total}</pre>
      </div>
      {categories.map((cate, index) => (
        <>
          <div
            key={index}
            className={`AsideCategory-head ${
              index + 1 === active ? 'isActive ' : ''
            }`}
            onClickCapture={() => {
              handleCLick(index)
              handlerouter(cate.slug)
            }}
          >
            {cate.name} <pre>{cate.products.length}</pre>
          </div>
          {/* {cate.subcategory?.name && cate.subcategory?.name} */}
        </>
      ))}
    </div>
  )
}
