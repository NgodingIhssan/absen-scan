-- CreateEnum
CREATE TYPE "Role" AS ENUM ('SUPER_ADMIN', 'ADMIN', 'KAPROG', 'PEKERJA');

-- CreateTable
CREATE TABLE "User" (
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

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Odtw" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" INTEGER NOT NULL DEFAULT EXTRACT(EPOCH FROM now()),
    "updated_at" INTEGER NOT NULL DEFAULT EXTRACT(EPOCH FROM now()),
    "deleted_at" INTEGER,

    CONSTRAINT "Odtw_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "status" VARCHAR(20),
    "created_at" INTEGER NOT NULL DEFAULT EXTRACT(EPOCH FROM now()),
    "updated_at" INTEGER NOT NULL DEFAULT EXTRACT(EPOCH FROM now()),
    "deleted_at" INTEGER,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Device" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT,
    "created_at" INTEGER NOT NULL DEFAULT EXTRACT(EPOCH FROM now()),
    "updated_at" INTEGER NOT NULL DEFAULT EXTRACT(EPOCH FROM now()),
    "deleted_at" INTEGER,

    CONSTRAINT "Device_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OpenTrip" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "location" TEXT,
    "date" INTEGER NOT NULL,
    "created_at" INTEGER NOT NULL DEFAULT EXTRACT(EPOCH FROM now()),
    "updated_at" INTEGER NOT NULL DEFAULT EXTRACT(EPOCH FROM now()),
    "deleted_at" INTEGER,

    CONSTRAINT "OpenTrip_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
