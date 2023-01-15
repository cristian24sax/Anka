import Image from "next/image";
import { useGenerals } from "../../context/generals.context";
import { Img } from "../../interfaces";
import { ImageStrapi } from "../../lib/utils";
import { Button } from "../atoms/Button";
import { Information } from "../atoms/Information";
import { Container } from "../globals";

export interface HomeServiceProps {
  title: string;
  content: string;
  img: Img;
  section:string
}

export const HomeService = ({ title, content, img,section }: HomeServiceProps) => {
  const { polylang } = useGenerals();
  // console.log(img.url);
  return (
    <section className="HomeService" data-section={section}>
      <Container>
        <Information title={title} type="center" />
        <div className="HomeService-ctn">
          <picture className="HomeService-picture">
            <Image
              loader={() => ImageStrapi(img.url)}
              src={ImageStrapi(img.url)}
              width={500}
              height={500}
              alt="img"
            />
          </picture>
          <div className="HomeService-content">
            <div className="HomeService-content__info">{content}</div>
            <div className="HomeService-btn">
            <Button url="/services" type="primary" >{polylang.lbl_see_service}</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
