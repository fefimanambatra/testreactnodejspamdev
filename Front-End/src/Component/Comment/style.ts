import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";

const ContainerStylised = styled(Container)(({ theme }) => ({
  // backgroundColor: "silver",
  marginBottom: "30px",
}));

const AvatarStylised = styled(Avatar)(({ theme }) => ({
  width: 70,
  height: 70,
}));

const LinkStylised = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "black",
}));

export { ContainerStylised, AvatarStylised, LinkStylised };
