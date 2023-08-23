import type { ItemsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Barcode from 'src/components/Barcode/Barcode'

export const QUERY = gql`
  query ItemsQuery {
    items {
      id
      name
      pickupLocation {
        name
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ items }: CellSuccessProps<ItemsQuery>) => {
  return (
    <div className="flex flex-col p-4">
      {items.map((item) => {
        return (
          <div key={item.id} className="my-4 w-full rounded border p-4">
            <p className="text-2xl">{item.name}</p>
            <p className="text-sm">Abholort: {item.pickupLocation.name}</p>
            <Barcode payload={item.id} />
          </div>
        )
      })}
    </div>
  )
}
