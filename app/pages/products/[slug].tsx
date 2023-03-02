import { GetStaticPaths, GetStaticProps } from "next";
import { Container } from "../../components/globals";
import { CardSection } from "../../components/molecules/CardSection";
import { Home } from "../../interfaces/home";
import { Products, ProductsData } from "../../interfaces/products";
import { baseApi } from "../../lib/baseApi";
import { getGenerals } from "../../lib/getGenerals";

export interface ProductListProps {
  products: ProductsData[];
}
const ProductList = ({ products }: ProductListProps) => {
  // console.log("service", product);

  return (
    <div className="ProductsPageList ">
      <Container>
        <div className="ProductsPageList-card">
          {/* {products.map((product) => (
            <CardSection
              key={product.id}
              title={product.title}
              // content={product.description as string}
              img={product?.img}
              img_mobile={product?.img}
              show={false}
            />
          ))} */}
          slug
        </div>
      </Container>
    </div>
  );
};

export default ProductList;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: products } = await baseApi.get<Home>("/home?populate=deep");

  const paths = products.data.HomeProductsList.List_cardProducts.map(
    (product) => ({
      params: { slug: product.slug },
    })
  );
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const generals = await getGenerals();
  const { slug } = params as { slug: string };
  const [{ data: products }, { data: product }] = await Promise.all([
    baseApi.get<Products>(
      `/products?[filters][category][name][$eq]=${slug.replace(
        "-",
        " "
      )}&populate=*`
    ),
    baseApi.get(`/home?populate=deep`),
  ]);

  return {
    props: {
      products: products.data,
      product: product.data,
      generals,
    },

    revalidate: 1,
  };
};
