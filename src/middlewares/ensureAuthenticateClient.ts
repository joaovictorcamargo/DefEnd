/* import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export async function ensureAuthenticateClient(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: "Token is missing",
    });
  }

  //Bearer 2345678902220203
  //[0] => Bearer
  //[1] => Token
  const [, token] = authHeader.split("");

  try {
    const { sub } = verify(token, "8b353d5cc07e13577608711f4602fcb7");
    console.log("sub =>", sub);

    return next();
  } catch (err) {
    return response.status(401).json({
      message: "Token is missing",
    });
  }
}
 */
