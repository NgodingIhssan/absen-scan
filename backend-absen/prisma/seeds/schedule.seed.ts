import { PrismaClient } from '@prisma/client';

export async function seedSchedule(prisma: PrismaClient) {
  console.log('➡️ Seeding schedules...');

  await prisma.schedule.upsert({
    where: { id: "schedule-1" }, // harus string karena UUID/string
    update: {},
    create: {
      id: "schedule-1",
      title: "Default Schedule",
      date: Math.floor(Date.now() / 1000), // epoch timestamp
      location: "Jakarta",
    },
  });

  console.log('✅ Schedules seeded!');
}
