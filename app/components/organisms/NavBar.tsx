import Link from "next/link"
import { useRouter } from "next/router"
import { FC, useState } from "react"
import { useGenerals } from "../../context/generals.context"
import { useNavbarContext } from "../../context/navbar.context"
import { Logo } from "../atoms"

interface NavbarProps {
    isMenuOpen: boolean
    closeMenu: () => void
    // services: ServiceData[]
 }
 
 export const NavBar: FC<NavbarProps> = ({ isMenuOpen, closeMenu }) => {

    const { polylang } = useGenerals()
    const [isOpenServices, setIsOpenServices] = useState<boolean>(false)
    const [showAfterClick, setShowAfterClick] = useState<boolean>(false)
    const { isHeaderWhite, setIsOpacitySlug,setServiceSelected} = useNavbarContext()
    const router = useRouter()
    const handleClick = () => {
       closeMenu()
       setIsOpacitySlug(false)
       setShowAfterClick(true)
       setIsOpenServices(false)
       setTimeout(() => {
          // setShowAfterClick(false)
       }, 300)
       setServiceSelected('')
    }
    return (
        <nav className={`Navbar ${isMenuOpen?'isActive':''}`}>
            <div className="Navbar-logo">
                <Logo/>
            </div>
            <ul className="Navbar-ul">
            {
                polylang.menu.map(({label,url},index)=><Link href={url}  key={index} className={`Navbar-a`} onClick={handleClick}>
                    {label} 
                </Link>)

            }
            </ul>
        </nav>
    )
}