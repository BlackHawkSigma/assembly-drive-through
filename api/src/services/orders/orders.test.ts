import type { Order } from '@prisma/client'

import { createOrder, deleteOrder, order, orders } from './orders'
import type { StandardScenario } from './orders.scenarios'

describe('orders', () => {
  scenario('returns all orders', async (scenario: StandardScenario) => {
    const result = await orders()

    expect(result.length).toEqual(Object.keys(scenario.order).length)
  })

  scenario('returns a single order', async (scenario: StandardScenario) => {
    const result = await order({ id: scenario.order.one.id })

    expect(result).toEqual(scenario.order.one)
  })

  scenario('creates a order', async (scenario: StandardScenario) => {
    const result = await createOrder({
      input: {
        deliverLocationId: scenario.order.two.deliverLocationId,
        itemId: scenario.order.two.itemId,
      },
    })

    expect(result.deliverLocationId).toEqual(
      scenario.order.two.deliverLocationId
    )
    expect(result.itemId).toEqual(scenario.order.two.itemId)
    expect(result.updatedAt).toEqual(new Date('2023-08-18T18:16:11.586Z'))
  })

  scenario('deletes a order', async (scenario: StandardScenario) => {
    const original = (await deleteOrder({ id: scenario.order.one.id })) as Order
    const result = await order({ id: original.id })

    expect(result).toEqual(null)
  })
})
