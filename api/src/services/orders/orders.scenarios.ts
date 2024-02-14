import type { Prisma, Order } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.OrderCreateArgs>({
  order: {
    one: {
      data: {
        updatedAt: '2023-08-18T18:16:11.610Z',
        item: {
          create: {
            id: 'String1',
            name: 'Item 1',
            pickupLocation: {
              connectOrCreate: {
                create: { name: 'Spritzguss' },
                where: { id: 1 },
              },
            },
            deliverLocation: {
              connectOrCreate: { create: { name: 'String' }, where: { id: 1 } },
            },
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2023-08-18T18:16:11.610Z',
        item: {
          create: {
            id: 'String2',
            name: 'Item 2',
            pickupLocation: {
              connectOrCreate: {
                create: { name: 'Spritzguss' },
                where: { id: 1 },
              },
            },
            deliverLocation: {
              connectOrCreate: { create: { name: 'String' }, where: { id: 1 } },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Order, 'order'>
