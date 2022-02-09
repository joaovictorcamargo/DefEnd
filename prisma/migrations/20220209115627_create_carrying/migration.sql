-- CreateTable
CREATE TABLE "carryings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "typeOfPerson" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "stateRegistration" TEXT NOT NULL,
    "socialReason" TEXT NOT NULL,
    "fantasyName" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "Observation" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "carryings_cnpj_key" ON "carryings"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "carryings_email_key" ON "carryings"("email");

-- CreateIndex
CREATE UNIQUE INDEX "carryings_phone_key" ON "carryings"("phone");
