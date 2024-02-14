import type {
  QueryResolvers,
  MutationResolvers,
  DeliverLocationRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const deliverLocations: QueryResolvers['deliverLocations'] = () => {
  return db.deliverLocation.findMany()
}

export const deliverLocation: QueryResolvers['deliverLocation'] = ({ id }) => {
  return db.deliverLocation.findUnique({
    where: { id },
  })
}

export const createDeliverLocation: MutationResolvers['createDeliverLocation'] =
  ({ input }) => {
    return db.deliverLocation.create({
      data: input,
    })
  }

export const updateDeliverLocation: MutationResolvers['updateDeliverLocation'] =
  ({ id, input }) => {
    return db.deliverLocation.update({
      data: input,
      where: { id },
    })
  }

export const deleteDeliverLocation: MutationResolvers['deleteDeliverLocation'] =
  ({ id }) => {
    return db.deliverLocation.delete({
      where: { id },
    })
  }

export const DeliverLocation: DeliverLocationRelationResolvers = {
  Item: (_obj, { root }) => {
    return db.deliverLocation.findUnique({ where: { id: root?.id } }).Item()
  },
}
