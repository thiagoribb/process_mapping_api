import { Request, Response } from "express";
import httpStatus from "http-status";
import { processService } from "../services/processService";

class ProcessController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const { name } = req.body;
      const newProcess = await processService.create(name);

      res.status(httpStatus.CREATED).send(newProcess);
    } catch(error) {
      res.status(500).json({ error });
    }
  }

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const allProcesses = await processService.find();

      res.status(httpStatus.OK).send(allProcesses);
    } catch(error) {
      res.status(500).json({ error });
    }
  }
}

export const processController = new ProcessController();