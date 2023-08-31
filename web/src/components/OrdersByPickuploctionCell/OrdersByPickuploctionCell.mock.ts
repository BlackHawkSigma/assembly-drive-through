// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  orders: [
    {
      id: 42,
      item: {
        name: 'Test Item',
        id: '123456789',
        pickupLocation: {
          name: 'Test Lager',
        },
      },
      deliverLocation: {
        name: 'Test Montage',
      },
      createdAt: new Date('2023-08-21T11:00:00Z').toString(),
      updatedAt: new Date('2023-08-21T11:00:00Z').toString(),
      fulfilledAt: null,
    },
    {
      id: 43,
      item: {
        name: 'Other Test Item',
        id: '987654321',
        pickupLocation: {
          name: 'Test Lager',
        },
      },
      deliverLocation: {
        name: 'Test Montage',
      },
      createdAt: new Date('2023-08-21T11:00:00Z').toString(),
      updatedAt: new Date('2023-08-21T11:00:00Z').toString(),
      fulfilledAt: null,
    },
    {
      id: 44,
      item: {
        name: 'Another Test Item',
        id: '112911911',
        pickupLocation: {
          name: 'Test Lager',
        },
      },
      deliverLocation: {
        name: 'Test Montage',
      },
      createdAt: new Date('2023-08-21T11:00:00Z').toString(),
      updatedAt: new Date('2023-08-21T11:00:00Z').toString(),
      fulfilledAt: null,
    },
  ],
})
