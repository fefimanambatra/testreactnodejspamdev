import * as React from "react";
import ImageListItem from "@mui/material/ImageListItem";
import { ImageListItemBarStylised, ButtonStylised } from "./style";

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

const CardImgBtn = () => {
  return (
    <>
      <ImageListItem>
        <img
          {...srcset(
            "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
            582,
            600,
            1,
            1
          )}
          alt="Starter"
          loading="lazy"
        />
        <ImageListItemBarStylised
          position="top"
          actionIcon={
            <ButtonStylised variant="contained">Fashion</ButtonStylised>
          }
          actionPosition="right"
        />
      </ImageListItem>
    </>
  );
};

export default CardImgBtn;
