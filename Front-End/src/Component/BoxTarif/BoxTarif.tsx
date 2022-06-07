import { FC } from "react";
import { Typography } from "@mui/material";
import { Div, BoxStylised, TypographyStylised } from "./style";

interface BoxTarifProps {}

const BoxTarif = () => {
  return (
    <BoxStylised>
      <TypographyStylised variant="h4">$20</TypographyStylised>
      <Div></Div>
      <Typography variant="h3">Deep Sea Snow White Cod Fillet</Typography>
      <Typography variant="body1">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </Typography>
    </BoxStylised>
  );
};

export default BoxTarif;
