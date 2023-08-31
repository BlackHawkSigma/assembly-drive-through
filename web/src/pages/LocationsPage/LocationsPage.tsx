import { MetaTags } from '@redwoodjs/web'

import PickupLocationsCell from 'src/components/PickupLocationsCell'

const LocationsPage = () => {
  return (
    <>
      <MetaTags title="Abholorte" description="Locations page" />

      <PickupLocationsCell />
    </>
  )
}

export default LocationsPage
