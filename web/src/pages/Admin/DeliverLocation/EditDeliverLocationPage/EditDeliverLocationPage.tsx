import EditDeliverLocationCell from 'src/components/Admin/DeliverLocation/EditDeliverLocationCell'

type DeliverLocationPageProps = {
  id: number
}

const EditDeliverLocationPage = ({ id }: DeliverLocationPageProps) => {
  return <EditDeliverLocationCell id={id} />
}

export default EditDeliverLocationPage
