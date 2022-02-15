import { Router } from "express";
/* import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
 */ import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { CreateCarryingController } from "./modules/carryings/useCases/CreateCarrying/CreateCarryingController";
import { DeleteCarryingController } from "./modules/carryings/useCases/DeleteCarrying/DeleteCarryingController";
import { GetCarryingController } from "./modules/carryings/useCases/GetCarrying/GetCarryingController";
import { UpdateCarryingController } from "./modules/carryings/useCases/UpdateCarrying/UpdateCarryingController";
import { CreateClientController } from "./modules/clients/useCases/CreateClient/CreateClientController";
import { GetClientController } from "./modules/clients/useCases/GetClient/GetClientController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createCarryingController = new CreateCarryingController();
const getCarryingController = new GetCarryingController();
const deleteCarryingController = new DeleteCarryingController();
const updateCarryingController = new UpdateCarryingController();
const getClientController = new GetClientController();

routes.post("/authenticate", authenticateClientController.handle);

routes.post("/client/", createClientController.handle);

routes.post("/carrying/", createCarryingController.handle);
routes.get("/carrying/", getCarryingController.findAll);
routes.get("/client/:id", getClientController.findOne);
routes.get("/client/", getClientController.findAll);

routes.get("/carrying/:id", getCarryingController.findOne);

routes.delete(
  "/:id",
  /* ensureAuthenticateClient, */
  deleteCarryingController.handle
);

routes.put("/:id", updateCarryingController.handle);

export { routes };
