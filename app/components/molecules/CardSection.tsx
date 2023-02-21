import Image from "next/image";
import { useGenerals } from "../../context/generals.context";
import { Img } from "../../interfaces";
import { ImageStrapi } from "../../lib/utils";
import { Button } from "../atoms/Button";

export interface CardSectionProps {
  title: string;
  content?: string;
  img: Img;
  img_mobile: Img;
  slug?: string;
  show: boolean;
}

export const CardSection = ({
  title,
  content,
  img,
  img_mobile,
  slug,
  show,
}: CardSectionProps) => {
  const { polylang } = useGenerals();
  // console.log(img.url)
  return (
    <div className="CardSection">
      <picture className="CardSection-picture">
        <source media="(min-width: 1200px)" srcSet={ImageStrapi(img?.url)} />
        <Image
          loader={() => ImageStrapi(img_mobile?.url)}
          src={ImageStrapi(img_mobile?.url)}
          width={500}
          // height={img_mobile?.height}
          height={500}
          alt="homebanner-bg"
        />
      </picture>
      <div className="CardSection-info">
        <div className="CardSection-title">{title}</div>
        <div className="CardSection-content">{content}</div>
        {show && (
          <div className="CardSection-btn">
            <Button url={`${slug}`} type="primary">
              {polylang.lbl_see_more}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
