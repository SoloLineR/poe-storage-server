import { Request, Response } from "express";
import { build_service } from "./build_service.js";
export const build_controller = {
  async get_five_latest_build(req: Request, res: Response) {
    try {
      const build = await build_service.get_five_latest_build();
      return res.status(200).send(build);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
      return res
        .status(500)
        .send({ error: "Произошла ошибка при получении данных." });
    }
  },
};
