import type { NextPage } from "next";
import Image from "next/image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Information } from "../components/atoms/Information";
import { Container } from "../components/globals";
import { About, AboutData } from "../interfaces/about";
// import { Service } from '../interfaces'
import { baseApi } from "../lib/baseApi";
import { getGenerals } from "../lib/getGenerals";
import { ImageStrapi } from "../lib/utils";

export interface AboutProps {
  about: AboutData;
}
const AboutPage: NextPage<AboutProps> = ({ about }) => {
  //   console.log(about);
  return (
    <div className="AboutPage main-page">
      <Information title={about.title} type="center" />
      <Container>
        <div className="AboutPage-content">
          <picture className="AboutPage-picture">
            <Image
              loader={() => ImageStrapi(about.img.url)}
              src={ImageStrapi(about.img.url)}
              width={500}
              height={500}
              alt="img"
            />
          </picture>
          <div className="AboutPage-info">
            <h2 className="AboutPage-subtitle">{about.subtitle}</h2>
            <ReactMarkdown>{about.content}</ReactMarkdown>
            <ReactMarkdown>{about.mision}</ReactMarkdown>
            <ReactMarkdown>{about.vision}</ReactMarkdown>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;

export const getStaticProps = async () => {
  const generals = await getGenerals();
  const [{ data: about }] = await Promise.all([
    baseApi.get("/about?populate=deep"),
  ]);
  return {
    props: {
      generals,
      about: about.data,
    },
  };
};
