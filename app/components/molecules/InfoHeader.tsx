import { useRouter } from 'next/router'
import { FC } from 'react'
import { useGenerals } from '../../context/generals.context'
import { Socials } from '../atoms'

export const InfoHeader: FC = () => {
   const { options } = useGenerals()
   const router = useRouter()
   return (
      <div className={`InfoHeader`} data-section="InfoHeader">
         <div className="InfoHeader-container">
            <ul className="InfoHeader-ul">
               <li className="InfoHeader-li">
                  <a
                     className={`InfoHeader-a ${!options.url_map ? 'pointer-events-none' : ''}`}
                     href={options.url_map}
                     target="_blank"
                     rel="noreferrer"
                  >
                     <i className="icon-maps-2 InfoHeader-iconMap"></i>
                     <span dangerouslySetInnerHTML={{ __html: options.address }}></span>
                  </a>
               </li>
               <li className="InfoHeader-li">
                  <a className="InfoHeader-a" href={`tel:${options.phone}`}>
                     <i className="icon-phone"></i>
                     {options.phone}
                  </a>
               </li>
               <li className="InfoHeader-li">
                  <a className="InfoHeader-a" href={`mailto:${options.email}`}>
                     <i className="icon-email"></i>
                     {options.email}
                  </a>
               </li>
            </ul>
            <Socials />
         </div>
      </div>
   )
}
