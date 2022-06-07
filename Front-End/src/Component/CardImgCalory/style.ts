import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const IconButtonStylised = styled(IconButton)(({ theme }) => ({
  color: "white",
  width: "5rem",
}));

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

  "& .MuiImageListItem-img": {
    height: "100px",
  },
});

export { ImageListItemBarStylised, IconButtonStylised };
