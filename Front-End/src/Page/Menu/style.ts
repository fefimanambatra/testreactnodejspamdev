import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const Img = styled("img")(({ theme }) => ({
  width: "100%",
  height: "700px",
}));

const Typography1 = styled(Typography)(({ theme }) => ({
  fontFamily: "Rufina",
  fontWeight: 520,
  fontSize: "110px",
  lineHeight: 1.0,
  color: "white",
  width: "550px",
  height: "390px",
  position: "absolute",
  top: "220px",
  left: "107px",
}));

const Typography2 = styled(Typography)(({ theme }) => ({
  fontFamily: "Rufina",
  fontSize: "20px",
  color: "white",
  position: "absolute",
  top: "475px",
  left: "112px",
}));

const ImgBlueberry = styled("img")(({ theme }) => ({
  float: "right",
  height: "290px",
}));

const Typography3 = styled(Typography)(({ theme }) => ({
  fontFamily: "Rufina",
  fontWeight: 520,
  fontSize: "75px",
  color: "black",
  marginLeft: "640px",
  marginTop: "70px",
}));

const Typography4 = styled(Typography)(({ theme }) => ({
  fontFamily: "Rufina",
  fontSize: "18px",
  color: "black",
  marginLeft: "510px",
  marginTop: "-15px",
}));

const Typography5 = styled(Typography)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  marginTop: "98px",
}));

const Typography6 = styled(Typography)(({ theme }) => ({}));

const Typography7 = styled(Typography)(({ theme }) => ({
  fontFamily: "Rufina",
  fontWeight: 520,
  fontSize: "75px",
  color: "black",
  marginLeft: "490px",
  marginTop: "70px",
}));

const ImageStarter1 = styled("img")(({ theme }) => ({
  height: "620px",
}));

const ImageAvocado = styled("img")(({ theme }) => ({
  height: "300px",
  position: "absolute",
  left: "675px",
  top: "2550px",
}));

const Typography8 = styled(Typography)(({ theme }) => ({
    marginTop: "80px",
}));


export {
  Img,
  ImgBlueberry,
  Typography1,
  Typography2,
  Typography3,
  Typography4,
  Typography5,
  Typography6,
  Typography7,
  Typography8,
  ImageStarter1,
  ImageAvocado,
};
