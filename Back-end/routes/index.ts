import { Router } from "express";
import numCompte from "./numCompte";
import authentification from "./authentification";

const routes = Router();

routes.use("/numCompte", numCompte);
routes.use("/authentification", authentification);

export default routes;
