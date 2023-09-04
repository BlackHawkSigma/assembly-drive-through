import type {
  DeletePickupLocationMutationVariables,
  FindPickupLocationById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_PICKUP_LOCATION_MUTATION = gql`
  mutation DeletePickupLocationMutation($id: Int!) {
    deletePickupLocation(id: $id) {
      id
    }
  }
`

interface Props {
  pickupLocation: NonNullable<FindPickupLocationById['pickupLocation']>
}

const PickupLocation = ({ pickupLocation }: Props) => {
  const [deletePickupLocation] = useMutation(DELETE_PICKUP_LOCATION_MUTATION, {
    onCompleted: () => {
      toast.success('PickupLocation deleted')
      navigate(routes.adminPickupLocations())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onDeleteClick = (id: DeletePickupLocationMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete pickupLocation ' + id + '?')) {
      deletePickupLocation({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            PickupLocation {pickupLocation.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{pickupLocation.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{pickupLocation.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditPickupLocation({ id: pickupLocation.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        {/* <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(pickupLocation.id)}
        >
          Delete
        </button> */}
      </nav>
    </>
  )
}

export default PickupLocation
