import { styled } from "@mui/material/styles";
import {
  TextField,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const DialogTitleStylised = styled(DialogTitle)(({ theme }) => ({
  backgroundColor: "silver",
}));

const DialogActionsStyled = styled(DialogActions)(({ theme }) => ({
  backgroundColor: "white",
}));

const DialogContentStylised = styled(DialogContent)(({ theme }) => ({
  marginTop: "20px",
  width: "400px",
}));

const TextFieldStylised = styled(TextField)(({ theme }) => ({
  width: "400px",
}));

const ButtonStylised2 = styled(Button)(({ theme }) => ({
  backgroundColor: "#233000",
}));

export {
  DialogTitleStylised,
  DialogActionsStyled,
  DialogContentStylised,
  TextFieldStylised,
  ButtonStylised2,
};
