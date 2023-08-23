import { MetaTags } from '@redwoodjs/web'

import OrderCell from 'src/components/OrderCell'

type OrderPageProps = {
  id: number
}

const OrderPage = ({ id }: OrderPageProps) => {
  return (
    <>
      <MetaTags title={`Auftrag Nr. ${id}`} description="Order page" />

      <OrderCell id={id} />
    </>
  )
}

export default OrderPage
