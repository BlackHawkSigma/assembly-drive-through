import type {
  DeleteDeliverLocationMutationVariables,
  FindDeliverLocationById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_DELIVER_LOCATION_MUTATION = gql`
  mutation DeleteDeliverLocationMutation($id: Int!) {
    deleteDeliverLocation(id: $id) {
      id
    }
  }
`

interface Props {
  deliverLocation: NonNullable<FindDeliverLocationById['deliverLocation']>
}

const DeliverLocation = ({ deliverLocation }: Props) => {
  const [deleteDeliverLocation] = useMutation(
    DELETE_DELIVER_LOCATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('DeliverLocation deleted')
        navigate(routes.adminDeliverLocations())
      },
      onError: (error) => {
        toast.error(error.message)
      },
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
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            DeliverLocation {deliverLocation.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{deliverLocation.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{deliverLocation.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditDeliverLocation({ id: deliverLocation.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        {/* <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(deliverLocation.id)}
        >
          Delete
        </button> */}
      </nav>
    </>
  )
}

export default DeliverLocation
