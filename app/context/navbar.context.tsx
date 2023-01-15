import { useState, createContext, useContext, PropsWithChildren, FC, Dispatch, SetStateAction } from 'react'

interface NavbarContextType {
   activeSection: string
   setActiveSection: Dispatch<SetStateAction<string>>
   isOpacitySlug: boolean
   setIsOpacitySlug: Dispatch<SetStateAction<boolean>>
   isHeaderWhite: boolean
   setIsHeaderWhite: Dispatch<SetStateAction<boolean>>
   serviceSelected: string
   setServiceSelected: Dispatch<SetStateAction<string>>
   scrolltoSectionFromContact: string
   setscrolltoSectionFromContact: Dispatch<SetStateAction<string>>
}

const NavbarContext = createContext<NavbarContextType>({
   activeSection: '',
   setActiveSection: () => '',
   isOpacitySlug: false || true,
   setIsOpacitySlug: () => false || true,
   isHeaderWhite: false || true,
   setIsHeaderWhite: () => false || true,
   serviceSelected: '',
   setServiceSelected: () => '',
   scrolltoSectionFromContact: '',
   setscrolltoSectionFromContact: () => '',
})

export const NavbarProvider: FC<PropsWithChildren> = ({ children }) => {
   const [activeSection, setActiveSection] = useState<string>('')
   const [isOpacitySlug, setIsOpacitySlug] = useState<boolean>(false)
   const [isHeaderWhite, setIsHeaderWhite] = useState<boolean>(false)
   const [serviceSelected, setServiceSelected] = useState<string>('')
   const [scrolltoSectionFromContact, setscrolltoSectionFromContact] = useState<string>('')

   return (
      <NavbarContext.Provider
         value={{
            activeSection,
            setActiveSection,
            isOpacitySlug,
            setIsOpacitySlug,
            isHeaderWhite,
            setIsHeaderWhite,
            serviceSelected,
            setServiceSelected,
            scrolltoSectionFromContact,
            setscrolltoSectionFromContact,
         }}
      >
         {children}
      </NavbarContext.Provider>
   )
}

export const useNavbarContext = () => {
   const context = useContext(NavbarContext)

   if (context === undefined) {
      throw new Error('NavbarContext debe ser usado dentro de NavbarProvider')
   }

   return context
}
