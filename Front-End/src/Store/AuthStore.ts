import axios from "axios";
import { action, makeObservable, observable } from "mobx";
import config from "../config";
import authServices from "../services/AuthServices";
import AppStore from "./AppStore";
import userStore from "./UserStore";

interface BasicUser {
  username: string;
  role: string;
  email: string;
} 

export interface AuthStoreInterface {
  isLogginIn: boolean;
  user: BasicUser | null;
  login: (username: string, password: string) => void;
  setUser: (infoUser: (BasicUser & { token: string }) | null) => void;
}

class AuthStore implements AuthStoreInterface {
  @observable isLogginIn = false;

  @observable user: BasicUser | null = null;

  constructor() {
    makeObservable(this);
  }

  @action setUser = (infoUser: (BasicUser & { token: string }) | null) => {
    if (!infoUser) {
      this.user = null;
      authServices.signOut();
      return;
    }
    const { token, ...user } = infoUser;
    authServices.setAccessToken(token);
    this.user = user;
  };

  @action login = async (username: string, password: string) => {
    this.isLogginIn = true;
    userStore.failedFetchUser = false;
 
    try {
      const resp = await axios.post(`${config.servers.apiUrl}authentification/login`, {
        username,
        password,
      });
      this.setUser(resp.data);

      return 
      this.isLogginIn = false;
    } catch (err: any) {
      this.isLogginIn = false;
      if (err.message.includes("code 400")) {
        AppStore.updateSnackBar(
          true,
          "Veuillez remplir correctement les champs"
        );
        return;
      }
      if (err.message.includes("code 401")) {
        AppStore.updateSnackBar(true, "Login ou mot de passe incorrect!");
        return;
      }
      AppStore.updateSnackBar(
        true,
        "Une erreur s'est produite. Veuillez réessayer plus tard!"
      );
    }
  };
}

export default new AuthStore();
