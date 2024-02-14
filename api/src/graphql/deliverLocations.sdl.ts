export const schema = gql`
  type DeliverLocation {
    id: Int!
    name: String!
    Item: [Item!]!
  }

  type Query {
    deliverLocations: [DeliverLocation!]! @requireAuth
    deliverLocation(id: Int!): DeliverLocation @requireAuth
  }

  input CreateDeliverLocationInput {
    name: String!
  }

  input UpdateDeliverLocationInput {
    name: String
  }

  type Mutation {
    createDeliverLocation(input: CreateDeliverLocationInput!): DeliverLocation!
      @requireAuth
    updateDeliverLocation(
      id: Int!
      input: UpdateDeliverLocationInput!
    ): DeliverLocation! @requireAuth
    deleteDeliverLocation(id: Int!): DeliverLocation! @requireAuth
  }
`
