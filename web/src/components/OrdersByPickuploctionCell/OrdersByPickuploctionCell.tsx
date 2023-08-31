import type {
  FindOrdersByPickuploctionQuery,
  FindOrdersByPickuploctionQueryVariables,
} from 'types/graphql'

import { routes, Link } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import OrderCard from '../OrderCard/OrderCard'

export const QUERY = gql`
  query FindOrdersByPickuploctionQuery($id: Int!) {
    orders: ordersByPickuploction(id: $id) {
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
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindOrdersByPickuploctionQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  orders,
}: CellSuccessProps<
  FindOrdersByPickuploctionQuery,
  FindOrdersByPickuploctionQueryVariables
>) => {
  return orders.map((order) => (
    <Link to={routes.order({ id: order.id })} key={order.id}>
      <OrderCard order={order} />
    </Link>
  ))
}
