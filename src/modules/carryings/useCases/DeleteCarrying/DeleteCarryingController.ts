import { Request, response, Response } from "express";
import { prisma } from "../../../../database/prismaClient";

export class DeleteCarryingController {
  async handle(request: Request, response: Response) {
    const id = request.params.id;
    const deletCarrying = await prisma.carrying.delete({
      where: {
        id: id,
      },
    });
    response.json(deletCarrying);
  }
}
