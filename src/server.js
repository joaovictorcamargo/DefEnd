import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { routes } from "./routes";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

//MidleWare
app.use((err, request, response, next) => {
  if (err instanceof Error) {
    return response.status(400).json({
      message: err.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(process.env.PORT || 3000, () => console.log("Server is runing 🚀"));
