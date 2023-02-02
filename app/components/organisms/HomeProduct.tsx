import { ListProducts } from '../../interfaces/home'
import { Information } from '../atoms/Information'
import { Container } from '../globals'
import { HomeProductList } from '../molecules'
export interface HomeProductProps {
  title: string
  content: string
  list: ListProducts[]
  section: string
}

export const HomeProduct = ({
  title,
  content,
  list,
  section,
}: HomeProductProps) => {

  return (
    <div className="HomeProduct " data-section={section}>
      <Container>
        <Information title={title} type="left" />
        <div className="HomeProduct-content">{content}</div>

        <HomeProductList list={list} />
      </Container>
    </div>
  )
}
