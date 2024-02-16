import userEvent from '@testing-library/user-event'

import { render, screen, waitFor } from '@redwoodjs/testing/web'

import NewItemForm from './NewItemForm'
import { standard } from './NewItemForm.mock'

describe('NewItemForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewItemForm {...standard()} />)
    }).not.toThrow()
  })

  it('should render the basic fields', () => {
    render(<NewItemForm {...standard()} />)

    expect(screen.getByLabelText('Scoop Nummer')).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Pickup location')).toBeInTheDocument()
    expect(screen.getByLabelText('Deliver location')).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /Save/i })).toBeInTheDocument()
  })

  it('does not submit when required fields are empty', async () => {
    const props = standard()

    render(<NewItemForm {...props} />)

    const submitButton = screen.getByRole('button', { name: /Save/i })
    await waitFor(() => userEvent.click(submitButton))

    expect(props.onSave).toHaveBeenCalledTimes(0)
  })

  it('submits when required fields are entered', async () => {
    const props = standard()

    render(<NewItemForm {...props} />)

    const idField = screen.getByLabelText('Scoop Nummer')
    const nameField = screen.getByLabelText('Name')

    await waitFor(() => userEvent.type(idField, '117'))
    await waitFor(() => userEvent.type(nameField, 'Front'))

    const submitButton = screen.getByRole('button', { name: /Save/i })
    await waitFor(() => userEvent.click(submitButton))

    expect(props.onSave).toHaveBeenCalledTimes(1)
  })

  it('does not submits when "Scoop Nummer" has spaces', async () => {
    const props = standard()

    render(<NewItemForm {...props} />)

    const idField = screen.getByLabelText('Scoop Nummer')
    const nameField = screen.getByLabelText('Name')

    await waitFor(() => userEvent.type(idField, '117 112'))
    await waitFor(() => userEvent.type(nameField, 'Wrong Code'))

    const submitButton = screen.getByRole('button', { name: /Save/i })
    await waitFor(() => userEvent.click(submitButton))

    expect(props.onSave).toHaveBeenCalledTimes(0)
  })
})
