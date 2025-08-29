import { PrismaClient } from '@prisma/client';

export async function seedOdtw(prisma: PrismaClient) {
  await prisma.odtw.upsert({
    where: { id: "22222222-2222-2222-2222-222222222222" },
    update: {},
    create: {
      id: "22222222-2222-2222-2222-222222222222",
      name: "ODTW Sample",
    },
  });

  console.log('✅ Odtw seeded!');
}
