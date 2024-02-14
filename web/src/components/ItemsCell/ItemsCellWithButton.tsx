import type {
  CreateOrderQuickMutation,
  CreateOrderQuickMutationVariables,
  ItemsQuery,
} from 'types/graphql'

import {
  type CellSuccessProps,
  type CellFailureProps,
  useMutation,
} from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import Barcode from 'src/components/Barcode/Barcode'

const CREATE_ORDER = gql`
  mutation CreateOrderQuickMutation($input: CreateOrderInput!) {
    createOrder(input: $input) {
      id
      item {
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
  const [order] = useMutation<
    CreateOrderQuickMutation,
    CreateOrderQuickMutationVariables
  >(CREATE_ORDER, {
    onCompleted(data) {
      toast.success(`Anforderung für ${data.createOrder.item.name} erstellt`)
    },
  })

  const onOrder = (id: string) => {
    order({ variables: { input: { itemId: id } } })
  }

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

            <button onClick={() => onOrder(item.id)}>
              <Barcode payload={item.id} />
            </button>
          </div>
        )
      })}
    </div>
  )
}
