import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient()

export class GetClientsController {
    async get_all_clients(_req: Request, res: Response) {
       
        res.set({
            "Access-Control-Allow-Origin": "http://localhost:4200",
            "Access-Control-Allow-Credentials" : true 
        });    

        const clients = await prisma.clients.findMany();

       return res.json(clients);
    }

    async get_client_by_id(req: Request, res: Response) {

        res.set({
            "Access-Control-Allow-Origin": "http://localhost:4200",
            "Access-Control-Allow-Credentials" : true 
        });
            
        const id_searched = req.params.id;
        const client = await prisma.clients.findUnique({
            where: {
                id: Number(id_searched)
            }
        })
        
        res.json(client)

    }
}