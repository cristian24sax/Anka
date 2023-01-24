import axios from 'axios'
import { useState } from 'react'
import { useGenerals } from '../../context/generals.context'
import { ListProducts } from '../../interfaces/home'
import { Information } from '../atoms/Information'
import { Container } from '../globals'
import { HomeCardProducts, HomeProductList } from '../molecules'
export interface HomeProductProps {
  title: string
  content: string
  list: ListProducts[]
  section: string
}

export const HomeProduct = ({
  title,
  content,
  list,
  section,
}: HomeProductProps) => {
  // const { polylang } = useGenerals();
  // const [cantProduc, setCantProduc] = useState<number>()

  // let type = ''
  // const fecth = async () => {
  //   const result = await axios.get(
  //     `http://localhost:1337/api/products?[filters][category][name][$eq]=${type}`
  //   )
  //   setCantProduc(result.data.data.length)
  // }

  // const handleHover = (title: string) => {
  //   type = title
  //   fecth()
  // }
  return (
    <div className="HomeProduct " data-section={section}>
      <Container>
        {/* <div className="HomeProduct-title">{title}</div> */}
        <Information title={title} type="left"/>
        <div className="HomeProduct-content">{content}</div>
        {/* {list.map((card, index) => (
          <div
            className="HomeProduct-card"
            key={index}
            onMouseEnter={() => handleHover(card.title)}
          >
            <div className="HomeProduct-card__title">{card.title}</div>
            <div className="HomeProduct-card__cant">{cantProduc}</div>
          </div>
          <HomeCardProducts key={index} card={card}/>
        ))} */}
        <HomeProductList list={list} />
      </Container>
    </div>
  )
}
