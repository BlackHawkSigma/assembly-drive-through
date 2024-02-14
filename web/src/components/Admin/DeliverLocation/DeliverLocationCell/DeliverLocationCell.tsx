import type { FindDeliverLocationById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import DeliverLocation from 'src/components/Admin/DeliverLocation/DeliverLocation'

export const QUERY = gql`
  query FindDeliverLocationById($id: Int!) {
    deliverLocation: deliverLocation(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>DeliverLocation not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  deliverLocation,
}: CellSuccessProps<FindDeliverLocationById>) => {
  return <DeliverLocation deliverLocation={deliverLocation} />
}
