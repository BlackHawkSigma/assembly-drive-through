import {
  CreateOrderMutation,
  CreateOrderMutationVariables,
} from 'types/graphql'

import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import ScannerInput from 'src/components/ScannerInput/ScannerInput'
import { CREATE_ORDER } from 'src/pages/NewOrderPage'

const OrderScannerPage = () => {
  const [create, { loading }] = useMutation<
    CreateOrderMutation,
    CreateOrderMutationVariables
  >(CREATE_ORDER, {
    onCompleted(data) {
      toast.success(`Anforderung für ${data.createOrder.item.name} erstellt`)
    },
    onError(error) {
      toast.error(error.message)
    },
  })

  const handleFire = (data: string) => {
    create({ variables: { input: { deliverLocationId: 1, itemId: data } } })
  }
  return (
    <>
      <MetaTags title="OrderScanner" description="OrderScanner page" />

      <div className="mx-auto  lg:w-96">
        <h1 className="mb-6 text-center text-2xl">neuer Auftrag</h1>

        <p className="text-center text-xl">Barcode scannen</p>

        <ScannerInput onFire={handleFire} loading={loading} />
      </div>
    </>
  )
}

export default OrderScannerPage
