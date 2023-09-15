import type { MyClaimsQuery } from 'types/graphql'
import { useReadLocalStorage } from 'usehooks-ts'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import LinkButton from 'src/components/Link/Link'
import OrderCard from 'src/components/OrderCard/OrderCard'

import CellEmpty from '../CellEmpty/CellEmpty'

export const QUERY = gql`
  query MyClaimsQuery {
    orders {
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
      claimedBy
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <CellEmpty />

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ orders }: CellSuccessProps<MyClaimsQuery>) => {
  const userName = useReadLocalStorage('user-name')

  const claims = orders.filter((order) => order.claimedBy === userName)

  return userName ? (
    <div className="flex flex-col gap-2 md:grid md:grid-cols-2 lg:grid-cols-3 xl:px-8 2xl:grid-cols-4">
      {claims.map((order) => (
        <Link to={routes.order({ id: order.id })} key={order.id}>
          <OrderCard order={order} />
        </Link>
      ))}
    </div>
  ) : (
    <div className="flex flex-col">
      <p>Bitte einen Namen / eine Funktion angeben</p>{' '}
      <LinkButton to={routes.userName()}>Namen ändern</LinkButton>{' '}
    </div>
  )
}
