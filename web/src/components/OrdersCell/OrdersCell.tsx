import type { OrdersQuery } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import OrderCard from '../OrderCard/OrderCard'

export const QUERY = gql`
  query OrdersQuery {
    orders {
      id
      item {
        id
        name
        pickupLocation {
          name
        }
      }
      deliverLocation {
        name
      }
      createdAt
      claimedAt
      claimedBy
    }
  }
`

export const beforeQuery = (props) => {
  return { variables: props, pollInterval: 5_000 }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ orders }: CellSuccessProps<OrdersQuery>) => {
  return (
    <div className="flex flex-col gap-2 md:grid md:grid-cols-2 lg:grid-cols-3 xl:px-8 2xl:grid-cols-4">
      {orders.map((order) => (
        <Link to={routes.order({ id: order.id })} key={order.id}>
          <OrderCard order={order} />
        </Link>
      ))}
    </div>
  )
}
