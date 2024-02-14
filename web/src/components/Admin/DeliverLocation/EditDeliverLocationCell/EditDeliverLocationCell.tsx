import type {
  EditDeliverLocationById,
  UpdateDeliverLocationInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import DeliverLocationForm from 'src/components/Admin/DeliverLocation/DeliverLocationForm'

export const QUERY = gql`
  query EditDeliverLocationById($id: Int!) {
    deliverLocation: deliverLocation(id: $id) {
      id
      name
    }
  }
`
const UPDATE_DELIVER_LOCATION_MUTATION = gql`
  mutation UpdateDeliverLocationMutation(
    $id: Int!
    $input: UpdateDeliverLocationInput!
  ) {
    updateDeliverLocation(id: $id, input: $input) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  deliverLocation,
}: CellSuccessProps<EditDeliverLocationById>) => {
  const [updateDeliverLocation, { loading, error }] = useMutation(
    UPDATE_DELIVER_LOCATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('DeliverLocation updated')
        navigate(routes.adminDeliverLocations())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateDeliverLocationInput,
    id: EditDeliverLocationById['deliverLocation']['id']
  ) => {
    updateDeliverLocation({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit DeliverLocation {deliverLocation?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <DeliverLocationForm
          deliverLocation={deliverLocation}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
