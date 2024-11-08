import { Router } from "express";
import { Request, Response } from "express";
import { db } from "../db/db.js";
export const build_router = Router();

build_router.get("/build", async (req: Request, res: Response) => {
  const build = await db.query("SELECT * FROM build");

  return res.send(build.rows).status(200);
});
