import { db } from "../db/db.js";
export const build_repo = {
  async get_five_latest_build() {
    const build = await db.query("SELECT * FROM build");

    return build.rows;
  },
};
