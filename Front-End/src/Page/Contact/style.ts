import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Img = styled("img")(({ theme }) => ({
  width: "100%",
  height: "700px",
}));

const BoxTop = styled(Box)(({ theme }) => ({
  width: "40%",
  marginTop: "-230px",
  marginLeft: "898px",
  marginBottom: "83px",
}));

const TypographyStyled1 = styled(Typography)(({ theme }) => ({
  fontFamily: "Rufina",
  fontWeight: 520,
  fontSize: "110px",
  lineHeight: 1.0,
  color: "white",
  width: "600px",
  height: "115px",
  position: "absolute",
  top: "220px",
  left: "107px",
}));

const TypographyStyled2 = styled(Typography)(({ theme }) => ({
  fontFamily: "Rufina",
  fontSize: "20px",
  color: "white",
  position: "absolute",
  top: "365px",
  left: "112px",
}));

const TypographyStyled = styled(Typography)(({ theme }) => ({
  fontFamily: "Rufina",
  fontSize: "20px",
  color: "white",
  fontWeight: "bold",
  //   marginTop: "10px",
}));

const TypographyStyled4 = styled(Typography)(({ theme }) => ({
  fontFamily: "Rufina",
  fontSize: "18px",
  color: "white",
  marginTop: "10px",
  marginLeft: "137px",
}));

const TypographyStyled9 = styled(Typography)(({ theme }) => ({
  fontFamily: "Rufina",
  fontSize: "28px",
  color: "black",
  marginTop: "305px",
  marginLeft: "130px",
  width: "385px",
}));

const TypographyStyled3 = styled(Typography)(({ theme }) => ({
  fontSize: "15px",
  color: "white",
  marginTop: "20px",
}));

const TypographyStyled10 = styled("span")(({ theme }) => ({
  fontFamily: "Rufina",
  fontSize: "28px",
  color: "#5E6600",
}));

const TypographyStyled11 = styled("span")(({ theme }) => ({
  fontFamily: "Rufina",
  fontSize: "28px",
  color: "black",
  position: "relative",
  top: "220px",
}));

const TypographyStyled12 = styled("span")(({ theme }) => ({
  fontFamtFamily: "Rufina",
  fontSize: "26px",
  color: "black",
  position: "relative",
  top: "220px",
}));

const TypographyStyled5 = styled(Typography)(({ theme }) => ({
  color: "white",
  marginTop: "5px",
  fontSize: "14px",
}));

const TypographyStyled6 = styled(Typography)(({ theme }) => ({
  display: "flex",
}));

const TypographyStyled7 = styled(Typography)(({ theme }) => ({}));

const TypographyStyled8 = styled(Typography)(({ theme }) => ({
  color: "white",
  marginTop: "5px",
  fontSize: "14px",
}));

const Div = styled("div")(({ theme }) => ({
  border: "2px dashed white",
  width: "91%",
  marginTop: "10px",
}));

const ImageCitrus = styled("img")(({ theme }) => ({
  position: "relative",
  top: "54px",
  width: "550px",
  height: "400px",
  zIndex: 2,
}));

const ImgMint = styled("img")(({ theme }) => ({
  position: "absolute",
  top: "1854px",
  left: "300px",
  //   width: "550px",
  height: "250px",
  zIndex: 2,
}));

const ImgOrange = styled("img")(({ theme }) => ({
  position: "absolute",
  left: "575px",
  top: "780px",
  width: "294px",
  height: "267px",
  zIndex: 1,
}));

const ImageAppart = styled("img")(({ theme }) => ({
  position: "relative",
  top: "54px",
  width: "550px",
  height: "400px",
  zIndex: 2,
}));

const ButtonStylised = styled(Button)(({ theme }) => ({
  marginTop: "20px",
  variant: "outlined",
  border: "2px solid black",
  borderRadius: "0px",
  color: "black",
  width: "135px",
  textTransform: "capitalize",
  fontWeight: "bold",
  position: "relative",
  top: "280px",
  left: "-260px",
}));

//Reservation
const ContainaireStylised = styled("div")(({ theme }) => ({
  backgroundColor: "#EBF0E4",
  marginTop: "120px",
}));

const GridContainaireStylised = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
}));

const GridStylised = styled(Grid)(({ theme }) => ({}));

const ButtonStylised2 = styled(Button)(({ theme }) => ({
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  background: "#233000",
  border: "1px solid #233000",
  textTransform: "none",
  width: "170px",
  height: "50px",
  borderRadius: "0px",
}));

const FormControlStylised = styled(FormControl)(({ theme }) => ({
  width: "100%",
  borderRadius: "0px",
}));

const TypographyStylised = styled(Typography)(({ theme }) => ({
  fontFamily: "Rufina",
  fontStyle: "normal",
  fontWeight: 547,
  fontSize: "70px",
  textAlign: "center",
  position: "relative",
  top: "50px",
}));

const TypographyStylised2 = styled(Typography)(({ theme }) => ({
  fontFamily: "Rufina",
  fontStyle: "normal",
  fontWeight: 547,
  fontSize: "18px",
  marginLeft: "510px",
  marginTop: "50px",
}));

const BoxStylised = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  height: "600px",
}));

const GridStylised2 = styled(Grid)(({ theme }) => ({
  marginTop: "120px",
}));

const GridStylised3 = styled(Grid)(({ theme }) => ({
  width: "1200px",
  marginLeft: "190px",
  marginTop: "20px",
}));

const TextFieldStyled = styled(TextField)(({ theme }) => ({
  width: "100%",
}));

export {
  GridStylised3,
  GridStylised2,
  Img,
  ButtonStylised,
  TypographyStyled1,
  TypographyStyled2,
  TypographyStyled3,
  TypographyStyled,
  TypographyStyled4,
  TypographyStyled5,
  TypographyStyled6,
  TypographyStyled7,
  TypographyStyled8,
  TypographyStyled9,
  TypographyStyled10,
  TypographyStyled11,
  TypographyStyled12,
  Div,
  ImageCitrus,
  ImgOrange,
  ImageAppart,
  ContainaireStylised,
  TypographyStylised,
  TypographyStylised2,
  GridContainaireStylised,
  GridStylised,
  FormControlStylised,
  ButtonStylised2,
  ImgMint,
  BoxStylised,
  TextFieldStyled,
  BoxTop,
};
