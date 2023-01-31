import Image from 'next/image'
import { CSSProperties } from 'react'
import { useGenerals } from '../../context/generals.context'
import { Img } from '../../interfaces'
import { goToSection, ImageStrapi } from '../../lib/utils'
import { Button } from '../atoms/Button'
import { Information } from '../atoms/Information'

export interface HomeBannerProps {
  title: string
  subtitle: string
  img: Img
  content: string
  img_mobile: Img
  section:string
}

export const HomeBanner = ({
  title,
  subtitle,
  img,
  img_mobile,
  content,
  section
}: HomeBannerProps) => {
  const { polylang } = useGenerals()
  return (
    <div className="HomeBanner" data-section={section}>
      <div
        className="HomeBanner-picture"
        style={
          {
            '--bg-desktop': `url(${ImageStrapi(img.url)})`,
            '--bg-mobile': `url(${ImageStrapi(img_mobile.url)})`,
          } as CSSProperties
        }
      >
      
      <div className="HomeBanner-content">
        <h2 className='HomeBanner-h2'>{subtitle}</h2>
        <h1 className='HomeBanner-h1'>{title}</h1>
        <p className='HomeBanner-p'>{content}</p>
        <div className='HomeBanner-btn' >
          <Button type="primary" url="/service">{polylang.lbl_see_service}</Button>
        </div>
      </div>
      </div>
    </div>
  )
}
