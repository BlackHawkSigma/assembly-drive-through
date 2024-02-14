// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  items: [
    {
      id: '42',
      name: 'Front',
      pickupLocation: { name: 'Lager' },
      deliverLocation: { name: 'Montage' },
    },
    {
      id: '43',
      name: 'Heck',
      pickupLocation: { name: 'Lager' },
      deliverLocation: { name: 'Montage' },
    },
    {
      id: '44',
      name: 'Spoiler',
      pickupLocation: { name: 'Lager' },
      deliverLocation: { name: 'Montage' },
    },
  ],
})
