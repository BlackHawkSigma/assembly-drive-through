import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Admin/PickupLocation/PickupLocationsCell'
import { truncate } from 'src/lib/formatters'

import type {
  DeletePickupLocationMutationVariables,
  FindPickupLocations,
} from 'types/graphql'

const DELETE_PICKUP_LOCATION_MUTATION = gql`
  mutation DeletePickupLocationMutation($id: Int!) {
    deletePickupLocation(id: $id) {
      id
    }
  }
`

const PickupLocationsList = ({ pickupLocations }: FindPickupLocations) => {
  const [deletePickupLocation] = useMutation(DELETE_PICKUP_LOCATION_MUTATION, {
    onCompleted: () => {
      toast.success('PickupLocation deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeletePickupLocationMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete pickupLocation ' + id + '?')) {
      deletePickupLocation({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {pickupLocations.map((pickupLocation) => (
            <tr key={pickupLocation.id}>
              <td>{truncate(pickupLocation.id)}</td>
              <td>{truncate(pickupLocation.name)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminPickupLocation({ id: pickupLocation.id })}
                    title={
                      'Show pickupLocation ' + pickupLocation.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditPickupLocation({
                      id: pickupLocation.id,
                    })}
                    title={'Edit pickupLocation ' + pickupLocation.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete pickupLocation ' + pickupLocation.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(pickupLocation.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PickupLocationsList
