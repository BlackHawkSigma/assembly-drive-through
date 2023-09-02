import PickupLocationCell from 'src/components/Admin/PickupLocation/PickupLocationCell'

type PickupLocationPageProps = {
  id: number
}

const PickupLocationPage = ({ id }: PickupLocationPageProps) => {
  return <PickupLocationCell id={id} />
}

export default PickupLocationPage
