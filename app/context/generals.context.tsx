import { createContext, FC, PropsWithChildren, useContext, useState } from "react";
import { GeneralsData, PolylangData } from "../interfaces";

export interface ControllerState {
    options: GeneralsData
    polylang: PolylangData
 }
 
 const useGeneralsController = ({ options, polylang }: ControllerState): ControllerState => {
    const [generals, setGenerals] = useState({ options, polylang })
 
    return { options: generals.options, polylang: generals.polylang }
 }

const initialState: ControllerState = {
    polylang: {
       id: 1,
       lbl_contact_us:  '',
       lbl_see_more:    '',
       lbl_see_service: '',
       createdAt: '',
       updatedAt: '',
       publishedAt: '',
       menu: [],
    },
    options: {
       id: 0,
       address: '',
       phone: '',
       phone2:'',
       email: '',
       createdAt: '',
       updatedAt: '',
       publishedAt: '',
       url_map: '',
       facebook_id: '',
       pixel_facebook: '',
       schedule: '',
       telf: '',
       tag_manager: '',
       google_analytics: '',
       socials_networks: [],
       logo: {
          id: 0,
          name: '',
          width: 0,
          height: 0,
          size: 0,
          url: '',

       },
    },
 }
 
// create our context

const GeneralsContext = createContext<ReturnType<typeof useGeneralsController>>(initialState)

interface GeneralsProviderProps extends PropsWithChildren {
   generals: ControllerState
}

export const GeneralsProvider: FC<GeneralsProviderProps> = ({ children, generals }) => {
   return <GeneralsContext.Provider value={useGeneralsController(generals)}>{children}</GeneralsContext.Provider>
}

export const useGenerals = () => useContext(GeneralsContext)

