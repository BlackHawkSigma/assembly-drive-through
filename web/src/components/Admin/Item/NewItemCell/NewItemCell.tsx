import type { CreateItemInput, NewItem } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import NewItemForm from '../NewItemForm/NewItemForm'

export const QUERY = gql`
  query NewItem {
    pickupLocations {
      id
      name
    }
  }
`

const CREATE_ITEM_MUTATION = gql`
  mutation CreateItemMutation($input: CreateItemInput!) {
    createItem(input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ pickupLocations }: CellSuccessProps<NewItem>) => {
  const [createItem, { loading, error }] = useMutation(CREATE_ITEM_MUTATION, {
    onCompleted: () => {
      toast.success('Item created')
      navigate(routes.adminItems())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: CreateItemInput) => {
    createItem({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Item</h2>
      </header>
      <div className="rw-segment-main">
        <NewItemForm
          locations={pickupLocations}
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}
