import axios from "axios";
import { action, makeObservable, observable, runInAction } from "mobx";

type SnackBarSeverity = "success" | "warning" | "info" | "error";

export interface RootStoreInterface {
  snackBarState: {
    open: boolean;
    severity: SnackBarSeverity;
    duration: number;
    message: string;
  };
  updateSnackBar: (
    open: boolean,
    message?: string,
    severity?: SnackBarSeverity,
    duration?: number
  ) => void;
  succesSnackBar: (
    open: boolean,
    message?: string,
    severity?: SnackBarSeverity,
    duration?: number
  ) => void;
}

class AppStore implements RootStoreInterface {
  @observable snackBarState = {
    open: false,
    severity: "error" as SnackBarSeverity,
    duration: 6000,
    message: "An arror happened",
  };

  constructor() {
    makeObservable(this);
  }

  @action updateSnackBar = (
    open: boolean,
    message = "Une erreur s'est produite",
    severity: SnackBarSeverity = "error",
    duration = 4000
  ) => {
    if (!open) {
      this.snackBarState = {
        ...this.snackBarState,
        open,
      };
      return;
    }
    this.snackBarState = {
      open,
      message,
      severity,
      duration,
    };
  };

  @action succesSnackBar = (
    open: boolean,
    message = "Succès",
    severity: SnackBarSeverity = "success",
    duration = 4000
  ) => {
    this.snackBarState = {
      open,
      message,
      severity,
      duration,
    };
  };
}

export default new AppStore();
