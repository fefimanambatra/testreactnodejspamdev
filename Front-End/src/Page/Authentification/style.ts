import { styled } from "@mui/material/styles";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const DialogTitleStylised = styled(DialogTitle)(({ theme }) => ({
  backgroundColor: "silver",
  color: "black",
}));

const TextFieldStylised = styled(TextField)(({ theme }) => ({
  marginTop: "20px",
  width: "400px",
}));

const ButtonStylised = styled(Button)(({ theme }) => ({
  backgroundColor: "#233000",
  "&:hover": {
    backgroundColor: "#284853",
  },
}));

const ButtonStylised2 = styled(Button)(({ theme }) => ({
  backgroundColor: "#233000"
}));

export { DialogTitleStylised, TextFieldStylised, ButtonStylised, ButtonStylised2 };
