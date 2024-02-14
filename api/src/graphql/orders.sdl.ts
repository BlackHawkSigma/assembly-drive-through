export const schema = gql`
  type Order {
    id: Int!
    itemId: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    fulfilledAt: DateTime
    claimedAt: DateTime
    claimedBy: String
    item: Item!
  }

  type Query {
    orders: [Order!]! @requireAuth
    ordersByPickuploction(id: Int!): [Order!]! @requireAuth
    order(id: Int!): Order @requireAuth
  }

  input CreateOrderInput {
    itemId: String!
  }

  input ClaimOrderInput {
    claimedBy: String!
  }

  type Mutation {
    createOrder(input: CreateOrderInput!): Order! @requireAuth
    deleteOrder(id: Int!): Order! @requireAuth
    claimOrder(id: Int!, input: ClaimOrderInput!): Order! @requireAuth
    completeOrder(id: Int!): Order! @requireAuth
  }
`
