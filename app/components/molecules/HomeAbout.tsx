// import Image from 'next/future/image'
import Image from "next/image";
import { useGenerals } from "../../context/generals.context";
import { Img } from "../../interfaces";
import { CardsAbout } from "../../interfaces/home";
import { ImageStrapi } from "../../lib/utils";
import { Information } from "../atoms/Information";

import { Container } from "../globals";
import { OurAccordion } from "./OurAccordion";
import { OurTabs } from "./OurTabs";

interface HomeAboutProps {
  title: string;
  img: Img;
  cards: CardsAbout[];
}

export const HomeAbout = ({ title, img, cards }: HomeAboutProps) => {
  const { polylang } = useGenerals();
  console.log(cards);
  return (
    <section className="HomeAbout">
      <Container>
        <Information title={title} type="center" />
        <div className="HomeAbout-ctn">
          <div className="HomeAbout-tabs">
            <OurTabs cards={cards} />
          </div>
          <div className="HomeAbout-Accordion">
            <OurAccordion cards={cards} />
          </div>
          <picture className="HomeAbout-picture">
            <Image
              loader={() => ImageStrapi(img.url)}
              src={ImageStrapi(img.url)}
              width={500}
              height={400}
              alt="img"
            />
          </picture>
        </div>
      </Container>
    </section>
  );
};
