import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import EastIcon from "@mui/icons-material/East";
import { ImageListItemBarStylised, IconButtonStylised } from "./style";

function srcset(
  image: string,
  width: number,
  height: number,
  rows = 1,
  cols = 1
) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const CardImgCalory = () => {
  return (
    <>
      <ImageListItem>
        <img
          {...srcset(
            "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
            400,
            500,
            1,
            1
          )}
          alt="Starter"
          loading="lazy"
        />

        <ImageListItemBarStylised
          title="Starters"
          position="top"
          actionIcon={
            <IconButtonStylised aria-label={`star Camera`}>
              <EastIcon />
            </IconButtonStylised>
          }
          actionPosition="right"
        />
      </ImageListItem>
    </>
  );
};

export default CardImgCalory;
