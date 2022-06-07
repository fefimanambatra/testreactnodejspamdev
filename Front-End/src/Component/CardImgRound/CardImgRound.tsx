import { FC } from "react";
import Img1 from "../../Assets/ImgRound/img1.png";
import { ImgStylised, BoxStylised, TypographyStylised } from "./style";

interface CardImgRoundProps {}

const CardImgRound = () => {
  return (
    <BoxStylised>
      <ImgStylised src={Img1} alt="Img1" />
      <TypographyStylised variant="h4">Premium Quality</TypographyStylised>

      <br />

      <TypographyStylised variant="h5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue
        arcu
      </TypographyStylised>
    </BoxStylised>
  );
};

export default CardImgRound;
