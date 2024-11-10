import { Router } from "express";

import { build_controller } from "./build_controller.js";
export const build_router = Router();

build_router.get("/build", build_controller.get_five_latest_build);
