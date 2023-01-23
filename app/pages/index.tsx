import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { getGenerals } from '../lib/getGenerals'
// import { Home, HomeData } from '../interfaces'
// import { SeoEngine } from '../components/globals'
import { baseApi } from '../lib/baseApi'
// import {
//    BannerCharacteristics,
//    BannerInternal,
//    HomeAbout,
//    HomeHowWork,
//    HomeLocation,
//    HomeRewiew,
//    HomeServices,
//    MainBanner,
// } from '../components/organisms'
import { Home, HomeData } from '../interfaces/home'
// import { HomeAbout } from "../components/molecules";
import { HomeAbout } from '../components/molecules'
import { HomeService } from '../components/organisms/HomeService'
import { HomeBanner } from '../components/organisms/HomeBanner'
import { HomeProduct } from '../components/organisms/HomeProduct'
import { HomeCard } from '../components/organisms'
import { HomeBannerMiddle } from '../components/organisms/HomeBannerMiddle'
import { CategoriesData } from '../interfaces/categories'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Products, ProductsData } from '../interfaces/products'
// import { HomeHowWork } from '../components/organisms/HomeHowWork'

interface HomeProps {
  home: HomeData
  products: ProductsData
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
  const [cantProduc, setCantProduc] = useState<number>()
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
  // console.log(categories?.filter(cat => cat.category.name==='Faros Led'))

  return (
    <main className={`min-h-screen main-page`}>
      <HomeBanner
        title={home.homeBanner.title}
        subtitle={home.homeBanner.subtitle}
        content={home.homeBanner.content}
        img={home.homeBanner.img}
        img_mobile={home.homeBanner.img_mobile}
        section="/"
      />
      {/* <HomeAbout
        title={home.about.title}
        img={home.about.img}
        cards={home.about.card}
        section="/our"
      /> */}
      <HomeCard title={home.homeCard.title} cards={home.homeCard.cards} />
      <HomeBannerMiddle
        text={home.banner_middle.description}
        img={home.banner_middle.img.url}
      />
      {/* <HomeService
        title={home.service.title}
        content={home.service.content}
        img={home.service.img}
        section="/service"
      />
      <HomeProduct
        title={home.HomeProducts.title}
        content={home.HomeProducts.content}
        list={home.HomeProducts.range_products}
        section="/products"
      /> */}
      {/* <HomeAbout title={home.service.title} content={home.service.content} /> */}
      {/* <MainBanner
            title={home.main_banner.titles.title}
            subtitle={home.main_banner.titles.subtitle}
            content={home.main_banner.content}
            background={home.main_banner.bg.url}
            backgroundMobile={home.main_banner.bg_mobile.url}
         />
         <BannerCharacteristics characteristicsList={home.home_characteristics.characteristics_list} />
         <HomeService title={home.home_services.titles.title} subtitle={home.home_services.titles.subtitle} content={home.home_services.content} services={services}
         />
         <BannerInternal />
         <HomeHowWork
            title={home.home_work.title.title}
            subtitle={home.home_work.title.subtitle}
            content= {home.home_work.content}
            card_work={home.home_work.card_work}
            img={home.home_work.img}
            img_mobile={home.home_work.img_mobile}
         />
         <HomeRewiew
            title={home.home_review.title.title}
            subtitle={home.home_review.title.subtitle}
            content={home.home_review.content}
            list_review={home.home_review.card_review}
         
         />
         <HomeAbout
            title={home.home_about.titles.title}
            subtitle={home.home_about.titles.subtitle}
            content={home.home_about.content}
            images={home.home_about.images}
         />
         
         <HomeLocation
            title={home.home_location.titles.title}
            subtitle={home.home_location.titles.subtitle}
            content={home.home_location.content}
            map={home.home_location.map}
            bg={home.home_location.bg_desktop.url}
         />
         <SeoEngine seo={home.seo} /> */}
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
      products: products.data,
      generals,
    },
    revalidate: 1,
  }
}

export default HomePage
