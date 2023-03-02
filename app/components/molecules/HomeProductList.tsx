import axios from 'axios'
import { useState } from 'react'
import { useGenerals } from 'context/generals.context'
import { ListProducts } from 'interfaces/home'
import { Button } from '../atoms/Button'
import { HomeCardProducts } from './HomeCardProducts'

export interface HomeProductListProps {
  list: ListProducts[]
}

export const HomeProductList = ({ list }: HomeProductListProps) => {
  const { polylang } = useGenerals()
  const [isActive, setIsActive] = useState<boolean>(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }
  return (
    <>
      <div className={`HomeProductList ${isActive && 'isActive'}`}>
        {list.map((card, index) => (
          <HomeCardProducts key={index} card={card} index={index} />
        ))}
      </div>
      <div className="HomeProductList-btn">
        <Button type="primary" onClick={handleClick}>{`${
          !isActive ? `${polylang.lbl_see_more}` : 'Ver menos'
        }`}</Button>
      </div>
    </>
  )
}
