import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PickupLocationForm from 'src/components/Admin/PickupLocation/PickupLocationForm'

import type { CreatePickupLocationInput } from 'types/graphql'

const CREATE_PICKUP_LOCATION_MUTATION = gql`
  mutation CreatePickupLocationMutation($input: CreatePickupLocationInput!) {
    createPickupLocation(input: $input) {
      id
    }
  }
`

const NewPickupLocation = () => {
  const [createPickupLocation, { loading, error }] = useMutation(
    CREATE_PICKUP_LOCATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('PickupLocation created')
        navigate(routes.adminPickupLocations())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreatePickupLocationInput) => {
    createPickupLocation({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New PickupLocation</h2>
      </header>
      <div className="rw-segment-main">
        <PickupLocationForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPickupLocation
