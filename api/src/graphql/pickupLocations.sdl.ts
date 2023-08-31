export const schema = gql`
  type PickupLocation {
    id: Int!
    name: String!
    Item: [Item]!
  }

  type Query {
    pickupLocations: [PickupLocation!]! @requireAuth
    pickupLocation(id: Int!): PickupLocation @requireAuth
  }

  input CreatePickupLocationInput {
    name: String!
  }

  input UpdatePickupLocationInput {
    name: String
  }

  type Mutation {
    createPickupLocation(input: CreatePickupLocationInput!): PickupLocation!
      @requireAuth
    updatePickupLocation(
      id: Int!
      input: UpdatePickupLocationInput!
    ): PickupLocation! @requireAuth
    deletePickupLocation(id: Int!): PickupLocation! @requireAuth
  }
`
