import { GetStaticProps } from "next";
import { Service, ServiceData } from "../../interfaces/services";
import { baseApi } from "../../lib/baseApi";
import { getGenerals } from "../../lib/getGenerals";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { ImageStrapi } from "../../lib/utils";

export interface ServicesPageProps {
  service: ServiceData;
}

const ServicesPage = ({ service }: ServicesPageProps) => {
  // console.log(title);
  // console.log(service);
  return (
    <div className="ServicePage">
      <div className="ServicePage-h2">{service.title}</div>
      <picture>
      <Image
              loader={() => ImageStrapi(service.img?.url)}
              src={ImageStrapi(service.img?.url)}
              width={500}
              height={500}
              alt="img"
            />
      </picture>
      <div className="ServicePage-content">
        <ReactMarkdown>{service.List_services}</ReactMarkdown>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const generals = await getGenerals();

  const [{ data: service }] = await Promise.all([
    baseApi.get<Service>("/service?populate=deep"),
  ]);

  return {
    props: {
      service: service.data,
      generals,
    },
    revalidate: 1,
  };
};

export default ServicesPage;
