import { getGenerals } from 'lib/getGenerals'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
// import { Home, HomeData } from 'interfaces'
// import { SeoEngine } from 'components/globals'
import { baseApi } from 'lib/baseApi'
// import {
//    BannerCharacteristics,
//    BannerInternal,
//    HomeAbout,
//    HomeHowWork,
//    HomeLocation,
//    HomeRewiew,
//    HomeServices,
//    MainBanner,
// } from 'components/organisms'
import { Home, HomeData } from 'interfaces/home'
// import { HomeAbout } from "components/molecules";
import { HomeCard } from 'components/organisms'
import { HomeBanner } from 'components/organisms/HomeBanner'
import { HomeProduct } from 'components/organisms/HomeProduct'
import { Products } from 'interfaces/products'
// import { HomeHowWork } from 'components/organisms/HomeHowWork'

interface HomeProps {
  home: HomeData
  products: Products
}

const HomePage: NextPage<HomeProps> = ({ home, products }) => {
  // useEffect(() => {
  //    const elements = document.querySelectorAll('[data-section]')
  //    setElements(elements)
  // }, [setElements])

  // useEffect(() => {
  //    entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //          const section = entry.target.getAttribute('data-section')

  //          // if (section === '#form') return

  //          setActiveSection(String(section))
  //       }
  //    })
  // }, [entries, setActiveSection])
  // useEffect(() => {
  //    if (scrolltoSectionFromContact) {
  //       goToSection(scrolltoSectionFromContact)
  //    }
  // }, [scrolltoSectionFromContact])
  // console.log(categories)
  // console.log(home.seo)
  
  // const type= "Faros Led"
  // const Fetchcategories = async () => {
  //   const result = await axios.get(
  //     `http://localhost:1337/api/products?[filters][category][name][$eq]=${type}`
  //   )
  //   setCantProduc(result.data)
  // }

  // useEffect(() => {
  //   Fetchcategories()
  // }, [])

  // const type=categories.map(cat => cat.category.name)
  // console.log(products?.filter(cat => cat.category.name==='Faros Led'))

  return (
    <main className={`min-h-screen main-page`}>
      {/* <button onClick={}></button> */}
      <HomeBanner
        title={home.homeBanner.title}
        subtitle={home.homeBanner.subtitle}
        content={home.homeBanner.content}
        img={home.homeBanner.img}
        img_mobile={home.homeBanner.img_mobile}
        section="/"
      />
      <HomeCard title={home.homeCard.title} cards={home.homeCard.cards} />
      {/* <HomeBannerMiddle
        text={home.banner_middle.description}
        img={home.banner_middle.img.url}
      />
      {/* <OurAccordion/> */}
      
      <HomeProduct
        title={home.HomeProductsList.title}
        content={home.HomeProductsList.content}
        list={home.HomeProductsList.List_cardProducts}
        section="/products"
      />
      {/* <HomeMarcas title={home.HomeMarca.title} marcas={home.HomeMarca.marcas}/> */}
         {/* <SeoEngine seo={home.seo} /> */}
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const generals = await getGenerals()

  const [{ data: home }, { data: products }] = await Promise.all([
    baseApi.get<Home>('/home?populate=deep'),
    baseApi.get<Products>('/products?populate=*'),
  ])
  return {
    props: {
      home: home.data,
      products: products,
      generals,
    },
    revalidate: 1,
  }
}

export default HomePage
