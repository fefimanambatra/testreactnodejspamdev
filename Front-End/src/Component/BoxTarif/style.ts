import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Div = styled("div")(({ theme }) => ({
  border: "2px dashed black",
  width: "540px",
}));

const BoxStylised = styled(Box)(({ theme }) => ({
  width: 550,
  height: 200,
}));

const TypographyStylised = styled(Typography)(({ theme }) => ({
  marginLeft: "450px",
  marginTop: "10px",
  fontFamily: "Rufina",
  fontStyle: "normal",
}));

export { Div, BoxStylised, TypographyStylised };
