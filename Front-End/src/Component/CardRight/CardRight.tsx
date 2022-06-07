import { FC } from "react";
import * as React from "react";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import Button from "@mui/material/Button";
import EastIcon from "@mui/icons-material/East";
import CardImgBtn from "../CardImgBtn";
import AvatarExp from "../../Assets/imageOneColumn/AvatarExp.png";
import {
  Div,
  CardStylised,
  CardContentStylised,
  TypographyStylised,
  TypographyStylised2,
  Conteneur,
} from "./style";

interface CardRightProps {}

const CardRight = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Conteneur>
      <CardStylised>
        <CardImgBtn />

        <CardContentStylised>
          <CardHeader
            avatar={
              <Avatar src={AvatarExp} sx={{ marginLeft: "20px", width: "85px", height: "85px" }} aria-label="recipe" />
            }
            title="Julie Christie . October 17,2021 . 3:33 pm . 2 comments"
          />
          <TypographyStylised variant="body2">
            Fruit and vegetables and protection against diseases
          </TypographyStylised>
          <br />
          <Div></Div>
          <br />
          <TypographyStylised2 variant="body2">
            Fruit and vegetables and protection against diseases
          </TypographyStylised2>
          <br />
          <Button
            variant="outlined"
            sx={{ textTransform: "none", borderColor: "transparent" }}
            endIcon={<EastIcon />}
          >
            Read More
          </Button>
        </CardContentStylised>
      </CardStylised>
    </Conteneur>
  );
};

export default CardRight;
