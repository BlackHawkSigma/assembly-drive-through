import {
  CreateOrderInput,
  CreateOrderMutation,
  CreateOrderMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import NewOrderForm from 'src/components/NewOrderForm/NewOrderForm'

const CREATE_ORDER = gql`
  mutation CreateOrderMutation($input: CreateOrderInput!) {
    createOrder(input: $input) {
      id
    }
  }
`

const NewOrderPage = () => {
  const [create, { loading, error }] = useMutation<
    CreateOrderMutation,
    CreateOrderMutationVariables
  >(CREATE_ORDER, {
    onCompleted(data) {
      toast.success(`Anforderung Nr. ${data.createOrder.id} erstellt`)
      navigate(routes.orders())
    },
  })

  const handleSubmit = (data) => {
    const input: CreateOrderInput = {
      deliverLocationId: 1,
      pickupLocationId: 1,
      itemId: data.code,
    }

    create({ variables: { input } })
  }

  return (
    <>
      <MetaTags title="neuer Auftrag" description="NewOrder page" />

      <div className="mx-auto w-96">
        <h1 className="mb-6 text-center text-2xl">neuer Auftrag</h1>

        <NewOrderForm onSubmit={handleSubmit} loading={loading} error={error} />
      </div>
    </>
  )
}

export default NewOrderPage
