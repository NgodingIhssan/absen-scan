import { PrismaClient } from '@prisma/client';

export async function seedTransactions(prisma: PrismaClient) {
  const user = await prisma.user.findFirst();

  if (!user) {
    console.log('⚠️ No user found, skipping transactions seed.');
    return;
  }

  await prisma.transaction.upsert({
    where: { id: "33333333-3333-3333-3333-333333333333" },
    update: {},
    create: {
      id: "33333333-3333-3333-3333-333333333333",
      userId: user.id,
      amount: 100000,
      status: "completed",
    },
  });

  console.log('✅ Transactions seeded!');
}
