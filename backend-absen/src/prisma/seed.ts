import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const username = 'superadmin';
  const email = 'superadmin@example.com';
  const plainPassword = '123456';

  // hash password
  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  // cek apakah superadmin sudah ada
  const existing = await prisma.user.findUnique({
    where: { username },
  });

  if (!existing) {
    await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        role: Role.SUPER_ADMIN, // ✅ enum, bukan string
        first_name: 'Super',
        last_name: 'Admin',
        phone: '0800000000',
      },
    });
    console.log('✅ Superadmin created with username:', username);
  } else {
    console.log('⚠️ Superadmin already exists');
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
