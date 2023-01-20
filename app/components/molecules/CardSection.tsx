import Image from "next/image";
import { useGenerals } from "../../context/generals.context";
import { Img } from "../../interfaces";
import { ImageStrapi } from "../../lib/utils";
import { Button } from "../atoms/Button";

export interface CardSectionProps {
  title: string;
  content: string;
  img: Img;
}

export const CardSection = ({ title, content, img }: CardSectionProps) => {
  const { polylang } = useGenerals();
  // console.log(img.url)
  return (
    <div className="CardSection">
      <picture className="CardSection-picture">
        <Image
          loader={() => ImageStrapi(img.url)}
          src={ImageStrapi(img.url)}
          width={400}
          height={400}
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
