import { prisma } from "../../../../database/prismaClient";

interface ICreateCarrying {
  typeOfPerson: string;
  cnpj: string;
  stateRegistration: string;
  socialReason: string;
  fantasyName: string;
  cep: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  email: string;
  phone: string;
  Observation: string;
}

export class CreateCarryingUseCase {
  async execute({
    typeOfPerson,
    stateRegistration,
    socialReason,
    fantasyName,
    cep,
    street,
    cnpj,
    number,
    neighborhood,
    city,
    state,
    email,
    phone,
    Observation,
  }: ICreateCarrying) {
    //Validar se transportadora existe
    const carryingExiste = await prisma.carrying.findFirst({
      where: {
        email: {
          equals: email,
        },
      },
    });

    if (carryingExiste) {
      throw new Error("Carrying alredy exists");
    }

    //Salvar a transportadora
    const carrying = await prisma.carrying.create({
      data: {
        typeOfPerson: typeOfPerson,
        cnpj: cnpj,
        stateRegistration: stateRegistration,
        socialReason: socialReason,
        fantasyName: fantasyName,
        cep: cep,
        street: street,
        number: number,
        neighborhood: neighborhood,
        city: city,
        state: state,
        email: email,
        phone: phone,
        Observation: Observation,
      },
    });

    return carrying;
  }
}
