import EditPickupLocationCell from 'src/components/Admin/PickupLocation/EditPickupLocationCell'

type PickupLocationPageProps = {
  id: number
}

const EditPickupLocationPage = ({ id }: PickupLocationPageProps) => {
  return <EditPickupLocationCell id={id} />
}

export default EditPickupLocationPage
