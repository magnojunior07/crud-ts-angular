import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient()

export class GetClientsController {
    async get_all_clients(_req: Request, res: Response) {
       const clients = await prisma.clients.findMany();

       return res.json(clients);
    }

    async get_client_by_id(req: Request, res: Response) {
        const id_searched = req.params.id;
        const client = await prisma.clients.findUnique({
            where: {
                id: Number(id_searched)
            }
        })
        
        res.json(client)

    }
}