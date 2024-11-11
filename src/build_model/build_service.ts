import { Builds_query } from "./build_controller.js";
import { build_repo } from "./build_repo.js";

export const build_service = {
  async get_five_latest_build() {
    const builds = build_repo.get_five_latest_build();

    return builds;
  },

  async get_builds_with_query_params(query_params: Builds_query) {
    const build = build_repo.get_builds_with_query_params(query_params);
    return build;
  },
};
