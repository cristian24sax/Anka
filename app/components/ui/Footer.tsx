import React from 'react'
import { Socials } from '../atoms'
import { useGenerals } from '../../context/generals.context'
import { convertToHtml, goToSection } from '../../lib/utils'
import { Container } from '../globals'

export const Footer = () => {
   const { options } = useGenerals()
   const upToHeader = () => {
      goToSection('InfoHeader')
   }
   return (
      <footer className="Footer" id="footer">
         <Container>
            <div className="Footer__wrap">
               <ul className="Footer__list">
                  <li className="Footer__list__item address">
                     <span className="icon-maps-2"></span>
                     <a
                        className={`Footer-a ${!options.url_map ? 'pointer-events-none' : ''}`}
                        href={options.url_map}
                        target="_blank"
                        rel="noreferrer"
                        dangerouslySetInnerHTML={{ __html: convertToHtml(options.address) }}
                     ></a>
                  </li>

                  <li className="Footer__list__item">
                     <span className="icon-phone"></span>
                     <a href={`tel:${options.phone}`}>{options.phone} </a>
                  </li>
                  <li className="Footer__list__item">
                     <span className="icon-email"></span>
                     <a href={`mailto:${options.email}`}>{options.email}</a>
                  </li>
               </ul>
               <div className="Footer__socials-ctn">
                  <Socials />
               </div>
               <span onClick={upToHeader} className="icon-arrow-right"></span>
            </div>
         </Container>
      </footer>
   )
}
