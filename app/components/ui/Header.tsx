import { useRouter } from "next/router"
import { useState } from "react"
import { useGenerals } from "../../context/generals.context"
import { useNavbarContext } from "../../context/navbar.context"
import { Socials ,Logo, MenuIcon} from "../atoms"
import { NavBar } from "../organisms/NavBar"


export const Header = ({})=>{
    const {options} = useGenerals()
    const [isMenuOpen,setIsMenuOpen] = useState<boolean>(false)
    const {isHeaderWhite } = useNavbarContext()
    const router = useRouter()
    // console.log(isHeaderWhite)

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState)
        document.body.classList.toggle('no-scroll')
      }
    const closeMenu =()=>{
        setIsMenuOpen(false);
        document.body.classList.remove('no-scroll')
    }
    return(
        <header className={`Header ${
            isHeaderWhite|| router.asPath!=='/'? '' : ''
        }`}
        id="Header"
        >
        <div
            onClick={closeMenu}
            className={`Header-overlay ${isMenuOpen&& 'isActive'}`}
        ></div>
        <Logo/>
        <Socials className={`${isMenuOpen && 'visibleForMenuMobile'} `}/>
        <div className={`Header-menuIcon ${isMenuOpen && 'isActive'}`}>
        <MenuIcon setIsActive={toggleMenu} isActive={isMenuOpen} />
        </div>
      <NavBar
      isMenuOpen={isMenuOpen}
      closeMenu={closeMenu}
      />

        </header>
    )
}