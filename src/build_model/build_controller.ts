import { Request, Response } from "express";
import { build_service } from "./build_service.js";

export type Builds_query = {
  skill_id?: string;
  author_id?: string;
  build_type_id?: string;
  ascendancy_class_id?: string;
  league_id?: string;
  poe_class_id?: string;
};
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

  async get_builds_with_query_params(req: Request, res: Response) {
    try {
      const query_params: Builds_query = req.query;

      const builds =
        await build_service.get_builds_with_query_params(query_params);

      return res.send(builds).status(200);
    } catch (error) {
      console.log(error);

      return res
        .status(500)
        .send({ error: "Произошла ошибка при получении данных." });
    }
  },
};
