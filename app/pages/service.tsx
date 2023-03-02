import type { NextPage } from 'next'
import Image from 'next/image'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Information } from 'components/atoms/Information'
import { Container } from 'components/globals'
import { ServiceList } from 'components/molecules/service/ServiceList'
import { ServiceData } from 'interfaces/services'
import { baseApi } from 'lib/baseApi'
import { getGenerals } from 'lib/getGenerals'
import { ImageStrapi } from 'lib/utils'

export interface ServiceProps {
  service: ServiceData
}
const ServicePage: NextPage<ServiceProps> = ({ service }) => {
  // console.log(service);
  return (
    <div className="ServicePage main-page">
      <Information title={service.title} type="center" />
      <h3 className="ServicePage-subtitle">{service.subtitle}</h3>
      <Container>
        <div className="ServicePage-content">
          <ServiceList listService={service.service} />
        </div>
      </Container>
    </div>
  )
}

export default ServicePage

export const getStaticProps = async () => {
  const generals = await getGenerals()
  const [{ data: service }] = await Promise.all([
    baseApi.get('/service?populate=deep'),
  ])
  return {
    props: {
      generals,
      service: service.data,
    },
  }
}
