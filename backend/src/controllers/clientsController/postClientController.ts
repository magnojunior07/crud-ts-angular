import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient;

export class PostClientController {
    async post_client(req: Request, res: Response) {
        
        res.set({
            "Access-Control-Allow-Origin": "http://localhost:4200",
            "Access-Control-Allow-Credentials" : true 
        });    
        
        const client = req.body;
        
        try {  
            const created_client = await prisma.clients.create({
                data: {
                    name: client.name,
                    cpf: client.cpf
                }
                })

            res.json(`Client created successfully: ${created_client}`)
            
        } catch {
            res.json("This client already exists")
        }
    }
}
