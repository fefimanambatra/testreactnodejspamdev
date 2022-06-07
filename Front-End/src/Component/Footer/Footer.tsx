import { FC } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
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
} from "./style";

interface FooterProps {}

const Footer = () => {
  return (
    <ContainerStyled>
      <GridStyled2 container={true}>
        <GridStyled item xs={4}>
          <TypographyStyled2 variant="h3">Food</TypographyStyled2>
          <TypographyStyled2 variant="h3">Zero.</TypographyStyled2>
        </GridStyled>

        <GridStyled2 item xs={2}>
          <ContainerStyled2>
            <TypographyStyled variant="h6">Contact</TypographyStyled>
            <br />
            <TypographyStyled variant="body2">
              +1+86 852 346 000
            </TypographyStyled>
            <TypographyStyled variant="body2">
              info@foodzero.com
            </TypographyStyled>
            <br />
            <TypographyStyled variant="body2">
              1959 Sepulveda Blvd.
            </TypographyStyled>
            <TypographyStyled variant="body2">
              Culver City, CA, 90230
            </TypographyStyled>
          </ContainerStyled2>
        </GridStyled2>

        <GridStyled2 item xs={6}>
          <ContainerStyled3>
            <TypographyStyled variant="h6">
              Never Miss a Recipe
            </TypographyStyled>
            <br />
            <ContainerStyled4>
              <TextFieldStyled
                id="outlined-basic"
                label="Email Address"
                // InputProps={{
                //     classes: { notchedOutline: 'Outlined' },
                //   }}
                variant="outlined"
              />

              <ButtonStyled variant="contained">Subscribe</ButtonStyled>
            </ContainerStyled4>
            <br />
            <TypographyStyled variant="caption">
              Join our subscribers and get best recipe delivered each week!
            </TypographyStyled>
          </ContainerStyled3>
        </GridStyled2>
      </GridStyled2>

      <br />
      <br />
      <br />
      <br />
      <br />
      <Div></Div>
      <br />
      <br />
      <br />

      <ContainerStyled5>
        <TypographyStyled3 variant="caption">
          © 2022 Zero Inc. All rights Reserved
        </TypographyStyled3>
        <ContainerStyled6>
          <InstagramIcon fontSize="small" sx={{ marginRight: 3 }} />
          <TwitterIcon fontSize="small" sx={{ marginRight: 3 }} />
          <FacebookIcon fontSize="small" sx={{ marginRight: 3 }} />
          <YouTubeIcon fontSize="small" sx={{ marginRight: 3 }} />
        </ContainerStyled6>
      </ContainerStyled5>
    </ContainerStyled>
  );
};

export default Footer;
