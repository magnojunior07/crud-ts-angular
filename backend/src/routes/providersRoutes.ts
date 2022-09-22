import { Router } from "express";
import { GetProvidersController } from "../controllers/providersController/getProvidersController"; 
import { PostProviderController } from "../controllers/providersController/postProviderController"; 
import { UpdateProviderController } from "../controllers/providersController/updateProviderController"; 
import { DeleteProviderController } from "../controllers/providersController/deleteProviderController"; 

const provider_routes = Router();

provider_routes.get("/api/providers/", new GetProvidersController().get_all_providers);
provider_routes.get("/api/providers/:id", new GetProvidersController().get_provider_by_id)

provider_routes.post("/api/providers/", new PostProviderController().post_provider);

provider_routes.put("/api/providers/:id", new UpdateProviderController().update_provider);

provider_routes.delete("/api/providers/:id", new DeleteProviderController().delete_provider);

export { provider_routes }