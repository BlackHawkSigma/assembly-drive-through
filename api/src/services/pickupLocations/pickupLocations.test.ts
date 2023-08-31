import type { PickupLocation } from '@prisma/client'

import {
  pickupLocations,
  pickupLocation,
  createPickupLocation,
  updatePickupLocation,
  deletePickupLocation,
} from './pickupLocations'
import type { StandardScenario } from './pickupLocations.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('pickupLocations', () => {
  scenario(
    'returns all pickupLocations',
    async (scenario: StandardScenario) => {
      const result = await pickupLocations()

      expect(result.length).toEqual(Object.keys(scenario.pickupLocation).length)
    }
  )

  scenario(
    'returns a single pickupLocation',
    async (scenario: StandardScenario) => {
      const result = await pickupLocation({
        id: scenario.pickupLocation.one.id,
      })

      expect(result).toEqual(scenario.pickupLocation.one)
    }
  )

  scenario('creates a pickupLocation', async () => {
    const result = await createPickupLocation({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a pickupLocation', async (scenario: StandardScenario) => {
    const original = (await pickupLocation({
      id: scenario.pickupLocation.one.id,
    })) as PickupLocation
    const result = await updatePickupLocation({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a pickupLocation', async (scenario: StandardScenario) => {
    const original = (await deletePickupLocation({
      id: scenario.pickupLocation.one.id,
    })) as PickupLocation
    const result = await pickupLocation({ id: original.id })

    expect(result).toEqual(null)
  })
})
