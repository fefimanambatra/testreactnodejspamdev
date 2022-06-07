import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";

const AppBarStylised = styled(AppBar)(({ theme }) => ({
  height: "77px",
}));

const ImgStylised = styled("img")(({ theme }) => ({
  position: "relative",
  top: "14px",
  left: "90px",
  width: "150px",
  height: "58px",
}));

const GridContainerStylised = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
}));

const GridStylised = styled(Grid)(({ theme }) => ({}));

const BoxStylised = styled(Box)(({ theme }) => ({
  sx: { flexGrow: 1 },
}));

const DivContenerStylised = styled("div")(({ theme }) => ({
  "& .MuiAppBar-root": {
    boxShadow: "none !important",
    backgroundColor: "transparent",
  },
}));

const IconButtonStylised = styled(IconButton)(({ theme }) => ({
  marginTop: "18px",
  size: "large",
  edge: "start",
  color: "white",
  ariaLabel: "menu",
}));

const MenuIconStylised = styled(MenuIcon)(({ theme }) => ({
  fontSize: "35px",
}));

const ButtonStylised = styled(Button)(({ theme }) => ({
  marginTop: "20px",
  variant: "outlined",
  border: "2px solid white",
  borderRadius: "0px",
  color: "white",
  width: "150px",
  textTransform: "capitalize",
  fontWeight: "bold",
}));

const NumTelStylised = styled("p")(({ theme }) => ({
  marginTop: "33px",
  color: "white",
  fontWeight: "bold",
}));

export {
  DivContenerStylised,
  BoxStylised,
  IconButtonStylised,
  MenuIconStylised,
  ButtonStylised,
  ImgStylised,
  NumTelStylised,
  AppBarStylised,
  GridContainerStylised,
  GridStylised,
};
