import type { DeliverLocation } from '@prisma/client'

import {
  deliverLocations,
  deliverLocation,
  createDeliverLocation,
  updateDeliverLocation,
  deleteDeliverLocation,
} from './deliverLocations'
import type { StandardScenario } from './deliverLocations.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('deliverLocations', () => {
  scenario(
    'returns all deliverLocations',
    async (scenario: StandardScenario) => {
      const result = await deliverLocations()

      expect(result.length).toEqual(
        Object.keys(scenario.deliverLocation).length
      )
    }
  )

  scenario(
    'returns a single deliverLocation',
    async (scenario: StandardScenario) => {
      const result = await deliverLocation({
        id: scenario.deliverLocation.one.id,
      })

      expect(result).toEqual(scenario.deliverLocation.one)
    }
  )

  scenario('creates a deliverLocation', async () => {
    const result = await createDeliverLocation({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a deliverLocation', async (scenario: StandardScenario) => {
    const original = (await deliverLocation({
      id: scenario.deliverLocation.one.id,
    })) as DeliverLocation
    const result = await updateDeliverLocation({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a deliverLocation', async (scenario: StandardScenario) => {
    const original = (await deleteDeliverLocation({
      id: scenario.deliverLocation.one.id,
    })) as DeliverLocation
    const result = await deliverLocation({ id: original.id })

    expect(result).toEqual(null)
  })
})
