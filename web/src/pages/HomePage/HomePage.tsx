import { routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Link from 'src/components/Link/Link'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Startseite" />
      <div className="px-4">
        <h1 className="mb-4 py-2 text-center text-4xl">Startseite</h1>
        <div className="flex flex-col justify-center gap-4 md:flex-row">
          <Link to={routes.newOrder()}>neuer Auftrag</Link>
          <Link to={routes.orders()}>Auftrags Liste</Link>
          <Link to={routes.items()}>Artikel Liste</Link>
          {/* <Link to={routes.detection()}>Detection</Link> */}
        </div>
      </div>
    </>
  )
}

export default HomePage
