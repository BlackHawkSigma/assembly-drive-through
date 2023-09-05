import { SlArrowRight } from 'react-icons/sl'
import { FindOrderQuery, FindOrderQueryVariables } from 'types/graphql'

import { CellSuccessProps } from '@redwoodjs/web'

type OrderCardProps = CellSuccessProps<FindOrderQuery, FindOrderQueryVariables>

const OrderCard = ({ order }: OrderCardProps) => {
  const isClaimed = typeof order.claimedAt === 'string'

  const created = isWithin24Hours(order.createdAt, new Date())
    ? new Date(order.createdAt).toLocaleTimeString()
    : new Date(order.createdAt).toLocaleDateString()

  const claimed =
    isClaimed && isWithin24Hours(order.claimedAt, new Date())
      ? new Date(order.claimedAt).toLocaleTimeString()
      : new Date(order.claimedAt).toLocaleDateString()

  return (
    <div
      className={`rounded border p-1 shadow ${
        isClaimed ? 'bg-orange-300' : ''
      }`}
    >
      <div className="mb-1 flex justify-between">
        <p className="text-2xl">{order.item.id}</p>
        <p>{order.id}</p>
      </div>
      <p className="mb-2 text-center text-3xl">{order.item.name}</p>
      <div className="mb-1 flex items-center justify-center gap-2 text-2xl">
        <p>{order.item.pickupLocation.name}</p>
        <SlArrowRight />
        <p>{order.deliverLocation.name}</p>
      </div>

      <div className="flex flex-col items-end">
        <div>erstellt: {created}</div>

        {isClaimed && (
          <div>
            {order.claimedBy && (
              <>
                von <span className="font-bold">{order.claimedBy} </span>
              </>
            )}
            angenommen: {claimed}
          </div>
        )}
      </div>
    </div>
  )
}

export default OrderCard

const isWithin24Hours = (
  first: Date | string,
  second: Date | string
): boolean => {
  return new Date(second).valueOf() - new Date(first).valueOf() < 8.64e7
}
