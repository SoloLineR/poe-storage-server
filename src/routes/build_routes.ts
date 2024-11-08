import { Router } from "express";
import { Request, Response } from "express";

export const build_router = Router();

build_router.get("/build", (req: Request, res: Response) => {
  return res.send("build").status(200);
});
