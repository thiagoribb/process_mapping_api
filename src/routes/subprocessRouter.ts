import { Router } from "express";
import { subprocessController } from "../controllers/subprocessController";

const subprocessRouter: Router = Router();

subprocessRouter.post("/", subprocessController.create);
subprocessRouter.get("/:processId", subprocessController.findByProcess);

export default subprocessRouter;
