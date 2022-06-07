import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const ImgStylised = styled("img")(({ theme }) => ({
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
}));

const BoxStylised = styled(Box)(({ theme }) => ({
  width: 350,
  height: 330,
  backgroundColor: "transparent",
}));

const TypographyStylised = styled(Typography)(({ theme }) => ({
  fontFamily: "Rufina",
  fontStyle: "normal",
  textAlign: "center",
}));

export { ImgStylised, BoxStylised, TypographyStylised };
