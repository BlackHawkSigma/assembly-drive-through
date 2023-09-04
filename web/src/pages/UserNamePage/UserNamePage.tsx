import { useLocalStorage } from 'usehooks-ts'

import { Form, TextField, Label, Submit } from '@redwoodjs/forms'
import { back } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const UserNamePage = () => {
  const [userName, setUserName] = useLocalStorage('user-name', 'unbekannt')

  const handleSubmit = (data: { username: string }) => {
    setUserName(data.username)
    back()
  }

  return (
    <>
      <MetaTags title="UserName" description="UserName page" />

      <Form onSubmit={handleSubmit} className="p-4">
        <Label name="username" className="my-2 block text-3xl">
          Name / Funktion
        </Label>
        <TextField
          name="username"
          className="my-2 w-full rounded"
          defaultValue={userName}
          required
        />

        <Submit className="rounded-lg bg-teal-200 px-6 py-3 text-2xl shadow-md hover:bg-teal-300 active:translate-y-1 md:px-4 md:py-2 md:text-base ">
          speichern
        </Submit>
      </Form>
    </>
  )
}

export default UserNamePage
