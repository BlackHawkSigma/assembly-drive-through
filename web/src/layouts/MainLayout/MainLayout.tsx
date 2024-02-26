import { useLocalStorage } from 'usehooks-ts'

import { Link, NavLink, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [userName] = useLocalStorage('user-name', 'unbekannt')

  return (
    <>
      <Toaster />
      <nav className="shadow-teal-00 flex items-baseline justify-end gap-4 bg-teal-400 p-2 shadow-md">
        <div className="grow">
          <Link className="text-2xl md:text-lg" to={routes.home()}>
            Home
          </Link>
        </div>

        <div className="flex-grow">
          Hallo, {userName} {''}
          <Link className="text-sm underline" to={routes.userName()}>
            (ändern)
          </Link>
        </div>

        <NavLink
          className="rounded-md bg-black/10 px-4 py-1"
          activeClassName="underline"
          to={routes.newOrder()}
        >
          neuer Auftrag
        </NavLink>
        <NavLink
          className="rounded-md bg-black/10 px-4 py-1"
          activeClassName="underline"
          to={routes.orders()}
        >
          Aufträge
        </NavLink>
      </nav>

      {children}
    </>
  )
}

export default MainLayout
