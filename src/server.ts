import express from "express";
import { Express, Request, Response } from "express";
const server: Express = express();
server.use(express.json());

server.get("/api", (req: Request, res: Response) => {
  res.send("aboba");
});

server.listen(3002, () => {
  console.log(`server on port ${3002}`);
});
