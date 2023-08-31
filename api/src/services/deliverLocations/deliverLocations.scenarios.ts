import type { Prisma, DeliverLocation } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.DeliverLocationCreateArgs>({
  deliverLocation: {
    one: { data: { name: 'String' } },
    two: { data: { name: 'String' } },
  },
})

export type StandardScenario = ScenarioData<DeliverLocation, 'deliverLocation'>
