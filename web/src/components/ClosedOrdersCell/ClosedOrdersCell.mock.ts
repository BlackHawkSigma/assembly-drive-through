export const standard = (/* vars, { ctx, req } */) => ({
  closedOrders: [
    {
      id: 42,
      item: {
        name: 'Test Item',
      },
      claimedBy: 'John Doe',
      createdAt: new Date('2023-08-21T11:00:00Z').toISOString(),
      claimedAt: new Date('2023-08-21T11:00:00Z').toISOString(),
      fulfilledAt: new Date('2023-08-21T11:00:00Z').toISOString(),
    },
    {
      id: 43,
      item: {
        name: 'Other Test Item',
      },
      claimedBy: 'John Doe',
      createdAt: new Date('2023-08-21T11:00:00Z').toISOString(),
      claimedAt: new Date('2023-08-21T11:00:00Z').toISOString(),
      fulfilledAt: new Date('2023-08-21T11:00:00Z').toISOString(),
    },
    {
      id: 44,
      item: {
        name: 'Another Test Item',
      },
      claimedBy: 'John Doe',
      createdAt: new Date('2023-08-21T11:00:00Z').toISOString(),
      claimedAt: new Date('2023-08-21T11:00:00Z').toISOString(),
      fulfilledAt: new Date('2023-08-21T11:00:00Z').toISOString(),
    },
  ],
})
