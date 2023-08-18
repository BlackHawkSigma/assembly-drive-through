import { Link, NavLink, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Toaster />
      <nav className="shadow-teal-00 flex items-baseline justify-between bg-teal-400 p-2 shadow-md">
        <Link className="text-2xl md:text-lg" to={routes.home()}>
          Home
        </Link>
        <NavLink activeClassName="underline" to={routes.orders()}>
          Anforderungen
        </NavLink>
      </nav>

      {children}
    </>
  )
}

export default MainLayout
