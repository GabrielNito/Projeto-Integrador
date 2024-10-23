-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    "likedPosts" TEXT,
    "likedThreads" TEXT,
    "avatar" TEXT,
    "badges" TEXT
);
INSERT INTO "new_Users" ("avatar", "badges", "createAt", "email", "id", "likedPosts", "likedThreads", "password", "role", "updateAt", "username") SELECT "avatar", "badges", "createAt", "email", "id", "likedPosts", "likedThreads", "password", "role", "updateAt", "username" FROM "Users";
DROP TABLE "Users";
ALTER TABLE "new_Users" RENAME TO "Users";
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
