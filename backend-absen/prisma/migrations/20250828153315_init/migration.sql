/*
  Warnings:

  - You are about to drop the `Device` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OpenTrip` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Transaction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_userId_fkey";

-- DropTable
DROP TABLE "Device";

-- DropTable
DROP TABLE "OpenTrip";

-- DropTable
DROP TABLE "Transaction";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "email" VARCHAR(70) NOT NULL,
    "phone" VARCHAR(20),
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'PEKERJA',
    "status" VARCHAR(10) DEFAULT 'active',
    "first_name" TEXT NOT NULL,
    "last_name" TEXT,
    "created_at" INTEGER NOT NULL DEFAULT EXTRACT(EPOCH FROM now()),
    "updated_at" INTEGER NOT NULL DEFAULT EXTRACT(EPOCH FROM now()),
    "deleted_at" INTEGER,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transactions" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "status" VARCHAR(20),
    "created_at" INTEGER NOT NULL DEFAULT EXTRACT(EPOCH FROM now()),
    "updated_at" INTEGER NOT NULL DEFAULT EXTRACT(EPOCH FROM now()),
    "deleted_at" INTEGER,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "devices" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT,
    "created_at" INTEGER NOT NULL DEFAULT EXTRACT(EPOCH FROM now()),
    "updated_at" INTEGER NOT NULL DEFAULT EXTRACT(EPOCH FROM now()),
    "deleted_at" INTEGER,

    CONSTRAINT "devices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "open_trips" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "location" TEXT,
    "date" INTEGER NOT NULL,
    "created_at" INTEGER NOT NULL DEFAULT EXTRACT(EPOCH FROM now()),
    "updated_at" INTEGER NOT NULL DEFAULT EXTRACT(EPOCH FROM now()),
    "deleted_at" INTEGER,

    CONSTRAINT "open_trips_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
