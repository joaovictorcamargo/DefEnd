import { prisma } from "../../../../database/prismaClient";

export class GetCarryingUseCase {
  async execute() {
    const carrying = await prisma.carrying.findMany();
    return carrying;
  }
}
