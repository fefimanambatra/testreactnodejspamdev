import { FC } from "react";
import * as React from "react";
import CardHeader from "@mui/material/CardHeader";
import Card from "@mui/material/Card";
import CardImgBtn from "../CardImgBtn";
import AvatarImg from "../../Assets/ImgRound/Avatar.png";
import {
  Div,
  CardStylised,
  CardContentStylised,
  AvatarStylised,
  TypographyStylised,
  TypographyStylised2,
  LinkStylised,
  EastIconStylised,
} from "./style";

interface CardBottomProps {}

const CardBottom = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <CardStylised>
      <Card>
        <CardImgBtn />

        <CardContentStylised>
          <CardHeader
            avatar={<AvatarStylised src={AvatarImg} aria-label="recipe" />}
            title="Julie Christie . October 17,2021 . 3:33 pm . 2 comments"
          />
          <TypographyStylised variant="body2" color="text.secondary">
            Fruit and vegetables and protection against diseases
          </TypographyStylised>
          <br />
          <Div></Div>
          <br />
          <TypographyStylised2 variant="body2" color="text.secondary">
            Fruit and vegetables and protection against diseases
          </TypographyStylised2>
          <br />

          <LinkStylised
            variant="body2"
            style={{cursor: "pointer"}}
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            Read More
            <EastIconStylised />
          </LinkStylised>
        </CardContentStylised>
      </Card>
    </CardStylised>
  );
};

export default CardBottom;
