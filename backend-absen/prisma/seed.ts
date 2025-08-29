import { PrismaClient } from '@prisma/client';
import { seedAuth } from './seeds/auth.seed';
import { seedSchedule } from './seeds/schedule.seed';
import { seedDevice } from './seeds/device.seed';
import { seedOpenTrip } from './seeds/openTrip.seed';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Start seeding...');

  await seedAuth(prisma);
  await seedSchedule(prisma);
  await seedDevice(prisma);
  await seedOpenTrip(prisma);

  console.log('🌱 Seeding finished!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
