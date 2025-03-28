import type {
  FindOrdersByPickuploctionQuery,
  FindOrdersByPickuploctionQueryVariables,
} from 'types/graphql'

import { routes, Link } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import CellEmpty from '../CellEmpty/CellEmpty'
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
        deliverLocation {
          name
        }
      }
      createdAt
      claimedAt
    }
  }
`

export const beforeQuery = (props) => {
  return { variables: props, pollInterval: 5_000 }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <CellEmpty />

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
