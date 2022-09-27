import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient;

export class PostProviderController {
    async post_provider(req: Request, res: Response) {
        
        res.set({
            "Access-Control-Allow-Origin": "http://localhost:4200",
            "Access-Control-Allow-Credentials" : true 
        });    

        const provider = req.body;

        try {  
            const created_provider = await prisma.providers.create({
                data: {
                    name: provider.name,
                    cnpj: provider.cnpj
                }
                })

            res.json(`Provider created successfully: ${created_provider}`)
            
        } catch {
            res.json("This provider already exists")
        }
    }
}