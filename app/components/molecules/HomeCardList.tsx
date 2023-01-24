import { useGenerals } from '../../context/generals.context'
import { Card } from '../../interfaces/home'
import { Button } from '../atoms/Button'
import { CardSection } from './CardSection'

export interface HomeCardListProps {
  cards: Card[]
}

export const HomeCardList = ({ cards }: HomeCardListProps) => {
  const {polylang} = useGenerals()
  return (
    <div className="HomeCardList">
      {cards.map(({ title, content, img, img_mobile,slug }, index) => (
        <CardSection
          key={index}
          title={title}
          content={content}
          img={img}
          img_mobile={img_mobile}
          slug={slug}
        />
      ))}

    </div>
    
  )
}
