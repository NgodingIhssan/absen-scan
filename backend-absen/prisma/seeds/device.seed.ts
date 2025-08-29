import { PrismaClient } from '@prisma/client';

export async function seedDevice(prisma: PrismaClient) {
  console.log('➡️ Seeding devices...');

  await prisma.device.upsert({
    where: { id: '00000000-0000-0000-0000-000000000002' },
    update: {},
    create: {
      id: '00000000-0000-0000-0000-000000000002',
      name: 'Fingerprint Scanner',
      type: 'Biometric',
    },
  });

  console.log('✅ Devices seeded!');
}
