-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Badges" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "style" TEXT,
    "iconPath" TEXT
);
INSERT INTO "new_Badges" ("iconPath", "id", "title") SELECT "iconPath", "id", "title" FROM "Badges";
DROP TABLE "Badges";
ALTER TABLE "new_Badges" RENAME TO "Badges";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
