import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";

interface IAuthenticateClient {
  username: string;
  password: string;
  id: string;
}

export class AuthenticateClientUseCase {
  async execute({ username, password, id }: IAuthenticateClient) {
    const client = await prisma.client.findFirst({
      where: {
        username,
        id,
      },
    });

    if (!client) {
      throw new Error("Username or password invalid!");
    }

    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error("Username or password invalid!");
    }

    const token = sign({ username }, "0x4d54s448sikglutrnremeiijfms74", {
      subject: client.id,
      expiresIn: "1d",
    });

    return {
      user: {
        password,
        username,
      },
      token,
    };
  }
}
