import {
  useState,
  createContext,
  useContext,
  PropsWithChildren,
  FC,
  Dispatch,
  SetStateAction,
} from 'react'

interface NavbarContextType {
  active: Number
  setActive: Dispatch<SetStateAction<number>>
}

const ActiveCategoryContext = createContext<NavbarContextType>({
  active: 0,
  setActive: () => '',
})

export const ActiveCategoryProvider: FC<PropsWithChildren> = ({ children }) => {
  const [active, setActive] = useState<number>(0)
  return (
    <ActiveCategoryContext.Provider
      value={{
        active,
        setActive,
      }}
    >
      {children}
    </ActiveCategoryContext.Provider>
  )
}

export const useCategoryContext = () => {
  const context = useContext(ActiveCategoryContext)

  if (context === undefined) {
    throw new Error('NavbarContext debe ser usado dentro de NavbarProvider')
  }

  return context
}
