import {
  Label,
  Form,
  TextField,
  Submit,
  SubmitHandler,
  FieldError,
  FormError,
  RWGqlError,
} from '@redwoodjs/forms'

type NewOrderFormProps = {
  onSubmit: SubmitHandler<FormValues>
  loading?: boolean
  error?: RWGqlError
}

type FormValues = { code: string }

const NewOrderForm = ({ onSubmit, loading, error }: NewOrderFormProps) => {
  return (
    <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }} error={error}>
      <FormError error={error} wrapperClassName="text-red-600" />

      <div>
        <Label name="code" className="my-2 block text-3xl">
          Code
        </Label>
        <TextField
          inputMode="numeric"
          name="code"
          required
          className="my-2 w-full rounded"
          autoComplete="off"
        />
        <FieldError name="code" />
      </div>

      <Submit
        className="rounded-lg bg-teal-200 px-6 py-3 text-2xl shadow-md hover:bg-teal-300 active:translate-y-1 md:px-4 md:py-2 md:text-base "
        disabled={loading}
      >
        absenden
      </Submit>
    </Form>
  )
}

export default NewOrderForm
