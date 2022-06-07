import { FC } from "react";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Toolbar from "@mui/material/Toolbar";
import ListItemIcon from "@mui/material/ListItemIcon";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Container from "@mui/material/Container";
import StarBorder from "@mui/icons-material/StarBorder";
import { useHistory } from "react-router-dom";
import Typography from "@mui/material/Typography";
import DialogAuthentification from "../../Page/Authentification";
import {
  AppBarStylised,
  ListItemTextStylised,
  ItemTextStylised,
  Div,
  DivStylised,
  Brightness1IconStylised,
  Brightness1IconStylised2,
} from "./style";

interface FullScreenProps {
  setClose: (e: boolean) => void;
  open: boolean;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FullScreen: FC<{ open: boolean } & { setClose: (e: boolean) => void }> = (
  props
) => {
  const history = useHistory();
  const { open, setClose } = props as FullScreenProps;
  const [openList, setOpenList] = React.useState(true);
  const [openModalAuth, setOpenModalAuth] = React.useState(false);

  const handleAuthOptions = (status: boolean) => (e?: any) => {
    setOpenModalAuth(status);
  };

  const handleClick = () => {
    setOpenList(!openList);
  };

  const closeMenu = () => {
    setClose(false);
  };

  return (
    <>
      <DivStylised
        fullScreen
        open={open}
        onClose={closeMenu}
        TransitionComponent={Transition}
      >
        <AppBarStylised>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={closeMenu}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBarStylised>

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <List
              sx={{
                marginTop: "120px",
                marginLeft: "220px",
                maxWidth: 360,
              }}
              component="nav"
            >
              <ListItemButton onClick={() => history.push("/")}>
                <ListItemIcon>
                  <Brightness1IconStylised />
                </ListItemIcon>
                <ListItemTextStylised disableTypography primary="HOME" />
              </ListItemButton>

              <ListItemButton onClick={() => history.push("/menu")}>
                <ListItemIcon>
                  <Brightness1IconStylised />
                </ListItemIcon>
                <ListItemTextStylised disableTypography primary="MENU" />
              </ListItemButton>

              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <Brightness1IconStylised2 />
                </ListItemIcon>
                <ListItemTextStylised
                  disableTypography
                  primary="BLOGS"
                  style={{ color: "#9CAA00" }}
                />
                {openList ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>

              <Collapse in={openList} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={() => history.push("/oneColumn")}
                  >
                    <ListItemIcon></ListItemIcon>
                    <ItemTextStylised disableTypography primary="1 Column" />
                  </ListItemButton>
                </List>
                <List component="div" disablePadding>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={() => history.push("/twoColumn")}
                  >
                    <ListItemIcon></ListItemIcon>
                    <ItemTextStylised disableTypography primary="2 Columns" />
                  </ListItemButton>
                </List>
                <List component="div" disablePadding>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={() => history.push("/sidebarPost")}
                  >
                    <ListItemIcon></ListItemIcon>
                    <ItemTextStylised
                      disableTypography
                      primary="Sidebar Post"
                    />
                  </ListItemButton>
                </List>
              </Collapse>

              <ListItemButton onClick={() => history.push("/about")}>
                <ListItemIcon>
                  <Brightness1IconStylised />
                </ListItemIcon>
                <ListItemTextStylised disableTypography primary="ABOUT" />
              </ListItemButton>

              <ListItemButton onClick={() => history.push("/contact")}>
                <ListItemIcon>
                  <Brightness1IconStylised />
                </ListItemIcon>
                <ListItemTextStylised disableTypography primary="CONTACT" />
              </ListItemButton>

              <ListItemButton onClick={() => setOpenModalAuth(true)}>
                <ListItemIcon>
                  <Brightness1IconStylised />
                </ListItemIcon>
                <ListItemTextStylised
                  disableTypography
                  primary="Se connecter"
                />
              </ListItemButton>
            </List>
          </Grid>

          <Grid
            item
            xs={4}
            style={{
              marginTop: "330px",
              marginLeft: "530px",
            }}
          >
            <Typography variant="h6" component="h2">
              Contact
            </Typography>
            <br />
            <Div></Div>
            <br />
            <Typography variant="body2" component="h2">
              +86 852 346 000
            </Typography>
            <Typography variant="body2" component="h2">
              info@foodzero.com
            </Typography>
            <br />
            <Typography variant="body2" component="h2">
              1959 Sepulveda Blvd.
            </Typography>
            <Typography variant="body2" component="h2">
              Culver City, CA, 90230
            </Typography>
            <br />
            <InstagramIcon fontSize="small" sx={{ marginRight: 3 }} />
            <TwitterIcon fontSize="small" sx={{ marginRight: 3 }} />
            <FacebookIcon fontSize="small" sx={{ marginRight: 3 }} />
            <YouTubeIcon fontSize="small" sx={{ marginRight: 3 }} />
          </Grid>
        </Grid>
      </DivStylised>

      <DialogAuthentification
        isOpen={openModalAuth}
        handleClose={handleAuthOptions(false)}
      />
    </>
  );
};

export default FullScreen;
