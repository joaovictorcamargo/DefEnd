import express, {
  NextFunction,
  request,
  response,
  Request,
  Response,
} from "express";
import "express-async-errors";
import { routes } from "./routes";
import cors from "cors";
import { prisma } from "./database/prismaClient";

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(process.env.PORT || 3000, () => console.log("Server is runing 🚀"));
