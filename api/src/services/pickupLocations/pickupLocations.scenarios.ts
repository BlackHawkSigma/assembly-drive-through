import type { Prisma, PickupLocation } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PickupLocationCreateArgs>({
  pickupLocation: {
    one: { data: { name: 'String' } },
    two: { data: { name: 'String' } },
  },
})

export type StandardScenario = ScenarioData<PickupLocation, 'pickupLocation'>
