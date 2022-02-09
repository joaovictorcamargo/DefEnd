import { Router } from "express";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { CreateCarryingController } from "./modules/carryings/useCases/CreateCarrying/CreateCarryingController";
import { CreateClientController } from "./modules/clients/useCases/CreateClient/CreateClientController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createCarryingController = new CreateCarryingController();

routes.post("/authenticate", authenticateClientController.handle);

routes.post("/client/", createClientController.handle);

routes.post("/carrying/", createCarryingController.handle);

export { routes };
