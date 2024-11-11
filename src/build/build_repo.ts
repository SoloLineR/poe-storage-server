import { db } from "../db/db.js";
import { Builds_query } from "./build_controller.js";

export const build_repo = {
  async get_five_latest_build() {
    const build = await db.query(`SELECT 
    b.id AS build_id, 
    b.name AS build_name, 
    b.url AS build_url, 
    bt.name AS build_type, 
    s.name AS skill_name, 
    s.image AS skill_image, 
    a.name AS author_name, 
    a.url AS author_url, 
    pc.name AS poe_class_name, 
    ac.name AS ascendancy_class_name, 
    ac.image AS ascendancy_class_image, 
    l.name AS league_name, 
    b.created_at AS created_at
FROM 
    build b
JOIN 
    build_type bt ON b.build_type_id = bt.id
JOIN 
    skill s ON b.skill_id = s.id
JOIN 
    author a ON b.author_id = a.id
JOIN 
    poe_class pc ON b.poe_class_id = pc.id
JOIN 
    ascendancy_class ac ON b.ascendancy_class_id = ac.id
JOIN 
    league l ON b.league_id = l.id
ORDER BY 
    b.created_at DESC
LIMIT 5;`);

    return build.rows;
  },
  async get_builds_with_query_params(query_params: Builds_query) {
    let querySearch = "";
    const queryKeys = Object.keys(query_params) as (keyof Builds_query)[];
    if (queryKeys.length !== 0) {
      querySearch = "WHERE";

      for (let i = 0; i < queryKeys.length; i++) {
        if (queryKeys[i + 1] === undefined) {
          querySearch =
            querySearch.concat(" b.", queryKeys[i]) +
            ` = ${query_params[queryKeys[i]]}`;
        } else {
          querySearch =
            querySearch.concat(" b.", queryKeys[i]) +
            ` = ${query_params[queryKeys[i]]} AND`;
        }
      }
    }

    const build = await db.query(`SELECT 
  b.id AS build_id, 
  b.name AS build_name, 
  b.url AS build_url, 
  bt.name AS build_type, 
  s.name AS skill_name, 
  s.image AS skill_image, 
  a.name AS author_name, 
  a.url AS author_url, 
  pc.name AS poe_class_name, 
  ac.name AS ascendancy_class_name, 
  ac.image AS ascendancy_class_image, 
  l.name AS league_name, 
  b.created_at AS created_at
FROM 
  build b
JOIN 
  build_type bt ON b.build_type_id = bt.id
JOIN 
  skill s ON b.skill_id = s.id
JOIN 
  author a ON b.author_id = a.id
JOIN 
  poe_class pc ON b.poe_class_id = pc.id
JOIN 
  ascendancy_class ac ON b.ascendancy_class_id = ac.id
JOIN 
  league l ON b.league_id = l.id
   ${querySearch}
  `);
    return build.rows;
  },
};
