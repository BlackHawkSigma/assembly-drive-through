import type { FindOrderQuery, FindOrderQueryVariables } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import Order from '../Order/Order'

export const QUERY = gql`
  query FindOrderQuery($id: Int!) {
    order: order(id: $id) {
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
  return <Order order={order} />
}
