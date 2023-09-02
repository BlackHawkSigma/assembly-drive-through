import type {
  EditPickupLocationById,
  UpdatePickupLocationInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PickupLocationForm from 'src/components/Admin/PickupLocation/PickupLocationForm'

export const QUERY = gql`
  query EditPickupLocationById($id: Int!) {
    pickupLocation: pickupLocation(id: $id) {
      id
      name
    }
  }
`
const UPDATE_PICKUP_LOCATION_MUTATION = gql`
  mutation UpdatePickupLocationMutation(
    $id: Int!
    $input: UpdatePickupLocationInput!
  ) {
    updatePickupLocation(id: $id, input: $input) {
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
  pickupLocation,
}: CellSuccessProps<EditPickupLocationById>) => {
  const [updatePickupLocation, { loading, error }] = useMutation(
    UPDATE_PICKUP_LOCATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('PickupLocation updated')
        navigate(routes.adminPickupLocations())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdatePickupLocationInput,
    id: EditPickupLocationById['pickupLocation']['id']
  ) => {
    updatePickupLocation({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit PickupLocation {pickupLocation?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PickupLocationForm
          pickupLocation={pickupLocation}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
