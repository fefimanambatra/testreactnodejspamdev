import { Router } from "express";
import USerController from "../controllers/UserControlleur";

const router = Router();

router.post("/", USerController.createUser);

router.get("/", USerController.getUser);

//Edit one compte
router.post("/update", USerController.editUser);

//Delete compte
router.patch("/delete", USerController.deleteUser);

router.post("/filter", USerController.findUserByMail);


//EndPoint Création utilisateur directement dans le système
router.get("/newUtilisateur", USerController.createNewCompte);

export default router;
