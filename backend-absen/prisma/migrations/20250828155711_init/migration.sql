-- CreateTable
CREATE TABLE "Schedule" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "date" INTEGER NOT NULL,
    "location" TEXT,
    "created_at" INTEGER NOT NULL DEFAULT EXTRACT(EPOCH FROM now()),
    "updated_at" INTEGER NOT NULL DEFAULT EXTRACT(EPOCH FROM now()),
    "deleted_at" INTEGER,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);
