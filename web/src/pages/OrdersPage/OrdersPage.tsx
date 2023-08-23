import { MetaTags } from '@redwoodjs/web'

import OrdersCell from 'src/components/OrdersCell'

const OrdersPage = () => {
  return (
    <>
      <MetaTags title="Aufträge" description="Orders page" />

      <div className="mx-auto md:w-1/3">
        <OrdersCell />
      </div>
    </>
  )
}

export default OrdersPage
