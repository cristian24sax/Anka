import { Card } from '../../interfaces/home'
import { CardSection } from './CardSection'

export interface HomeCardListProps {
  cards: Card[]
}

export const HomeCardList = ({ cards }: HomeCardListProps) => {
  return (
    <div className="HomeCardList">
      {cards.map(({ title, content, img, img_mobile }, index) => (
        <CardSection
          key={index}
          title={title}
          content={content}
          img={img}
          img_mobile={img_mobile}
        />
      ))}
    </div>
  )
}
