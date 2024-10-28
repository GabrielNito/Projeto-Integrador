/*
  Warnings:

  - You are about to drop the column `badges` on the `Users` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Badges" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "iconPath" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "UserBadges" (
    "userId" INTEGER NOT NULL,
    "badgeId" INTEGER NOT NULL,

    PRIMARY KEY ("userId", "badgeId"),
    CONSTRAINT "UserBadges_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "UserBadges_badgeId_fkey" FOREIGN KEY ("badgeId") REFERENCES "Badges" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Posts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    "threadId" INTEGER NOT NULL,
    CONSTRAINT "Posts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Posts_threadId_fkey" FOREIGN KEY ("threadId") REFERENCES "Threads" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Posts" ("content", "createdAt", "id", "likes", "threadId", "updatedAt", "userId") SELECT "content", "createdAt", "id", "likes", "threadId", "updatedAt", "userId" FROM "Posts";
DROP TABLE "Posts";
ALTER TABLE "new_Posts" RENAME TO "Posts";
CREATE TABLE "new_Threads" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "isClosed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Threads_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Threads" ("createdAt", "id", "isClosed", "likes", "title", "updatedAt", "userId") SELECT "createdAt", "id", "isClosed", "likes", "title", "updatedAt", "userId" FROM "Threads";
DROP TABLE "Threads";
ALTER TABLE "new_Threads" RENAME TO "Threads";
CREATE TABLE "new_Users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    "likedPosts" TEXT NOT NULL,
    "likedThreads" TEXT NOT NULL,
    "avatar" TEXT
);
INSERT INTO "new_Users" ("avatar", "createAt", "email", "id", "likedPosts", "likedThreads", "password", "role", "updateAt", "username") SELECT "avatar", "createAt", "email", "id", "likedPosts", "likedThreads", "password", "role", "updateAt", "username" FROM "Users";
DROP TABLE "Users";
ALTER TABLE "new_Users" RENAME TO "Users";
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
