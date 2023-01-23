import { useGenerals } from '../../context/generals.context'
import ReactMarkdown from 'react-markdown'
import { Button } from '../atoms/Button'
import { Container } from '../globals'
import { Information } from '../atoms/Information'
import { ListProducts } from '../../interfaces/home'
import {  Products, ProductsData } from '../../interfaces/products'
export interface HomeProductProps {
  title: string
  content: string
  list: ListProducts[]
  section:string
  products:Products
}

export const HomeProduct = ({ title, content, list,section,products }: HomeProductProps) => {
  const { polylang } = useGenerals()
  // console.log(products?.filter(cat => cat.category.name==='Faros Led'))
  return (
    <div className="HomeProduct" data-section={section}>
      <Container>
        <div>{title}</div>
        <div>{content}</div>
        {list.map((card,index)=><div key={index}>
          <div>
            {card.title}
          </div>
        </div>)}
          
      </Container>
    </div>
  )
}
