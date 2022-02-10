/* import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticateClient(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: "Token missing",
    });
  }

  // Bearer token
  //[0] => Bearer
  //[1] => token
  const [, token] = authHeader.split("");

  try {
    const { sub } = verify(
      token,
      "8b353d5cc07e13577608711f4602fcb7"
    ) as IPayload;

    request.cnpj = sub;

    return next();
  } catch (err) {
    return response.status(401).json({
      message: "Invalid Token",
    });
  }
}
 */
