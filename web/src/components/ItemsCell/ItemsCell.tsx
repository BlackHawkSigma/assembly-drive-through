import type { ItemsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Barcode from '../Barcode/Barcode'

export const QUERY = gql`
  query ItemsQuery {
    items {
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

export const Success = ({ items }: CellSuccessProps<ItemsQuery>) => {
  return (
    <div className="flex flex-col gap-12 p-4">
      {items.map((item) => {
        return (
          <div key={item.id} className="w-full">
            <p className="text-2xl">{item.name}</p>
            <Barcode payload={item.id} />
          </div>
        )
      })}
    </div>
  )
}
