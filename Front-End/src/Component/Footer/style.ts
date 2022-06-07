import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Div = styled("div")(({ theme }) => ({
  border: "2px dashed white",
}));

const ContainerStyled5 = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

const ContainerStyled6 = styled("div")(({ theme }) => ({
  marginRight: "170px",
}));

const ContainerStyled = styled("div")(({ theme }) => ({
  backgroundColor: "#233000",
  height: "440px",
  color: "white",
}));

const TextFieldStyled = styled(TextField)(({ theme }) => ({ width: "280px" }));

const ContainerStyled2 = styled("div")(({ theme }) => ({
  margin: "auto",
  width: "200px",
  height: "100px",
  marginTop: "70px",
}));

const ContainerStyled3 = styled("div")(({ theme }) => ({
  margin: "auto",
  width: "500px",
  height: "100px",
  marginTop: "70px",
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  background: "#5E6600",
  border: "1px solid #5E6600",
  textTransform: "none",
  width: "170px",
  height: "55px",
  borderRadius: "0px",
  fontFamily: "Rufina",
  fontStyle: "normal",
  fontWeight: 400,
  marginLeft: "20px",
}));

const ContainerStyled4 = styled("div")(({ theme }) => ({ display: "flex" }));

const GridStyled = styled(Grid)(({ theme }) => ({ marginTop: "100px" }));

const GridStyled2 = styled(Grid)(({ theme }) => ({}));

const TypographyStyled = styled(Typography)(({ theme }) => ({}));

const TypographyStyled2 = styled(Typography)(({ theme }) => ({
  textAlign: "center",
}));

const TypographyStyled3 = styled(Typography)(({ theme }) => ({
  marginLeft: "170px",
}));

export {
  Div,
  ContainerStyled,
  GridStyled,
  GridStyled2,
  TypographyStyled,
  TypographyStyled2,
  TypographyStyled3,
  ContainerStyled2,
  ContainerStyled3,
  ContainerStyled4,
  ButtonStyled,
  TextFieldStyled,
  ContainerStyled5,
  ContainerStyled6,
};
