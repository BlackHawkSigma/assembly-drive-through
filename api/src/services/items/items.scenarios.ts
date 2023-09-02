import type { Prisma, Item } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ItemCreateArgs>({
  item: {
    one: {
      data: {
        id: '123',
        name: 'Front',
        pickupLocation: {
          connectOrCreate: { create: { name: 'String' }, where: { id: 1 } },
        },
      },
    },
    two: {
      data: {
        id: '456',
        name: 'Heck',
        pickupLocation: {
          connectOrCreate: { create: { name: 'String' }, where: { id: 1 } },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Item, 'item'>
