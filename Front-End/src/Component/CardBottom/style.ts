import { styled } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import EastIcon from "@mui/icons-material/East";

const Div = styled("div")(({ theme }) => ({
  border: "2px dashed black",
  width: "430px",
}));

const CardStylised = styled("div")(({ theme }) => ({
  marginTop: "70px",
  "& .MuiCard-root": {
    boxShadow: "none !important",
    borderRadius: "0px",
  },
}));

const CardContentStylised = styled(CardContent)(({ theme }) => ({
  maxWidth: 450,
  marginLeft: "75px",
  marginRight: "auto",
  borderRadius: "0px",
}));

const AvatarStylised = styled(Avatar)(({ theme }) => ({
  width: 70,
  height: 70,
}));

const TypographyStylised = styled(Typography)(({ theme }) => ({
  fontFamily: "Rufina",
  fontStyle: "normal",
  fontSize: "30px",
  color: "black",
  fontWeight: 700,
}));

const TypographyStylised2 = styled(Typography)(({ theme }) => ({
  fontStyle: "normal",
  fontSize: "15px",
}));

const LinkStylised = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "black",
}));

const EastIconStylised = styled(EastIcon)(({ theme }) => ({
  marginLeft: "20px",
  marginBottom: "-7px",
  color: "black",
}));

export {
  Div,
  CardStylised,
  CardContentStylised,
  AvatarStylised,
  TypographyStylised,
  TypographyStylised2,
  LinkStylised,
  EastIconStylised,
};
