import { Dialog } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { FC } from "react";
import {
  DialogTitleStylised,
  DialogContentStylised,
  TextFieldStylised,
  ButtonStylised2,
  DialogActionsStyled,
} from "./style";

interface AbstractEmptyInterface {}

interface EditDialogProps extends AbstractEmptyInterface {
  open: boolean;
  handleClose: () => void;
  handleChange?: (e: any) => void;
  handleValidateEdit?: (e: any) => void;
  valeur: any;
  handleDelete?: (e: any) => void;
}

const EditDialog: FC<AbstractEmptyInterface & EditDialogProps> = (props) => {
  const {
    open,
    handleClose,
    handleChange,
    valeur,
    handleValidateEdit,
    handleDelete,
  } = props as EditDialogProps;

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitleStylised id="alert-dialog-title">
        Nouveau compte utilisateur
      </DialogTitleStylised>

      <DialogContentStylised>
        <br />
        <br />
        <TextFieldStylised
          label="Nom d'utilisateur"
          name="username"
          variant="outlined"
          value={valeur.username}
          onChange={handleChange}
          autoComplete="none"
        />
        <br />
        <br />
        <TextFieldStylised
          label="Adresse Email"
          name="email"
          variant="outlined"
          value={valeur.email}
          onChange={handleChange}
          autoComplete="none"
        />
        <br />
        <br />
        <TextFieldStylised
          label="Mot de passe"
          name="password"
          variant="outlined"
          value={valeur.password}
          onChange={handleChange}
          autoComplete="none"
        />
        <br />
        <br />
        <TextFieldStylised
          id="filled-select-currency"
          select
          label="Rôle Utilisateur"
          name="role"
          value={valeur.role}
          onChange={handleChange}
          variant="filled"
        >
          <MenuItem value="admin">Administrateur</MenuItem>
          <MenuItem value="userSimple">Simple utilisateur</MenuItem>
        </TextFieldStylised>
      </DialogContentStylised>

      <DialogActionsStyled>
        <ButtonStylised2 variant="contained" onClick={handleValidateEdit}>
          Modifier
        </ButtonStylised2>
        <ButtonStylised2
          variant="contained"
          color="primary"
          onClick={handleDelete}
          autoFocus={true}
        >
          Supprimer
        </ButtonStylised2>
      </DialogActionsStyled>
    </Dialog>
  );
};

export default EditDialog;
