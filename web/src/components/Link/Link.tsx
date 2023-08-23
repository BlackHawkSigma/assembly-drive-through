import { ComponentProps } from 'react'

import { Link as RedwoodLink } from '@redwoodjs/router'

const Link = (props: ComponentProps<typeof RedwoodLink>) => {
  return (
    <RedwoodLink
      className="rounded-lg bg-teal-200 px-6 py-3 text-center text-2xl shadow-md hover:bg-teal-300 active:translate-y-1 md:px-4 md:py-2 md:text-base"
      {...props}
    />
  )
}

export default Link
