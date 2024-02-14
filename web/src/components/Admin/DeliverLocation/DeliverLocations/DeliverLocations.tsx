import type {
  DeleteDeliverLocationMutationVariables,
  FindDeliverLocations,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Admin/DeliverLocation/DeliverLocationsCell'
import { truncate } from 'src/lib/formatters'

const DELETE_DELIVER_LOCATION_MUTATION = gql`
  mutation DeleteDeliverLocationMutation($id: Int!) {
    deleteDeliverLocation(id: $id) {
      id
    }
  }
`

const DeliverLocationsList = ({ deliverLocations }: FindDeliverLocations) => {
  const [deleteDeliverLocation] = useMutation(
    DELETE_DELIVER_LOCATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('DeliverLocation deleted')
      },
      onError: (error) => {
        toast.error(error.message)
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
    }
  )

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onDeleteClick = (id: DeleteDeliverLocationMutationVariables['id']) => {
    if (
      confirm('Are you sure you want to delete deliverLocation ' + id + '?')
    ) {
      deleteDeliverLocation({ variables: { id } })
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
          {deliverLocations.map((deliverLocation) => (
            <tr key={deliverLocation.id}>
              <td>{truncate(deliverLocation.id)}</td>
              <td>{truncate(deliverLocation.name)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminDeliverLocation({ id: deliverLocation.id })}
                    title={
                      'Show deliverLocation ' + deliverLocation.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditDeliverLocation({
                      id: deliverLocation.id,
                    })}
                    title={'Edit deliverLocation ' + deliverLocation.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  {/* <button
                    type="button"
                    title={'Delete deliverLocation ' + deliverLocation.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(deliverLocation.id)}
                  >
                    Delete
                  </button> */}
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DeliverLocationsList
