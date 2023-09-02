// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Route, Router, Set } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import AdminLayout from './layouts/AdminLayout/AdminLayout'
import MainLayout from './layouts/MainLayout/MainLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={AdminLayout}>
        <Set wrap={ScaffoldLayout} title="Items" titleTo="adminItems" buttonLabel="New Item" buttonTo="adminNewItem">
          <Route path="/admin/items/new" page={AdminItemNewItemPage} name="adminNewItem" />
          <Route path="/admin/items/{id}/edit" page={AdminItemEditItemPage} name="adminEditItem" />
          <Route path="/admin/items/{id}" page={AdminItemItemPage} name="adminItem" />
          <Route path="/admin/items" page={AdminItemItemsPage} name="adminItems" />
        </Set>
        <Set wrap={ScaffoldLayout} title="PickupLocations" titleTo="adminPickupLocations" buttonLabel="New PickupLocation" buttonTo="adminNewPickupLocation">
          <Route path="/admin/pickup-locations/new" page={AdminPickupLocationNewPickupLocationPage} name="adminNewPickupLocation" />
          <Route path="/admin/pickup-locations/{id:Int}/edit" page={AdminPickupLocationEditPickupLocationPage} name="adminEditPickupLocation" />
          <Route path="/admin/pickup-locations/{id:Int}" page={AdminPickupLocationPickupLocationPage} name="adminPickupLocation" />
          <Route path="/admin/pickup-locations" page={AdminPickupLocationPickupLocationsPage} name="adminPickupLocations" />
        </Set>
      </Set>

      <Set wrap={MainLayout}>
        <Route path="/locations" page={LocationsPage} name="locations" />
        <Route path="/location/{id:Int}/orders" page={LocationOrdersPage} name="locationOrders" />
        <Route path="/items" page={ItemsPage} name="items" />
        <Route path="/new-order" page={NewOrderPage} name="newOrder" />
        <Route path="/orders" page={OrdersPage} name="orders" />
        <Route path="/order/{id:Int}" page={OrderPage} name="order" />
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
