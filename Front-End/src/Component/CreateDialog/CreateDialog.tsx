import { Dialog } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FC } from "react";
import {
  DialogTitleStylised,
  DialogContentStylised,
  TextFieldStylised,
  ButtonStylised2,
  DialogActionsStyled,
} from "./style";

interface AbstractEmptyInterface {}

interface AddDialogProps extends AbstractEmptyInterface {
  open: boolean;
  handleClose: () => void;
  handleChange?: (e: any) => void;
  handleValidate?: (e: any) => void;
  valeur: any;
}

const CreateDialog: FC<AbstractEmptyInterface & AddDialogProps> = (props) => {
  const { open, handleClose, handleChange, valeur, handleValidate } =
    props as AddDialogProps;
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
        <FormControl fullWidth>
          <InputLabel>Rôle</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="role"
            label="role"
            onChange={handleChange}
          >
            <MenuItem value="admin">Administrateur</MenuItem>
            <MenuItem value="userSimple">Simple utilisateur</MenuItem>
          </Select>
        </FormControl>
      </DialogContentStylised>

      <DialogActionsStyled>
        <ButtonStylised2 variant="contained" onClick={handleClose}>
          Annuler
        </ButtonStylised2>
        <ButtonStylised2
          variant="contained"
          color="primary"
          onClick={handleValidate}
          autoFocus={true}
        >
          Ajouter
        </ButtonStylised2>
      </DialogActionsStyled>
    </Dialog>
  );
};

export default CreateDialog;
