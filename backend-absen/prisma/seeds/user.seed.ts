import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

export async function seedUsers(prisma: PrismaClient) {
  const password = await bcrypt.hash('password123', 10);

  await prisma.user.upsert({
    where: { email: 'superadmin@example.com' },
    update: {},
    create: {
      username: 'superadmin',
      email: 'superadmin@example.com',
      phone: '08123456789',
      password,
      role: 'SUPER_ADMIN',
      first_name: 'Super',
      last_name: 'Admin',
    },
  });

  console.log('✅ Users seeded!');
}
