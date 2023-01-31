import axios from 'axios'
import Link from 'next/link'
import { CSSProperties, useState } from 'react'
import { ListProducts } from '../../interfaces/home'
import { ImageStrapi } from '../../lib/utils'

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
    // <Link href={`${card.slug}`}>
       <Link href={`/products/${card.slug}`}
      className="HomeCardProduct"
      onMouseEnter={() => handleHover(card.title)}
      style={
        {
          '--bg-desktop': `url(${ImageStrapi(card.img?.url)})`,
          '--bg-mobile': `url(${ImageStrapi(card.img_mobile?.url)})`,
        } as CSSProperties
      }
    >
      <div className='HomeCardProduct-content'>
        <div className="HomeCardProduct-title">{card.title}</div>
        <div className="HomeCardProduct-cant">{cantProduc} Productos</div>
      </div>
      <div className='HomeCardProduct-picture'>

      </div>
    </Link>
    // </Link>
  )
}
