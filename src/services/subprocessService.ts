import { Subprocess } from "@prisma/client";
import { prisma } from "../prismaClient";

class SubprocessService {
  async create(name: string, processId: number): Promise<Subprocess> {
    const newProcess = await prisma.subprocess.create({
      data: {
        name,
        processId
      }
    });

    return newProcess;
  }

  async findByProcessId(processId: number): Promise<Subprocess[]> {
    const processes = await prisma.subprocess.findMany({
      where: {
        processId
      }
    });

    return processes;
  }
}

export const subprocessService = new SubprocessService();