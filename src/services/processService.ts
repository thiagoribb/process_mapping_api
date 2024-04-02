import { Process } from "@prisma/client";
import { prisma } from "../prismaClient";

class ProcessService {
  async create(name: string): Promise<Process> {
    const newProcess = await prisma.process.create({
      data: {
        name,
      }
    });

    return newProcess;
  }

  async find(): Promise<Process[]> {
    const processes = await prisma.process.findMany();

    return processes;
  }
}

export const processService = new ProcessService();