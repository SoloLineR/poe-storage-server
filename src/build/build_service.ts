import { build_repo } from "./build_repo.js";

export const build_service = {
  async get_five_latest_build() {
    const builds = build_repo.get_five_latest_build();

    return builds;
  },
};
