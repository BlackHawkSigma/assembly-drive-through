import type { OrdersQuery } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import OrderCard from '../OrderCard/OrderCard'

export const QUERY = gql`
  query OrdersQuery {
    orders {
      id
      item {
        code
        name
      }
      pickupLocation {
        name
      }
      deliverLocation {
        name
      }
      createdAt
      updatedAt
      fulfilledAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ orders }: CellSuccessProps<OrdersQuery>) => {
  return orders.map((order) => (
    <Link to={routes.order({ id: order.id })} key={order.id}>
      <OrderCard order={order} />
    </Link>
  ))
  // <table className="w-full">
  //   <thead>
  //     <tr>
  //       <th>ID</th>
  //       <th>code</th>
  //       <th>name</th>
  //       <th>von</th>
  //       <th>nach</th>
  //     </tr>
  //   </thead>
  //   <tbody>
  //     {orders.map((order) => {
  //       return (
  //         <tr key={order.id}>
  //           <td>{order.id}</td>
  //           <td>{order.item.code}</td>
  //           <td>
  //             <Link to={routes.order({ id: order.id })}>
  //               {order.item.name}
  //             </Link>
  //           </td>
  //           <td>{order.pickupLocation.name}</td>
  //           <td>{order.deliverLocation.name}</td>
  //         </tr>
  //       )
  //     })}
  //   </tbody>
  // </table>
}
