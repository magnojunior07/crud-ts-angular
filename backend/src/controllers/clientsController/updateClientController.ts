import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient;

export class UpdateClientController {
    async update_client(req: Request, res: Response) {
        
        res.set({
            "Access-Control-Allow-Origin": "http://localhost:4200",
            "Access-Control-Allow-Credentials" : true 
        });    
        
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