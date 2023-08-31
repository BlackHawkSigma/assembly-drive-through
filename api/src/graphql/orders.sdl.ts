export const schema = gql`
  type Order {
    id: Int!
    deliverLocationId: Int!
    itemId: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    fulfilledAt: DateTime
    claimedAt: DateTime
    deliverLocation: DeliverLocation!
    item: Item!
  }

  type Query {
    orders: [Order!]! @requireAuth
    ordersByPickuploction(id: Int!): [Order!]! @requireAuth
    order(id: Int!): Order @requireAuth
  }

  input CreateOrderInput {
    deliverLocationId: Int!
    itemId: String!
  }

  input UpdateOrderInput {
    deliverLocationId: Int
    itemId: String
  }

  type Mutation {
    createOrder(input: CreateOrderInput!): Order! @requireAuth
    updateOrder(id: Int!, input: UpdateOrderInput!): Order! @requireAuth
    deleteOrder(id: Int!): Order! @requireAuth
    claimOrder(id: Int!): Order! @requireAuth
    completeOrder(id: Int!): Order! @requireAuth
  }
`
