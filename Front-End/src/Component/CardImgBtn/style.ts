import { styled } from "@mui/material/styles";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Button from "@mui/material/Button";

const ImageListItemBarStylised = styled(ImageListItemBar)({
  background:
    "linear-gradient(to bottom, rgba(0,0,0,0) 0%, " +
    "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  top: "20px",
  "& .MuiImageListItemBar-title": {
    fontSize: "2rem",
    fontFamily: "Rufina",
    fontStyle: "normal",
    fontWeight: 540,
  },
});

const ButtonStylised = styled(Button)({
  background: "#5E6600",
  border: "1px solid #5E6600",
  textTransform: "none",
  width: "130px",
  height: "45px",
  borderRadius: "0px",
  fontFamily: "Rufina",
  fontStyle: "normal",
  fontWeight: 400,
  marginRight: "20px",
});

export { ImageListItemBarStylised, ButtonStylised };
