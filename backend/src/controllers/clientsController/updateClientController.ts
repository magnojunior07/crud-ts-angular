import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient;

export class UpdateClientController {
    async update_client(req: Request, res: Response) {
        const client = req.body;
        const updated_client = await prisma.clients.update({
            where: {
                id: Number(req.params.id)
            },

            data: client
        })

        return res.json(`Client updated successfully: ${updated_client}`)
    }

}