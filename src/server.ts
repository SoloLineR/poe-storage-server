import express from "express";
import { build_router } from "./routes/build_routes.js";
import "dotenv/config";
const PORT = process.env.PORT || 3003;
const server = express();
server.use(express.json());

server.use("/api", build_router);

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
