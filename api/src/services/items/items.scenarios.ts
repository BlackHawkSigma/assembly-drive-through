import type { Prisma, Item } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ItemCreateArgs>({
  item: {
    one: { data: { id: '123', name: 'Front', pickupLocationId: 1 } },
    two: { data: { id: '456', name: 'Heck', pickupLocationId: 1 } },
  },
})

export type StandardScenario = ScenarioData<Item, 'item'>
