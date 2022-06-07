import { styled, alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const Img = styled("img")(({ theme }) => ({
  width: "100%",
  height: "700px",
}));

const TypographyStyled1 = styled(Typography)(({ theme }) => ({
  fontFamily: "Rufina",
  fontWeight: 520,
  fontSize: "85px",
  lineHeight: 1.0,
  color: "white",
  width: "870px",
  height: "115px",
  position: "absolute",
  top: "314px",
  left: "375px",
}));

const TypographyStyled2 = styled(Typography)(({ theme }) => ({
  fontFamily: "Rufina",
  fontSize: "20px",
  color: "white",
  position: "absolute",
  top: "450px",
  left: "575px",
  width: "420px",
}));
export { Img, TypographyStyled1, TypographyStyled2 };
