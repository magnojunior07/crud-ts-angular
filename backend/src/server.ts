import express from "express";
import { Request, Response } from "express";
import { client_routes } from "./routes/clientesRoutes";
const app = express();

app.use(express.json());
app.use(client_routes);

app.get("/", (_req: Request, res: Response) => {
    res.json({info: "API is running"})
}) 

app.listen(3000, () => {
    console.log("API is running");
});
