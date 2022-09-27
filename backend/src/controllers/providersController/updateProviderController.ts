import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient;

export class UpdateProviderController {
    async update_provider(req: Request, res: Response) {
        
        res.set({
            "Access-Control-Allow-Origin": "http://localhost:4200",
            "Access-Control-Allow-Credentials" : true 
        });    

        const provider = req.body;
        const updated_provider = await prisma.providers.update({
            where: {
                id: Number(req.params.id)
            },

            data: provider
        })

        return res.json(`Client successfully updated: ${updated_provider}`)
    }

}