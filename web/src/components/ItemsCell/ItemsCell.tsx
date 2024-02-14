import type { ItemsQuery } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import Barcode from 'src/components/Barcode/Barcode'

export const QUERY = gql`
  query ItemsQuery {
    items {
      id
      name
      pickupLocation {
        name
      }
      deliverLocation {
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
          <div
            key={item.id}
            className="my-4 flex w-full flex-col items-center rounded border p-4"
          >
            <p className="text-2xl">{item.name}</p>
            <p className="self-start pl-6 text-sm">
              Abholort: {item.pickupLocation.name}
            </p>
            <p className="self-start pl-6 text-sm">
              Ablieferort: {item.deliverLocation.name}
            </p>

            <Barcode payload={item.id} />
          </div>
        )
      })}
    </div>
  )
}
