import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Div = styled("div")(({ theme }) => ({
  border: "2px dashed black",
  width: "350px",
  marginLeft: "97px",
}));

const Conteneur = styled("div")(({ theme }) => ({
  marginTop: "70px",
  "& .MuiCard-root": {
    boxShadow: "none !important",
    borderRadius: "0px",
  },
}));

const CardStylised = styled(Card)(({ theme }) => ({
  maxWidth: 1100,
  display: "flex",
}));

const CardContentStylised = styled(CardContent)(({ theme }) => ({
  maxWidth: 550,
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "125px",
  textAlign: "center",
}));

const TypographyStylised = styled(Typography)(({ theme }) => ({
  fontFamily: "Rufina",
  fontStyle: "normal",
  fontSize: "30px",
  color: "black",
  fontWeight: 700,
}));

const TypographyStylised2 = styled(Typography)(({ theme }) => ({
  fontStyle: "normal",
  fontSize: "15px",
}));

export {
  Div,
  CardStylised,
  CardContentStylised,
  TypographyStylised,
  TypographyStylised2,
  Conteneur,
};
