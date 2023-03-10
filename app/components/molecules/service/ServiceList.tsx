import { ListService } from 'interfaces/services'
import { ServiceCard } from './ServiceCard'

export interface ServiceListProps {
  listService: ListService[]
}

export const ServiceList = ({ listService }: ServiceListProps) => {
  return (
    <div className="ServiceList">
      {listService.map(({ title, content, img }, index) => (
        <ServiceCard
          key={index}
          title={title}
          content={content}
          img={img.url}
        />
      ))}
    </div>
  )
}
