import type {
  QueryResolvers,
  MutationResolvers,
  ItemRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const items: QueryResolvers['items'] = () => {
  return db.item.findMany()
}

export const item: QueryResolvers['item'] = ({ id }) => {
  return db.item.findUnique({
    where: { id },
  })
}

export const createItem: MutationResolvers['createItem'] = ({ input }) => {
  return db.item.create({
    data: input,
  })
}

export const updateItem: MutationResolvers['updateItem'] = ({ id, input }) => {
  return db.item.update({
    data: input,
    where: { id },
  })
}

export const deleteItem: MutationResolvers['deleteItem'] = ({ id }) => {
  return db.item.delete({
    where: { id },
  })
}

export const Item: ItemRelationResolvers = {
  Order: (_obj, { root }) => {
    return db.item.findUnique({ where: { id: root?.id } }).Order()
  },
  pickupLocation: (_obj, { root }) => {
    return db.item.findUnique({ where: { id: root?.id } }).pickupLocation()
  },
  deliverLocation: (_obj, { root }) => {
    return db.item.findUnique({ where: { id: root?.id } }).deliverLocation()
  },
}
