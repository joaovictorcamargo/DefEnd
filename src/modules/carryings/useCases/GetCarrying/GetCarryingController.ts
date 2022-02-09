import { Request, Response } from "express";
import { prisma } from "../../../../database/prismaClient";
import { GetCarryingUseCase } from "./GetCarryingUseCase";

export class GetCarryingController {
  async handle(request: Request, response: Response) {
    const createCarryingUseCase = new GetCarryingUseCase();
    const result = await createCarryingUseCase.execute();
    return response.json(result);
  }
}
