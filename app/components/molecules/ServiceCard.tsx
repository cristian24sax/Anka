import Image from 'next/image'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useGenerals } from '../../context/generals.context'
import { ImageStrapi } from '../../lib/utils'
import { Button } from '../atoms/Button'

export interface ardProps {
  title: string
  content: string
  img: string
}

export const ServiceCard = ({ title, content, img }: ardProps) => {
  const { polylang } = useGenerals()

  return (
    <div className='ServiceCard'>
      <picture className="ServiceCard-picture">
        <Image
          loader={() => ImageStrapi(img)}
          src={ImageStrapi(img)}
          width={500}
          height={500}
          alt="img"
        />
      </picture>
      <div className="ServiceCard-info">
        <h2 className="ServiceCard-info__title">{title}</h2>
        <ReactMarkdown>{content}</ReactMarkdown>
        <div className='ServiceCard-info__btn'>
          <Button url="/contact" type="primary">{polylang.lbl_contact_us}</Button>
        </div>
      </div>
    </div>
  )
}
