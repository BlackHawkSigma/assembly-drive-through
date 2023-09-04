import { useReadLocalStorage } from 'usehooks-ts'

import { MetaTags } from '@redwoodjs/web'

import MyClaimsCell from 'src/components/MyClaimsCell'

const MyClaimsPage = () => {
  const userName = useReadLocalStorage<string>('user-name')

  return (
    <>
      <MetaTags title="meine Aufträge" description="MyClaims page" />

      <h1 className="py-3 text-center text-2xl">
        von &quot;{userName}&quot; angenommen:
      </h1>

      <div className="mx-3">
        <MyClaimsCell />
      </div>
    </>
  )
}

export default MyClaimsPage
