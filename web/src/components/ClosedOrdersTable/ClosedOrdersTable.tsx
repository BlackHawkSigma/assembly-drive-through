import { parseISO } from 'date-fns/fp'
import type { ClosedOrdersQuery } from 'types/graphql'

type ClosedOrdersTableProps = {
  closedOrders: ClosedOrdersQuery['closedOrders']
}

const ClosedOrdersTable = ({ closedOrders }: ClosedOrdersTableProps) => {
  return (
    <table className="container mx-auto table-auto">
      <thead>
        <tr>
          <th>Artikel</th>
          <th>von</th>
          <th>erstellt</th>
          <th>angenommen</th>
          <th>abgeschlossen</th>
        </tr>
      </thead>
      <tbody>
        {closedOrders.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.item.name}</td>
              <td>{item.claimedBy}</td>
              <td>{deDate(item.createdAt)}</td>
              <td>{deDate(item.claimedAt)}</td>
              <td>{deDate(item.fulfilledAt)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

const deDate = (dateString: string) =>
  parseISO(dateString).toLocaleString('de-DE')

export default ClosedOrdersTable
