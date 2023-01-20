import { Card, HomeAbout, HomeService } from "../../interfaces/home";
import { Information } from "../atoms/Information";
import { Container } from "../globals";
import { HomeCardList } from "../molecules/HomeCardList";

export interface HomeCardProps {
  title: string;
  cards: Card[];
}

export const HomeCard = ({ title, cards }: HomeCardProps) => {
  // console.log(cards)
  return (
    <div className="HomeCard">
      {/* <div className="HomeCard-title">{title}</div> */}
      <Container>
        <Information title={title} type="center" />
        <HomeCardList cards={cards} />
      </Container>
    </div>
  );
};
