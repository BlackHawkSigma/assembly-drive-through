import type { DeleteItemMutationVariables, FindItemById } from 'types/graphql'

import { Link, navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_ITEM_MUTATION = gql`
  mutation DeleteItemMutation($id: String!) {
    deleteItem(id: $id) {
      id
    }
  }
`

interface Props {
  item: NonNullable<FindItemById['item']>
}

const Item = ({ item }: Props) => {
  const [deleteItem] = useMutation(DELETE_ITEM_MUTATION, {
    onCompleted: () => {
      toast.success('Item deleted')
      navigate(routes.adminItems())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onDeleteClick = (id: DeleteItemMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete item ' + id + '?')) {
      deleteItem({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Item {item.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{item.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{item.name}</td>
            </tr>
            <tr>
              <th>Pickup location</th>
              <td>{item.pickupLocation.name}</td>
            </tr>
            <tr>
              <th>Deliver location</th>
              <td>{item.deliverLocation.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditItem({ id: item.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        {/* <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(item.id)}
        >
          Delete
        </button> */}
      </nav>
    </>
  )
}

export default Item
