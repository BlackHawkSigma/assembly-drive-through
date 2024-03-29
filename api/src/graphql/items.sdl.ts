export const schema = gql`
  type Item {
    id: String!
    name: String!
    pickupLocationId: Int!
    pickupLocation: PickupLocation!
    deliverLocationId: Int!
    deliverLocation: DeliverLocation!
    Order: [Order]!
  }

  type Query {
    items: [Item!]! @requireAuth
    item(id: String!): Item @requireAuth
  }

  input CreateItemInput {
    id: String!
    name: String!
    pickupLocationId: Int!
    deliverLocationId: Int!
  }

  input UpdateItemInput {
    name: String
    pickupLocationId: Int
    deliverLocationId: Int
  }

  type Mutation {
    createItem(input: CreateItemInput!): Item! @requireAuth
    updateItem(id: String!, input: UpdateItemInput!): Item! @requireAuth
    deleteItem(id: String!): Item! @requireAuth
  }
`
