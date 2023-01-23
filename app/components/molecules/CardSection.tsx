import Image from "next/image";
import { useGenerals } from "../../context/generals.context";
import { Img } from "../../interfaces";
import { ImageStrapi } from "../../lib/utils";
import { Button } from "../atoms/Button";

export interface CardSectionProps {
  title: string;
  content: string;
  img: Img;
  img_mobile: Img;
}

export const CardSection = ({ title, content, img ,img_mobile }: CardSectionProps) => {
  const { polylang } = useGenerals();
  // console.log(img.url)
  return (
    <div className="CardSection">
      <picture className="CardSection-picture">
      <source media="(min-width: 1200px)"  srcSet={ImageStrapi(img.url)} />
        <Image
          loader={() => ImageStrapi(img_mobile.url)}
          src={ImageStrapi(img_mobile.url)}
          width={500}
          height={img_mobile.height}
          alt="homebanner-bg"
        />
      </picture>
    <div className="CardSection-info">
    <div className="CardSection-title">{title}</div>
      <div className="CardSection-content">{content}</div>
      <div className="CardSection-btn">
        <Button type="primary">{polylang.lbl_see_more}</Button>
      </div>
    </div>
    </div>
  );
};
