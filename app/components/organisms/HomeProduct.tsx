import { useGenerals } from '../../context/generals.context'
import ReactMarkdown from 'react-markdown'
import { Button } from '../atoms/Button'
import { Container } from '../globals'
import { Information } from '../atoms/Information'
export interface HomeProductProps {
  title: string
  content: string
  list: string
  section:string
}

export const HomeProduct = ({ title, content, list,section }: HomeProductProps) => {
  const { polylang } = useGenerals()
  return (
    <div className="HomeProduct" data-section={section}>
      <Container>
        <div className='HomeProduct-ctn'>
          <div className="HomeProduct-left">
            {/* <h3 className="HomeProduct-h3">{title}</h3> */}
            <Information title={title}/>
            <p className="HomeProduct-p">{content}</p>
            <div>
              <Button type="primary">{polylang.lbl_see_more}</Button>
            </div>
          </div>
          <div className="HomeProduct-right">
            <ReactMarkdown>{list}</ReactMarkdown>
          </div>
        </div>
      </Container>
    </div>
  )
}
