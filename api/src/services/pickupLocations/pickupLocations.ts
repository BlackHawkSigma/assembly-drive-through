import type {
  QueryResolvers,
  MutationResolvers,
  PickupLocationRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const pickupLocations: QueryResolvers['pickupLocations'] = () => {
  return db.pickupLocation.findMany()
}

export const pickupLocation: QueryResolvers['pickupLocation'] = ({ id }) => {
  return db.pickupLocation.findUnique({
    where: { id },
  })
}

export const createPickupLocation: MutationResolvers['createPickupLocation'] =
  ({ input }) => {
    return db.pickupLocation.create({
      data: input,
    })
  }

export const updatePickupLocation: MutationResolvers['updatePickupLocation'] =
  ({ id, input }) => {
    return db.pickupLocation.update({
      data: input,
      where: { id },
    })
  }

export const deletePickupLocation: MutationResolvers['deletePickupLocation'] =
  ({ id }) => {
    return db.pickupLocation.delete({
      where: { id },
    })
  }

export const PickupLocation: PickupLocationRelationResolvers = {
  Item: (_obj, { root }) => {
    return db.pickupLocation.findUnique({ where: { id: root?.id } }).Item()
  },
}
