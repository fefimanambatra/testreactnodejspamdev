import { alpha, styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import EastIcon from "@mui/icons-material/East";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Link from "@mui/material/Link";
import InputBase from "@mui/material/InputBase";

const ContainerStylised = styled(Container)(({ theme }) => ({
  marginTop: "50px",
}));

const LinkStylised = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "white",
}));

const TypographyStyled11 = styled(Typography)(({ theme }) => ({
  fontFamily: "Rufina",
  fontWeight: 520,
  fontSize: "34px",
  lineHeight: 1.0,
  color: "white",
  textAlign: "center",
  width: "600px",
  marginTop: "165px",
  marginLeft: "85px",
}));

const AvatarStylised = styled(Avatar)(({ theme }) => ({
  width: 170,
  height: 170,
}));

const ImgKelyStylised = styled("img")(({ theme }) => ({
  width: 60,
  height: 60,
}));

const Img = styled("img")(({ theme }) => ({
  width: "100%",
  height: "700px",
}));

const Div = styled("div")(({ theme }) => ({
  border: "1px dashed black",
  width: "auto",
  marginTop: "5px",
}));

const DivComment = styled("div")(({ theme }) => ({
  border: "1px dashed black",
  width: "1090px",
  marginTop: "70px",
  marginLeft: "225px",
}));

const TypographyStyled1 = styled(Typography)(({ theme }) => ({
  fontFamily: "Rufina",
  fontWeight: 520,
  fontSize: "80px",
  lineHeight: 1.0,
  color: "white",
  width: "870px",
  height: "115px",
  position: "absolute",
  top: "314px",
  left: "375px",
}));

const ButtonStylised = styled(Button)({
  background: "transparent",
  border: "2px solid white",
  textTransform: "none",
  width: "130px",
  height: "45px",
  borderRadius: "0px",
  fontFamily: "Rufina",
  fontStyle: "normal",
  fontWeight: 600,
  position: "absolute",
  top: "230px",
  left: "380px",
});

const ButtonStylised3 = styled(Button)({
  background: "transparent",
  border: "1px solid black",
  color: "black",
  textTransform: "none",
  width: "270px",
  height: "60px",
  borderRadius: "0px",
  fontFamily: "Rufina",
  fontStyle: "normal",
  fontWeight: 600,
  position: "relative",
  top: "50px",
  left: "217px",
  fontSize: "23px",
});
const ButtonStylised2 = styled(Button)({
  background: "transparent",
  border: "1px solid black",
  color: "black",
  textTransform: "none",
  width: "100px",
  height: "30px",
  borderRadius: "0px",
  fontFamily: "Rufina",
  fontStyle: "normal",
  marginLeft: "20px",
  marginTop: "5px",
});

const TypographyStyled2 = styled(Typography)(({ theme }) => ({
  fontFamily: "Rufina",
  fontSize: "20px",
  color: "white",
  position: "absolute",
  top: "480px",
  left: "350px",
  width: "500px",
}));

const EastIconStylised = styled(EastIcon)(({ theme }) => ({
  marginLeft: "20px",
  marginBottom: "-7px",
  color: "white",
}));

const KeyboardBackspaceIconStylised = styled(KeyboardBackspaceIcon)(
  ({ theme }) => ({
    marginLeft: "0px",
    marginBottom: "-7px",
    color: "white",
  })
);

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "1090px",
    height: "150px",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const BootstrapInput2 = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "1090px",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export {
  Img,
  TypographyStyled1,
  TypographyStyled2,
  TypographyStyled11,
  ButtonStylised,
  ImgKelyStylised,
  Div,
  ButtonStylised2,
  ContainerStylised,
  AvatarStylised,
  LinkStylised,
  EastIconStylised,
  KeyboardBackspaceIconStylised,
  DivComment,
  BootstrapInput,
  BootstrapInput2,
  ButtonStylised3,
};
