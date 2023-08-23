import { MetaTags } from '@redwoodjs/web'

import ItemsCell from 'src/components/ItemsCell'

const ItemsPage = () => {
  return (
    <>
      <MetaTags title="Artikel" description="Items page" />

      <ItemsCell />
    </>
  )
}

export default ItemsPage
