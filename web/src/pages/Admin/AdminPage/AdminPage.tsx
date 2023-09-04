import { Redirect, routes } from '@redwoodjs/router'

const AdminPage = () => <Redirect to={routes.adminItems()} />

export default AdminPage
