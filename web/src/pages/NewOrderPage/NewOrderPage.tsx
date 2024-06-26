import {
  CreateOrderInput,
  CreateOrderMutation,
  CreateOrderMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BarcodeDetection from 'src/components/BarcodeDetection/BarcodeDetection'
import NewOrderForm from 'src/components/NewOrderForm/NewOrderForm'

export const CREATE_ORDER = gql`
  mutation CreateOrderMutation($input: CreateOrderInput!) {
    createOrder(input: $input) {
      id
      item {
        name
      }
    }
  }
`

const NewOrderPage = () => {
  const [create, { loading, error }] = useMutation<
    CreateOrderMutation,
    CreateOrderMutationVariables
  >(CREATE_ORDER, {
    onCompleted(data) {
      toast.success(`Anforderung für ${data.createOrder.item.name} erstellt`)
      navigate(routes.orders())
    },
  })

  const isSecureContext = window.isSecureContext

  const handleSubmit = (data) => {
    const input: CreateOrderInput = {
      itemId: data.code,
    }

    create({ variables: { input } })
  }

  const handleScan = (code: string) => {
    const input: CreateOrderInput = {
      itemId: code,
    }

    create({ variables: { input } })
  }

  return (
    <>
      <MetaTags title="neuer Auftrag" description="NewOrder page" />

      <div className="mx-auto  lg:w-96">
        <h1 className="mb-6 text-center text-2xl">neuer Auftrag</h1>

        {isSecureContext && (
          <>
            <p className="text-center text-xl">Barcode scannen</p>
            <div className="p-4">
              {!loading && <BarcodeDetection onScan={handleScan} />}
            </div>
            <p className="text-center text-lg">oder manuell eingeben:</p>
          </>
        )}

        <NewOrderForm onSubmit={handleSubmit} loading={loading} error={error} />
      </div>
    </>
  )
}

export default NewOrderPage
