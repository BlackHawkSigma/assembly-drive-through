import { MetaTags } from '@redwoodjs/web'

import OrdersCell from 'src/components/OrdersCell'

const OrdersPage = () => {
  return (
    <>
      <MetaTags title="Orders" description="Orders page" />

      <div className="mx-auto md:w-96">
        <OrdersCell />
      </div>
    </>
  )
}

export default OrdersPage
