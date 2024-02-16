import type { ComponentPropsWithoutRef } from 'react'

import NewItemForm from './NewItemForm'

export const standard = () =>
  ({
    pickupLocations: [
      { id: 1, name: 'hier' },
      { id: 2, name: 'dort' },
    ],
    deliverLocations: [
      { id: 1, name: 'hier' },
      { id: 2, name: 'dort' },
    ],
    onSave: jest.fn(),
    loading: false,
    error: undefined,
  } satisfies ComponentPropsWithoutRef<typeof NewItemForm>)
