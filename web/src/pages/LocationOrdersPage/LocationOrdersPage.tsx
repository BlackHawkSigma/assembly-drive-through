import { MetaTags } from '@redwoodjs/web'

import OrdersByPickuplocationCell from 'src/components/OrdersByPickuploctionCell'

type LocationOrdersPageProps = {
  id: unknown
}

const LocationOrdersPage = ({ id }: LocationOrdersPageProps) => {
  return (
    <>
      <MetaTags title="LocationOrders" description="LocationOrders page" />

      {typeof id === 'number' ? <OrdersByPickuplocationCell id={id} /> : null}
    </>
  )
}

export default LocationOrdersPage
