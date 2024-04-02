import { Request, Response } from "express";
import httpStatus from "http-status";
import { subprocessService } from "../services/subprocessService";

class SubprocessController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const { name, processId } = req.body;
      const newSubprocess = await subprocessService.create(name, processId);

      res.status(httpStatus.CREATED).send(newSubprocess);
    } catch(error) {
      res.status(500).json({ error });
    }
  }

  async findByProcess(req: Request, res: Response): Promise<void> {
    try {
      const { processId } = req.params;

      const subprocesses = await subprocessService.findByProcessId(Number(processId));

      res.status(httpStatus.OK).send(subprocesses);
    } catch(error) {
      res.status(500).json({ error });
    }
  }
}

export const subprocessController = new SubprocessController();