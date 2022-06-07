import IUser from "../Interface/User";
import axios from "axios";
import { parseError } from '../services/utils';
import { action, makeObservable, observable, runInAction } from "mobx";
import config from "../config";

export interface UserStoreInterface {

  user: IUser | null;
  isGettingInfo: boolean;
  failedFetchUser: boolean;
  redirect: boolean;
  numCompte: IUser | any;
  listComptes: IUser[];
  selectedCompte: IUser | any;

  setUser: (user: IUser | null) => void;
  getUserInfo: () => void;
  setSelectedCompte: (data: IUser) => void;
  newCompte: (data: IUser) => Promise<any>;
  getAllCompte: () => void;
  updateCompte: () => Promise<any>;
  DeleteCompte: () => Promise<any>;
  getFilteredCompte: (find: string, type: number) => void;
}

class UserStore implements UserStoreInterface {

  @observable user: IUser | null = null;
  
  @observable isGettingInfo = false;

  @observable listComptes: IUser[] = [];

  @observable failedFetchUser = false;

  @observable numCompte: IUser | any = {};

  @observable selectedCompte: IUser | any = {};

  @observable redirect = false;

  constructor() {
    makeObservable(this);
  }

  @action getUserInfo = async () => {
    try {
      this.isGettingInfo = true;
      const me = await axios.get(`${config.servers.apiUrl}user/me`);
      this.isGettingInfo = false;
      if (me.data) {
        runInAction(() => {
          this.user = me.data as IUser;
        });
      }
    } catch (error) {
      this.isGettingInfo = false;
      this.failedFetchUser = true;
      parseError(
        error,
        "Une erreur s'est produite lors de la requête de vos infos. Veuillez réessayer"
      );
    }
  };

  @action setUser = (u: IUser | null) => {
    this.user = u;
  };

  @action setSelectedCompte = (compte: IUser) => {
    this.selectedCompte = compte;
  };

  @action newCompte = async (data: IUser) => {
    try {
      const current = await axios.post(
        `${config.servers.apiUrl}numCompte`,
        data
      );
    } catch (error) {
      console.log("ERREUR", error);
    }
  };

  @action getAllCompte = async () => {
    this.listComptes = [];

    try {
      const numberComptes = await axios.get(
        `${config.servers.apiUrl}numCompte`
      );

      this.listComptes = numberComptes.data;
    } catch (err) {
      console.log("ERREUR", err);
    }
  };

  @action updateCompte = async () => {
    try {
      const res = await axios.post(`${config.servers.apiUrl}numCompte/update`, {
        ...this.selectedCompte,
      });
    } catch (err) {
      console.log("ERREUR", err);
    }
  };

  @action getFilteredCompte = async (find: string, type: number) => {
    try {
      const numCompt = await axios.post(
        `${config.servers.apiUrl}numCompte/filter`,
        {
          filter: find,
          type,
        }
      );

      if (numCompt) {
        this.listComptes = numCompt.data;
      }
    } catch (err) {
      console.log("ERREUR", err);
    }
  };

  @action DeleteCompte = async () => {
    try {
      const identifiant = this.selectedCompte.id;

      const res = await axios.patch(
        `${config.servers.apiUrl}numCompte/delete`,
        {
          id: identifiant,
        }
      );
      return res;
    } catch (err) {
      console.log("ERREUR", err);
    }
  };
}

export default new UserStore();
