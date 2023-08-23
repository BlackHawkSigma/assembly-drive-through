import { ComponentProps } from 'react'

const Button = ({ children, ...props }: ComponentProps<'button'>) => {
  return (
    <button
      className="rounded-lg bg-teal-200 px-6 py-3 text-2xl shadow-md hover:bg-teal-300 active:translate-y-1 md:px-4 md:py-2 md:text-base "
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
