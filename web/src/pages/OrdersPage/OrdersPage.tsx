import { MetaTags } from '@redwoodjs/web'

import OrdersCell from 'src/components/OrdersCell'

const OrdersPage = () => {
  return (
    <>
      <MetaTags title="Orders" description="Orders page" />

      <OrdersCell />
    </>
  )
}

export default OrdersPage
