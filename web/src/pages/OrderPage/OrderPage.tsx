import { MetaTags } from '@redwoodjs/web'

import OrderCell from 'src/components/OrderCell'

type OrderPageProps = {
  id: unknown
}

const OrderPage = ({ id }: OrderPageProps) => {
  return (
    <>
      <MetaTags title={`Auftrag Nr. ${id}`} description="Order page" />

      {typeof id === 'number' ? <OrderCell id={id} /> : null}
    </>
  )
}

export default OrderPage
