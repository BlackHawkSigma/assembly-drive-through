import type { Prisma, Order } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.OrderCreateArgs>({
  order: {
    one: {
      data: {
        updatedAt: '2023-08-18T18:16:11.610Z',
        deliverLocation: { create: { name: 'String' } },
        item: {
          create: {
            id: 'String1',
            name: 'Item 1',
            pickupLocation: { create: { name: 'Spritzguss' } },
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2023-08-18T18:16:11.610Z',
        deliverLocation: { create: { name: 'String' } },
        item: {
          create: {
            id: 'String2',
            name: 'Item 2',
            pickupLocationId: 1,
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Order, 'order'>
