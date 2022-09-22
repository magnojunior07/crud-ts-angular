import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient;

export class DeleteClientController {
    async delete_client(req: Request, res: Response) {
        const deleted_client = await prisma.clients.delete({
            where: {
                id: Number(req.params.id)
            }
        })

        return res.json(`Client successfully deleted: ${deleted_client}`)
    }
}