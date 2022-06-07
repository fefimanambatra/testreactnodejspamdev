import * as React from "react";
import EastIcon from "@mui/icons-material/East";

import {
  ImageListItemBarStylised,
  IconButtonStylised,
  ImageListItemStylised,
} from "./style";

const GridImg = () => {
  return (
    <ImageListItemStylised>
      <img
        src={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&fit=crop&auto=format`}
        srcSet={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt="Titre"
        loading="lazy"
      />
      <ImageListItemBarStylised
        title="Premium Deep Sea Snow White Cod Fillet"
        subtitle="Launch - Dinner"
        actionIcon={
          <IconButtonStylised aria-label={`info about Titre`}>
            <EastIcon />
          </IconButtonStylised>
        }
      />
    </ImageListItemStylised>
  );
};

export default GridImg;
