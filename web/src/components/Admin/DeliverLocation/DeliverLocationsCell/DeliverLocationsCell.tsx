import type { FindDeliverLocations } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import DeliverLocations from 'src/components/Admin/DeliverLocation/DeliverLocations'

export const QUERY = gql`
  query FindDeliverLocations {
    deliverLocations {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No deliverLocations yet. '}
      <Link to={routes.adminNewDeliverLocation()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  deliverLocations,
}: CellSuccessProps<FindDeliverLocations>) => {
  return <DeliverLocations deliverLocations={deliverLocations} />
}
