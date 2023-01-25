import Image from "next/image"
import { useGenerals } from "../../context/generals.context"
import { ImageStrapi } from "../../lib/utils"


export const Logo =({})=>{
    const {options} = useGenerals()
    const url = `http://localhost:1337${options.logo.url}`
    // console.log(url)
    return(
        <picture className="BannerInternal-background">
            <Image loader={()=>url} src={ImageStrapi(options.logo.url)} width ={239} height={149} alt="logo"/>
            {/* <img src={url} alt="logo"/> */}
        </picture>

    )
}