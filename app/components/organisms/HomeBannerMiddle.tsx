import { CSSProperties } from 'react'
import { ImageStrapi } from '../../lib/utils'

export interface HomeBannerMiddleProps {
  img: string
  text: string
}

export const HomeBannerMiddle = ({ img, text }: HomeBannerMiddleProps) => {
  return (
    <div
      className="BannerMiddle"
      style={
        {
          '--bg--desktop': `url(${ImageStrapi(img)})`,
        } as CSSProperties
      }
    >
      <div className='BannerMiddle-text'>{text}</div>
    </div>
  )
}
