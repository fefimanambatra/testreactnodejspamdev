import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Img from "../../Assets/ImgRound/Avatar.png";
import { ContainerStylised, AvatarStylised, LinkStylised } from "./style";

const Comment = () => {
  return (
    <ContainerStylised>
      <Grid container spacing={1}>
        <Grid item xs={1}>
          <AvatarStylised alt="Remy Sharp" src={Img} />
        </Grid>
        <Grid item xs={10}>
          <Typography style={{ fontWeight: "bold" }} variant="subtitle2">
            Leslie Alexander
          </Typography>
          <Typography variant="body2">March 12,2020,7:08 pm</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem
            id penatibus imperdiet.
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <LinkStylised href="#">Reply</LinkStylised>
        </Grid>
      </Grid>
    </ContainerStylised>
  );
};

export default Comment;
