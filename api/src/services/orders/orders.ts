import type {
  MutationResolvers,
  OrderRelationResolvers,
  QueryResolvers,
} from 'types/graphql'

import { validateWith } from '@redwoodjs/api'

import { db } from 'src/lib/db'

export const orders: QueryResolvers['orders'] = () => {
  return db.order.findMany({ where: { fulfilledAt: null } })
}

export const ordersByPickuploction: QueryResolvers['ordersByPickuploction'] = ({
  id,
}) => {
  return db.order.findMany({
    where: { item: { pickupLocationId: id }, fulfilledAt: null },
  })
}

export const order: QueryResolvers['order'] = ({ id }) => {
  return db.order.findUnique({
    where: { id },
  })
}

export const createOrder: MutationResolvers['createOrder'] = async ({
  input,
}) => {
  await validateWith(async () => {
    const item = await db.item.findUnique({ where: { id: input.itemId } })

    if (item === null) {
      throw `Code ${input.itemId} nicht gelistet`
    }
  })

  return db.order.create({
    data: input,
  })
}

export const updateOrder: MutationResolvers['updateOrder'] = ({
  id,
  input,
}) => {
  return db.order.update({
    data: input,
    where: { id },
  })
}

export const deleteOrder: MutationResolvers['deleteOrder'] = ({ id }) => {
  return db.order.delete({
    where: { id },
  })
}

export const claimOrder: MutationResolvers['completeOrder'] = ({ id }) => {
  return db.order.update({
    where: { id },
    data: { claimedAt: new Date() },
  })
}

export const completeOrder: MutationResolvers['completeOrder'] = ({ id }) => {
  return db.order.update({
    where: { id },
    data: { fulfilledAt: new Date() },
  })
}

export const Order: OrderRelationResolvers = {
  deliverLocation: (_obj, { root }) => {
    return db.order.findUnique({ where: { id: root?.id } }).deliverLocation()
  },
  item: (_obj, { root }) => {
    return db.order.findUnique({ where: { id: root?.id } }).item()
  },
}
