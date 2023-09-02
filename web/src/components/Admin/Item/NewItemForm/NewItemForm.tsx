import type {
  CreateItemInput,
  EditItemById,
  NewItemVariables,
} from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  FieldError,
  Form,
  FormError,
  Label,
  SelectField,
  Submit,
  TextField,
} from '@redwoodjs/forms'

type FormItem = NonNullable<NewItemVariables['item']>

interface ItemFormProps {
  locations: EditItemById['pickupLocations']
  onSave: (data: CreateItemInput) => void
  error: RWGqlError
  loading: boolean
}

const NewItemForm = (props: ItemFormProps) => {
  const onSubmit = (data: FormItem) => {
    props.onSave(data)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormItem> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="id"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Scoop Nummer
        </Label>

        <TextField
          name="id"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="id" className="rw-field-error" />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="pickupLocationId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Pickup location
        </Label>

        <SelectField
          name="pickupLocationId"
          defaultValue={props.locations.at(0).id}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        >
          {props.locations.map((location) => (
            <option key={location.id} value={location.id}>
              {location.name}
            </option>
          ))}
        </SelectField>

        <FieldError name="pickupLocationId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default NewItemForm
