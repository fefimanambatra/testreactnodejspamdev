import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Dialog from "@mui/material/Dialog";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import ListItemText from "@mui/material/ListItemText";
import Background1 from "../../Assets/backgroundImage/Overlay2.png";
import Background2 from "../../Assets/backgroundImage/Overlay.png";

const Brightness1IconStylised = styled(Brightness1Icon)(({ theme }) => ({
  fontSize: "11px",
  color: "white",
}));

const Brightness1IconStylised2 = styled(Brightness1Icon)(({ theme }) => ({
  fontSize: "11px",
  color: "#9CAA00",
}));

const AppBarStylised = styled(AppBar)(({ theme }) => ({
  position: "relative",
  "& .MuiPaper-root-MuiAppBar-root": {
    boxShadow: "none !important",
    boxSizing: "none !important",
  },
}));

const ListItemTextStylised = styled(ListItemText)(({ theme }) => ({
  fontSize: "32px",
  fontFamily: "Rufina",
  fontStyle: "normal",
  fontWeight: "700",
}));

const ItemTextStylised = styled(ListItemText)(({ theme }) => ({
  fontSize: "18px",
  fontFamily: "Rufina",
  fontStyle: "normal",
  fontWeight: "700",
}));

const Div = styled("div")(({ theme }) => ({
  border: "2px dashed white",
  width: "250px",
}));

const DivStylised = styled(Dialog)(({ theme }) => ({
  "& .MuiAppBar-root": {
    boxShadow: "none !important",
    backgroundColor: "transparent",
  },
  "& .MuiDialog-paper": {
    backgroundImage: `url(${Background2}),url(${Background1})`,
    color: "white",
  },
  "& .MuiIconButton-root": {
    color: "black",
  },
}));

export {
  AppBarStylised,
  ListItemTextStylised,
  ItemTextStylised,
  Div,
  DivStylised,
  Brightness1IconStylised,
  Brightness1IconStylised2,
};
