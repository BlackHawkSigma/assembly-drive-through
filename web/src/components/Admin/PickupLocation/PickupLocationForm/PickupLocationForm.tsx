import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type {
  EditPickupLocationById,
  UpdatePickupLocationInput,
} from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormPickupLocation = NonNullable<EditPickupLocationById['pickupLocation']>

interface PickupLocationFormProps {
  pickupLocation?: EditPickupLocationById['pickupLocation']
  onSave: (
    data: UpdatePickupLocationInput,
    id?: FormPickupLocation['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const PickupLocationForm = (props: PickupLocationFormProps) => {
  const onSubmit = (data: FormPickupLocation) => {
    props.onSave(data, props?.pickupLocation?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormPickupLocation> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.pickupLocation?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PickupLocationForm
