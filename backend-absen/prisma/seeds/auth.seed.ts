import { PrismaClient, Role } from '@prisma/client';

const prisma = new PrismaClient();

const users = [
  {
    username: 'superadmin',
    email: 'superadmin@example.com',
    phone: '081234567890',
    password: '123', // nanti bisa diganti bcrypt
    role: Role.SUPER_ADMIN,
    first_name: 'Super',
    last_name: 'Admin',
    status: 'active',
  },
  {
    username: 'admin',
    email: 'admin@example.com',
    phone: '081234567891',
    password: '123',
    role: Role.ADMIN,
    first_name: 'Admin',
    last_name: 'User',
    status: 'active',
  },
  {
    username: 'kaprog',
    email: 'kaprog@example.com',
    phone: '081234567892',
    password: '123',
    role: Role.KAPROG,
    first_name: 'Ka',
    last_name: 'Prog',
    status: 'active',
  },
  {
    username: 'pekerja',
    email: 'pekerja@example.com',
    phone: '081234567893',
    password: '123',
    role: Role.PEKERJA,
    first_name: 'Pekerja',
    last_name: 'User',
    status: 'active',
  },
];

async function main() {
  for (const user of users) {
    await prisma.user.upsert({
      where: { username: user.username },
      update: user,
      create: user,
    });
  }
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
