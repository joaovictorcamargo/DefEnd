import { prisma } from "../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IAuthenticateClient {
  username: string;
  password: string;
}

export class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthenticateClient) {
    //Receber username e password

    //verificar se username cadastrado
    const client = await prisma.client.findFirst({
      where: {
        username,
      },
    });

    if (!client) {
      throw new Error("Username or password is invalid");
    }
    //verificar se senha corresponde ao username
    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error("Username or password is invalid");
    }
    //gerar token
    const token = sign({ username }, "8b353d5cc07e13577608711f4602fcb7", {
      subject: client.id,
      expiresIn: "1d",
    });

    return token;
  }
}
