export const standard = (/* vars, { ctx, req } */) => ({
  order: {
    id: 42,
    item: {
      id: '123456789',
      name: 'TestItem',
      pickupLocation: {
        name: 'Test Lager',
      },
      deliverLocation: {
        name: 'Test Montage',
      },
    },
    createdAt: new Date('2023-08-21T11:00:00Z').toString(),
    updatedAt: new Date('2023-08-21T11:00:00Z').toString(),
    fulfilledAt: null,
  },
})
