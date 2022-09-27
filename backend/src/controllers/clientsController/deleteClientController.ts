import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient;

export class DeleteClientController {
    async delete_client(req: Request, res: Response) {
        
        res.set({
        "Access-Control-Allow-Origin": "http://localhost:4200",
        "Access-Control-Allow-Credentials" : true 
        });
        
        const deleted_client = await prisma.clients.delete({
            where: {
                id: Number(req.params.id)
            }
        })

        return res.json(`Client successfully deleted: ${deleted_client}`)
    }
}