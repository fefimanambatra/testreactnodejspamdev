import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const SpanStylised = styled("span")(({ theme }) => ({
  background: "transparent",
  color: "black",
  zIndex: 2,
  position: "relative",
  top: "50px",
  left: "115px",
  // padding: "0px 10px 0px 10px",
  // borderBottomRightRadius: "5px",
}));

const LinkStylised = styled(Link)(({ theme }) => ({
  color: "black",
  textDecoration: "none",
}));

export { SpanStylised, LinkStylised };
