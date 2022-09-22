import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient()

export class GetProvidersController {
    async get_all_providers(_req: Request, res: Response) {
       const providers = await prisma.providers.findMany();

       return res.json(providers);
    }

    async get_provider_by_id(req: Request, res: Response) {
        const id_searched = req.params.id;
        const provider = await prisma.providers.findUnique({
            where: {
                id: Number(id_searched)
            }
        })
        
        res.json(provider)

    }
}