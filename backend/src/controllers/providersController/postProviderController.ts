import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient;

export class PostProviderController {
    async post_provider(req: Request, res: Response) {
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