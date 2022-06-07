import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const TypographyStyled1 = styled(Typography)(({ theme }) => ({
  fontFamily: "Rufina",
  fontWeight: 520,
  fontSize: "110px",
  lineHeight: 1.0,
  color: "white",
  width: "600px",
  height: "115px",
  position: "absolute",
  top: "314px",
  left: "660px",
}));

const TypographyStyled11 = styled(Typography)(({ theme }) => ({
  fontFamily: "Rufina",
  fontWeight: 520,
  fontSize: "94px",
  lineHeight: 1.0,
  color: "white",
  textAlign: "center",
  paddingTop: "80px",
}));

const TypographyStyled2 = styled(Typography)(({ theme }) => ({
  fontFamily: "Rufina",
  fontSize: "20px",
  color: "white",
  position: "absolute",
  top: "450px",
  left: "670px",
  width: "400px",
}));

const TypographyStyled22 = styled(Typography)(({ theme }) => ({
  fontFamily: "Rufina",
  fontSize: "20px",
  color: "white",
  textAlign: "center",
//   position: "relative",
//   top: "450px",
//   left: "670px",
}));

const TypographyStyled4 = styled(Typography)(({ theme }) => ({
    fontFamily: "Rufina",
    fontSize: "18px",
    color: "black",
    position: "relative",
    top: "-240px",
    left: "251px",
    width: "447px",
}));

const Img = styled("img")(({ theme }) => ({
  width: "100%",
  height: "700px",
}));

const Img2 = styled("img")(({ theme }) => ({
  width: "100%",
  height: "500px",
}));

const ImgTomato = styled("img")(({ theme }) => ({
  position: "relative",
  left: "445px",
  top: "-260px",
  width: "294px",
  height: "267px",
  zIndex: 1,
}));

export { TypographyStyled1, TypographyStyled2, Img, ImgTomato, TypographyStyled4, Img2, TypographyStyled11, TypographyStyled22 };
