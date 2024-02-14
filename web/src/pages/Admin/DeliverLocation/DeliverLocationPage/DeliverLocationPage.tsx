import DeliverLocationCell from 'src/components/Admin/DeliverLocation/DeliverLocationCell'

type DeliverLocationPageProps = {
  id: number
}

const DeliverLocationPage = ({ id }: DeliverLocationPageProps) => {
  return <DeliverLocationCell id={id} />
}

export default DeliverLocationPage
