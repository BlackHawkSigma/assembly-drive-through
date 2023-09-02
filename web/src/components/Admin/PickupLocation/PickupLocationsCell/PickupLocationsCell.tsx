import type { FindPickupLocations } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import PickupLocations from 'src/components/Admin/PickupLocation/PickupLocations'

export const QUERY = gql`
  query FindPickupLocations {
    pickupLocations {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No pickupLocations yet. '}
      <Link to={routes.adminNewPickupLocation()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  pickupLocations,
}: CellSuccessProps<FindPickupLocations>) => {
  return <PickupLocations pickupLocations={pickupLocations} />
}
