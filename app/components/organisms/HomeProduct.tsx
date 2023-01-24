import { useGenerals } from "../../context/generals.context";
import ReactMarkdown from "react-markdown";
import { Button } from "../atoms/Button";
import { Container } from "../globals";
import { Information } from "../atoms/Information";
import { ListProducts } from "../../interfaces/home";
import { Products, ProductsData } from "../../interfaces/products";
import { useEffect, useState } from "react";
import axios from "axios";
export interface HomeProductProps {
  title: string;
  content: string;
  list: ListProducts[];
  section: string;

}

export const HomeProduct = ({
  title,
  content,
  list,
  section,
}: HomeProductProps) => {
  const { polylang } = useGenerals();
  const [cantProduc, setCantProduc] = useState<number>();
  let type = "";
  const fecth = async () => {
    const result = await axios.get(
      `http://localhost:1337/api/products?[filters][category][name][$eq]=${type}`
    );
    setCantProduc(result.data.data.length)
  };

  const handleHover = (title:string) => {
    type = title;
    fecth();
  };
  return (
    <div className="HomeProduct " data-section={section}>
      <Container>
        <div>{title}</div>
        <div>{content}</div>
        {list.map((card, index) => (
          <div
            className="card bg-[red] p-[2rem] m-[2rem]"
            key={index}
            onMouseLeave={() => handleHover(card.title)}
          >
            <div>{card.title}</div>
            <div className="cantidad">{cantProduc}</div>
          </div>
        ))}
      </Container>
    </div>
  );
};
