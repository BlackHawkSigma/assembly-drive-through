import type {
  ClosedOrdersQuery,
  ClosedOrdersQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import ClosedOrdersTable from '../ClosedOrdersTable/ClosedOrdersTable'

export const QUERY: TypedDocumentNode<
  ClosedOrdersQuery,
  ClosedOrdersQueryVariables
> = gql`
  query ClosedOrdersQuery($from: DateTime!, $to: DateTime!) {
    closedOrders(from: $from, to: $to) {
      id
      item {
        name
      }
      claimedBy
      createdAt
      claimedAt
      fulfilledAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  closedOrders,
}: CellSuccessProps<ClosedOrdersQuery>) => {
  return (
    <main className="mx-4">
      <ClosedOrdersTable closedOrders={closedOrders} />
    </main>
  )
}
