import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";
import { User } from "../entity/User";
import config from "config";

class AuthController {
  private static checkUserPassword = (user: any, password: string) => {
    return bcrypt.compareSync(password, user.password);
  };

  static login = async (req: Request, res: Response) => {
    //Check if username and password are set
    let { username, password } = req.body;

    if (!(username && password)) {
      res.status(400).send();
      return;
    }

    //Get user from database
    let user;

    try {
      user = await User.findOne({ $or: [{ username }, { email: username }] });
    } catch (error) {
      res
        .status(400)
        .send({
          status: "ERROR",
          code: "USER_FIND_ERROR",
          message: "Failed to fetch user",
        });
        return;
    }

    if (!user) {
      res.status(401).send({
        status: "ERROR",
        code: "USER_NOT_FOUND",
        message: "Failed to fetch user",
      });
      return;
    }

    //Check if encrypted password match
    if (!AuthController.checkUserPassword(user, password)) {
      res.status(401).send({
        status: "ERROR",
        code: "PASSWORD_NOT_MATCH",
        message: "Password incorrect",
      });
      return;
    }

    //Sing JWT, valid for 1 hour
    const token = jwt.sign(
      { userId: user?._id, username: user?.username },
      config.get("jwtSecret"),
      { expiresIn: "4h" }
    );

    //Send the jwt in the response
    res.json({
      username: user.username,
      role: user.role,
      email: user.email,
      token,
    });
  };

}

export default AuthController;
