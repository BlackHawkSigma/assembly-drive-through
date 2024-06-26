import { routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Link from 'src/components/Link/Link'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Startseite" />
      <div className="px-4">
        <h1 className="mb-4 py-2 text-center text-4xl">
          Startseite {process.env.PLANT_NAME}
        </h1>
        <div className="flex flex-col flex-wrap justify-center gap-4 md:flex-row">
          <div className="flex gap-4">
            <Link to={routes.newOrder()}>neuer Auftrag</Link>
            <Link to={routes.orders()}>Auftrags Liste</Link>
          </div>

          <Link to={routes.orderScanner()}>Scannen</Link>

          <Link to={routes.locations()}>Abholorte</Link>

          <Link to={routes.myClaims()}>meine Aufträge</Link>

          <Link to={routes.closedOrders()}>abgeschlossene Aufträge</Link>

          <Link to={routes.items()}>Artikel Liste</Link>

          <Link to={routes.admin()}>Admin</Link>
        </div>
      </div>
    </>
  )
}

export default HomePage
