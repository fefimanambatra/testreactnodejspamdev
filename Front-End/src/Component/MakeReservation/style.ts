import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

const ContainaireStylised = styled("div")(({ theme }) => ({
  backgroundColor: "#EBF0E4",
}));

const GridContainaireStylised = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
}));

const GridStylised = styled(Grid)(({ theme }) => ({}));

const ButtonStylised = styled(Button)(({ theme }) => ({
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  background: "#233000",
  border: "1px solid #233000",
  textTransform: "none",
  width: "170px",
  height: "50px",
  borderRadius: "0px",
}));

const FormControlStylised = styled(FormControl)(({ theme }) => ({
  width: 350,
  borderRadius: "0px",
}));

const TypographyStylised = styled(Typography)(({ theme }) => ({
  fontFamily: "Rufina",
  fontStyle: "normal",
  fontWeight: 547,
  fontSize: "50px",
  textAlign: "center",
}));

const TypographyStylised2 = styled(Typography)(({ theme }) => ({
  fontFamily: "Rufina",
  fontStyle: "normal",
  fontWeight: 547,
  fontSize: "18px",
  textAlign: "center",
}));

export {
  ContainaireStylised,
  TypographyStylised,
  TypographyStylised2,
  GridContainaireStylised,
  GridStylised,
  FormControlStylised,
  ButtonStylised,
};
