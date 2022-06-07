import { styled } from "@mui/material/styles";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import ImageListItem from "@mui/material/ImageListItem";

const ImageListItemBarStylised = styled(ImageListItemBar)(({ theme }) => ({
  background:
    "linear-gradient(to bottom, rgba(0,0,0,0) 0%, " +
    "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  top: "370px",
  height: "150px",
  "& .MuiImageListItemBar-title": {
    fontSize: "25px",
    fontFamily: "Rufina",
    fontStyle: "normal",
    fontWeight: 540,
    marginBottom: "10px",
  },
}));

const IconButtonStylised = styled(IconButton)(({ theme }) => ({
  color: "rgba(255, 255, 255, 1)",
  marginRight: "30px",
}));

const ImageListItemStylised = styled(ImageListItem)(({ theme }) => ({
  width: "600px",
  height: "500px",
}));

export { ImageListItemBarStylised, IconButtonStylised, ImageListItemStylised };
