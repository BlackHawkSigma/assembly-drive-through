import { Link, NavLink, routes } from '@redwoodjs/router'

type AdminLayoutProps = {
  children?: React.ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <>
      <nav className="shadow-teal-00 flex items-baseline justify-end gap-4 bg-orange-400 p-2 shadow-md">
        <div className="grow">
          <Link className="text-2xl md:text-lg" to={routes.home()}>
            Home
          </Link>
        </div>

        <NavLink
          className="rounded-md bg-black/10 px-4 py-1"
          activeClassName="underline"
          to={routes.adminItems()}
        >
          Items
        </NavLink>
        <NavLink
          className="rounded-md bg-black/10 px-4 py-1"
          activeClassName="underline"
          to={routes.adminPickupLocations()}
        >
          Abholorte
        </NavLink>
        <NavLink
          className="rounded-md bg-black/10 px-4 py-1"
          activeClassName="underline"
          to={routes.adminDeliverLocations()}
        >
          Ablieferorte
        </NavLink>
      </nav>

      {children}
    </>
  )
}

export default AdminLayout
