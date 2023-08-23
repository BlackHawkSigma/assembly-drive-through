import {
  CompleteOrderMutation,
  CompleteOrderMutationVariables,
  FindOrderQuery,
  FindOrderQueryVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { CellSuccessProps, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import Barcode from 'src/components/Barcode/Barcode'
import Button from 'src/components/Button/Button'
import OrderCard from 'src/components/OrderCard/OrderCard'

const COMPLETE_ORDER = gql`
  mutation CompleteOrderMutation($id: Int!) {
    completeOrder(id: $id) {
      id
    }
  }
`

type OrderProps = CellSuccessProps<FindOrderQuery, FindOrderQueryVariables>

const Order = ({ order }: OrderProps) => {
  const [complete] = useMutation<
    CompleteOrderMutation,
    CompleteOrderMutationVariables
  >(COMPLETE_ORDER, {
    variables: { id: order.id },
    onCompleted(data) {
      toast.success(`Anforderung Nr. ${data.completeOrder.id} abgeschloßen`)
    },
  })

  const handleCompletion = () => {
    complete()
    navigate(routes.orders())
  }

  return (
    <div className="flex flex-col items-center gap-4 md:flex-row">
      <OrderCard order={order} />
      <Barcode payload={order.item.id} />
      <Button onClick={handleCompletion}>abschießen</Button>
    </div>
  )
}

export default Order
