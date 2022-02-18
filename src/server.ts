const express = require("express");
require("express-async-errors");
const { NextFunction, Request, Response } = require("express");
const { cors } = require("cors");

const { routes } = require("./routes");

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

//MidleWare
app.use(
  (
    error: Error,
    request: typeof Request,
    response: typeof Response,
    next: typeof NextFunction
  ) => {
    if (error instanceof Error) {
      return response.status(400).json({
        message: error.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
);

app.listen(process.env.PORT || 3000, () => console.log("Server is runing 🚀"));
