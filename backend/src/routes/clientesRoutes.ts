import { Router } from "express";
import { GetClientsController } from "../controllers/clientsController/getClientsController";
import { PostClientController } from "../controllers/clientsController/postClientController";
import { UpdateClientController } from "../controllers/clientsController/updateClientController";
import { DeleteClientController } from "../controllers/clientsController/deleteClientController";

const client_routes = Router();

client_routes.get("/api/", new GetClientsController().get_all_clients);
client_routes.get("/api/:id", new GetClientsController().get_client_by_id)

client_routes.post("/api/post/", new PostClientController().post_client);

client_routes.put("/api/put/:id", new UpdateClientController().update_client);

client_routes.delete("/api/delete/:id", new DeleteClientController().delete_client);

export { client_routes }