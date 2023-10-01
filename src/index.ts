import express, { Request, Response } from "express";
import { router } from "./routes";

const server = express();

const db = [
  {
    name: "User Name",
    email: "email@example.com",
  },
];

server.use(express.json());
server.use(router);

server.get("/", (request: Request, response: Response) => {
  return response.status(200).json({ message: "DioBank app API" });
});

server.listen(5001, () => {
  console.log("listening on port");
});
