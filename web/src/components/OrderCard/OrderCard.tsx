import { FindOrderQuery, FindOrderQueryVariables } from 'types/graphql'

import { CellSuccessProps } from '@redwoodjs/web'

type OrderCardProps = CellSuccessProps<FindOrderQuery, FindOrderQueryVariables>

const OrderCard = ({ order }: OrderCardProps) => {
  return (
    <div className="m-2 rounded border p-1 shadow">
      <div className="flex justify-between">
        <div>
          <p className="text-2xl">{order.item.id}</p>
          <p className="text-center text-3xl">{order.item.name}</p>
        </div>
        <p>{order.id}</p>
      </div>
      <div className="flex justify-around text-2xl">
        <p>{order.pickupLocation.name}</p>
        <span> ={'>'} </span>
        <p>{order.deliverLocation.name}</p>
      </div>
      <div className="text-end">
        {new Date(order.createdAt).toLocaleString()}
      </div>
    </div>
  )
}

export default OrderCard
