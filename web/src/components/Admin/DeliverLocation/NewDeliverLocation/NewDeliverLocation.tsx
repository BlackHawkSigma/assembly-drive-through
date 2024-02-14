import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import DeliverLocationForm from 'src/components/Admin/DeliverLocation/DeliverLocationForm'

import type { CreateDeliverLocationInput } from 'types/graphql'

const CREATE_DELIVER_LOCATION_MUTATION = gql`
  mutation CreateDeliverLocationMutation($input: CreateDeliverLocationInput!) {
    createDeliverLocation(input: $input) {
      id
    }
  }
`

const NewDeliverLocation = () => {
  const [createDeliverLocation, { loading, error }] = useMutation(
    CREATE_DELIVER_LOCATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('DeliverLocation created')
        navigate(routes.adminDeliverLocations())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateDeliverLocationInput) => {
    createDeliverLocation({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New DeliverLocation</h2>
      </header>
      <div className="rw-segment-main">
        <DeliverLocationForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewDeliverLocation
