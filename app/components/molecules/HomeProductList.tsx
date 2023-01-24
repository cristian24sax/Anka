import axios from 'axios'
import { useState } from 'react'
import { ListProducts } from '../../interfaces/home'
import { HomeCardProducts } from './HomeCardProducts'

export interface HomeProductListProps {
  list: ListProducts[]
}

export const HomeProductList = ({ list }: HomeProductListProps) => {

  return (
    <div className="HomeProductList">
      {list.map((card, index) => (
        <HomeCardProducts key ={index} card={card}/>
      ))}
    </div>
  )
}
