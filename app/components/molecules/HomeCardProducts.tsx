import axios from 'axios'
import { useState } from 'react'
import { ListProducts } from '../../interfaces/home'

export interface HomeCardProductsProps {
  card: ListProducts
}

export const HomeCardProducts = ({ card }: HomeCardProductsProps) => {
  const [cantProduc, setCantProduc] = useState<number>()
  let type = ''
  const fecth = async () => {
    const result = await axios.get(
      `http://localhost:1337/api/products?[filters][category][name][$eq]=${type}`
    )
    setCantProduc(result.data.data.length)
  }
  const handleHover = (Cardtitle: string) => {
    type = Cardtitle
    fecth()
  }
  return (
    <div
      className="HomeCardProduct"
      onMouseEnter={() => handleHover(card.title)}
    >
      <div className="HomeCardProduct-title">{card.title}</div>
      <div className="HomeCardProduct-cant">{cantProduc}</div>
    </div>
  )
}
