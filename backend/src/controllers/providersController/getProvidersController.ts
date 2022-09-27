import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient()

export class GetProvidersController {
    async get_all_providers(_req: Request, res: Response) {
       
        res.set({
            "Access-Control-Allow-Origin": "http://localhost:4200",
            "Access-Control-Allow-Credentials" : true 
        });    

        const providers = await prisma.providers.findMany();

       return res.json(providers);
    }

    async get_provider_by_id(req: Request, res: Response) {
        
        res.set({
            "Access-Control-Allow-Origin": "http://localhost:4200",
            "Access-Control-Allow-Credentials" : true 
        });    

        const id_searched = req.params.id;
        const provider = await prisma.providers.findUnique({
            where: {
                id: Number(id_searched)
            }
        })
        
        res.json(provider)

    }
}