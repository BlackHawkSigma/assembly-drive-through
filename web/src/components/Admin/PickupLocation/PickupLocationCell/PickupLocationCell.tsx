import type { FindPickupLocationById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import PickupLocation from 'src/components/Admin/PickupLocation/PickupLocation'

export const QUERY = gql`
  query FindPickupLocationById($id: Int!) {
    pickupLocation: pickupLocation(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>PickupLocation not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  pickupLocation,
}: CellSuccessProps<FindPickupLocationById>) => {
  return <PickupLocation pickupLocation={pickupLocation} />
}
