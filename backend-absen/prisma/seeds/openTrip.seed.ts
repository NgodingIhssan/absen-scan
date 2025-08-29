import { PrismaClient } from '@prisma/client';

export async function seedOpenTrip(prisma: PrismaClient) {
  console.log('➡️ Seeding open trips...');

  await prisma.openTrip.upsert({
    where: { id: '00000000-0000-0000-0000-000000000003' },
    update: {},
    create: {
      id: '00000000-0000-0000-0000-000000000003',
      title: 'Company Trip 2025',
      location: 'Bali',
      date: Math.floor(new Date('2025-06-15').getTime() / 1000),
    },
  });

  console.log('✅ Open trips seeded!');
}
