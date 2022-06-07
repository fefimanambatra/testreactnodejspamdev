import { Request, Response } from "express";
import { User } from "../entity/User";
import { IUser } from "../interface/User";
import * as bcrypt from "bcryptjs";

class USerController {
  // CREATE NEW USER

  static createUser = async (req: Request, res: Response) => {
    const { username, email, password, role, dateCreated } = req.body as IUser;

    try {
      // verify mail exist

      const verify = await User.find({
        email: email,
      });

      if (verify.length > 0) {
        return res.status(200).send("email already exist");
      }

      await User.create({
        username,
        password: bcrypt.hashSync(password, 8),
        email,
        role,
        dateCreated,
      });

      res.status(200).send({
        success: "user is added",
      });
    } catch (err: any) {
      res.status(500).send({
        error: "Error",
        Problem: err,
      });
    }
  };

  // GET ALL LIST USER

  static getUser = async (req: Request, res: Response) => {
    try {
      const listUser = await User.find().sort({ dateCreated: -1 });

      res.status(200).send(
        listUser.map((item: any) => {
          return {
            ...item._doc,
            id: item._id,
          };
        })
      );
    } catch (err: any) {
      res.status(500).send({
        error: "Error",
        Problem: err,
      });
    }
  };

  // EDIT
  static editUser = async (req: Request, res: Response) => {
    const id: string = req.body.id;

    const data = req.body;

    try {
      await User.updateOne({ _id: id }, { ...data });

      res.status(200).send("update Compte");
    } catch (err) {
      res.status(500).send("Unable to update Compte");
    }
  };

  //DELETE
  static deleteUser = async (req: Request, res: Response) => {
    try {
      const ID = req.body.id;
      const compte = await User.deleteOne({ _id: ID });

      res.status(200).send("deleted");
    } catch (err) {
      return res.status(500).send("Unable to delete compte");
    }
  };

  // GET LIST USER FILTER

  static findUserByMail = async (req: Request, res: Response) => {
    // get all user

    const { email } = req.body;

    try {
      const listUserFilter = await User.find({
        email: {
          $regex: email,
          $options: "i",
        },
      }).sort({ dateCreated: -1 });

      res.status(200).send({
        listUserFilter: listUserFilter,
      });
    } catch (err: any) {
      res.status(500).send({
        error: "Error",
        Problem: err,
      });
    }
  };

  //POST END POINT NEW USER
  static createNewCompte = async (req: Request, res: Response) => {
    const { username, email, password, role, dateCreated } = req.body as IUser;

    try {
      await User.create({
        username: "admin",
        password: bcrypt.hashSync("admin", 8),
        email: "admin@gmail.com",
        role: "admin",
        dateCreated: new Date(),
      });

      res
        .status(200)
        .send(
          `<h3> Access dans l'application <br /> Utilisateur: admin, <br /> Mot de passe: admin. <br /> Pour gérer l'utilisateur dans ce système. <br /> Merci!<h3>`
        );
    } catch (err: any) {
      res.status(500).send({
        error: "Error",
        Problem: err,
      });
    }
  };
}

export default USerController;
