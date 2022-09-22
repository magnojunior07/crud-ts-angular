import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient;

export class DeleteProviderController {
    async delete_provider(req: Request, res: Response) {
        const deleted_provider = await prisma.providers.delete({
            where: {
                id: Number(req.params.id)
            }
        })

        return res.json(`Provider successfully deleted: ${deleted_provider}`)
    }
}