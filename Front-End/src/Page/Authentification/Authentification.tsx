import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { AuthStoreInterface } from "../../Store/AuthStore";
import authServices from "../../services/AuthServices";
import { inject, observer } from "mobx-react";
import { FC, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  DialogTitleStylised,
  TextFieldStylised,
  ButtonStylised,
  ButtonStylised2,
} from "./style";

interface AbstractEmptyInterface {}

interface LoginProps extends AbstractEmptyInterface {
  authStore: AuthStoreInterface;
  isOpen: boolean;
  handleClose: (e?: any) => void;
}

const Authentification: FC<
  AbstractEmptyInterface & { isOpen: boolean } & { handleClose: () => void }
> = (props) => {
  const { authStore, isOpen, handleClose } = props as LoginProps;
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (e: any) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleEnterKey = (e: KeyboardEvent | any) => {
    if (e.code === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    await authStore.login(username, password);
    if (authServices.isAuthenticated()) {
      history.replace("/user/List");
    }
  };
  return (
    <div>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitleStylised id="alert-dialog-title">
          Authentification administrateur
        </DialogTitleStylised>

        <DialogContent>
          <TextFieldStylised
            required={true}
            id="user-login"
            label="E-mail ou login"
            onChange={handleChangeUsername}
            value={username}
            color="secondary"
            onKeyPress={handleEnterKey}
          />
          <br />
          <TextFieldStylised
            id="user-password"
            label="Mot de passe"
            type="password"
            autoComplete="current-password"
            onChange={handleChangePassword}
            value={password}
            color="secondary"
            onKeyPress={handleEnterKey}
          />
        </DialogContent>

        <DialogActions>
          <ButtonStylised variant="contained" onClick={handleClose}>
            Annulez
          </ButtonStylised>
          <ButtonStylised2
            variant="contained"
            onClick={handleSubmit}
            autoFocus={true}
          >
            Confirmer
          </ButtonStylised2>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default inject("authStore")(observer(Authentification));
