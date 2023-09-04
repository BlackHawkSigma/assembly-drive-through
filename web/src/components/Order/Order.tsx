import {
  ClaimOrderMutation,
  ClaimOrderMutationVariables,
  CompleteOrderMutation,
  CompleteOrderMutationVariables,
  FindOrderQuery,
  FindOrderQueryVariables,
} from 'types/graphql'
import { useReadLocalStorage } from 'usehooks-ts'

import { back } from '@redwoodjs/router'
import { CellSuccessProps, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import Barcode from 'src/components/Barcode/Barcode'
import Button from 'src/components/Button/Button'
import OrderCard from 'src/components/OrderCard/OrderCard'

const CLAIM_ORDER = gql`
  mutation ClaimOrderMutation($id: Int!, $input: ClaimOrderInput!) {
    claimOrder(id: $id, input: $input) {
      id
      claimedAt
    }
  }
`

const COMPLETE_ORDER = gql`
  mutation CompleteOrderMutation($id: Int!) {
    completeOrder(id: $id) {
      id
      fulfilledAt
    }
  }
`

type OrderProps = CellSuccessProps<FindOrderQuery, FindOrderQueryVariables>

const Order = ({ order }: OrderProps) => {
  const userName = useReadLocalStorage<string>('user-name')

  const [complete, { loading: completeLoadig }] = useMutation<
    CompleteOrderMutation,
    CompleteOrderMutationVariables
  >(COMPLETE_ORDER, {
    variables: { id: order.id },
    refetchQueries: ['OrdersQuery'],
    awaitRefetchQueries: true,
    onCompleted(data) {
      toast.success(`Anforderung Nr. ${data.completeOrder.id} abgeschloßen`)
      back()
    },
  })

  const [claim, { loading: claimLoadig }] = useMutation<
    ClaimOrderMutation,
    ClaimOrderMutationVariables
  >(CLAIM_ORDER, {
    variables: { id: order.id, input: { claimedBy: userName } },
    refetchQueries: ['OrdersQuery'],
    awaitRefetchQueries: true,
    onCompleted(data) {
      toast.success(`Anforderung Nr. ${data.claimOrder.id} angenommen`)
      back()
    },
  })

  const isClaimed = typeof order.claimedAt === 'string'

  const handleClaim = () => {
    claim()
  }

  const handleCompletion = () => {
    complete()
  }

  return (
    <div className="flex flex-col items-center gap-4 md:flex-row">
      <OrderCard order={order} />
      <Barcode payload={order.item.id} />
      <div className="flex gap-6">
        <Button disabled={isClaimed || claimLoadig} onClick={handleClaim}>
          {claimLoadig ? '...' : 'annehmen'}
        </Button>
        <Button
          disabled={!isClaimed || completeLoadig}
          onClick={handleCompletion}
        >
          {completeLoadig ? '...' : 'abschließen'}
        </Button>
      </div>
    </div>
  )
}

export default Order
