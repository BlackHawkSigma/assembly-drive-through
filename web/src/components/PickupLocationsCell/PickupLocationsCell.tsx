import type { PickupLocationsQuery } from 'types/graphql'

import { routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Link from 'src/components/Link/Link'

export const QUERY = gql`
  query PickupLocationsQuery {
    pickupLocations {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  pickupLocations,
}: CellSuccessProps<PickupLocationsQuery>) => {
  return (
    <div className="px-4">
      <h1 className="mb-4 py-2 text-center text-4xl">Abholorte</h1>

      <div className="flex flex-col gap-4">
        {pickupLocations.map((item) => {
          return (
            <Link key={item.id} to={routes.locationOrders({ id: item.id })}>
              {item.name}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
