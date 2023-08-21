import type { FindOrderQuery, FindOrderQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import OrderCard from '../OrderCard/OrderCard'

export const QUERY = gql`
  query FindOrderQuery($id: Int!) {
    order: order(id: $id) {
      id
      item {
        code
        name
      }
      pickupLocation {
        name
      }
      deliverLocation {
        name
      }
      createdAt
      updatedAt
      fulfilledAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindOrderQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  order,
}: CellSuccessProps<FindOrderQuery, FindOrderQueryVariables>) => {
  return <OrderCard order={order} />
}
