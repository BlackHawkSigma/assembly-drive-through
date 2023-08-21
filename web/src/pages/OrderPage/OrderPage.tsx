import { MetaTags } from '@redwoodjs/web'

import OrderCell from 'src/components/OrderCell'

type OrderPageProps = {
  id: number
}

const OrderPage = ({ id }: OrderPageProps) => {
  return (
    <>
      <MetaTags title="Order" description="Order page" />

      <h1>OrderPage</h1>

      <OrderCell id={id} />
    </>
  )
}

export default OrderPage
