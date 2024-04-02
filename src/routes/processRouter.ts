import { Router } from "express";
import { processController } from "../controllers/processController";

const processRouter: Router = Router();

processRouter.post("/", processController.create);
processRouter.get("/", processController.getAll);

export default processRouter;
