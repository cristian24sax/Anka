import { Card } from "../../interfaces/home"
import { CardSection } from "./CardSection"

export interface HomeCardListProps{
 cards:Card[]
}

export const HomeCardList=({cards}:HomeCardListProps)=>{


    return<div className="HomeCardList">
        {
            cards.map(({title,content,img},index)=><CardSection key={index}  title={title} content={content} img={img}/>)
        }

    </div>
}