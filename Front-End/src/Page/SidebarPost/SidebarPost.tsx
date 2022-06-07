import { Grid, Typography } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Paper from "@mui/material/Paper";
import Header from "../../Component/Header";
import HeaderPath from "../../Component/HeaderPath";
import Comment from "../../Component/Comment";
import CardRight from "../../Component/CardRight";
import Footer from "../../Component/Footer";
import ImageBack from "../../Assets/imageSidebarPost/ImageBack.png";
import Image12 from "../../Assets/imageSidebarPost/Image (12).png";
import Image13 from "../../Assets/imageSidebarPost/Image (13).png";
import Image14 from "../../Assets/imageSidebarPost/Image (14).png";
import imageColumn from "../../Assets/imageOneColumn/imageColumn.png";
import imageContact from "../../Assets/imageContact/imageContact.png";
import cotte from "../../Assets/imageSidebarPost/cotte.png";
import AvatarExp from "../../Assets/imageOneColumn/AvatarExp.png";
import {
  Img,
  TypographyStyled1,
  TypographyStyled2,
  ButtonStylised,
  Div,
  ButtonStylised2,
  AvatarStylised,
  ContainerStylised,
  ImgKelyStylised,
  TypographyStyled11,
  LinkStylised,
  EastIconStylised,
  KeyboardBackspaceIconStylised,
  DivComment,
  BootstrapInput,
  BootstrapInput2,ButtonStylised3,
} from "./style";

const SidebarPost = () => {
  const currentPaths = [
    { label: "Home", path: "/" },
    {
      label: "Blog",
      path: "/sidebarPost",
    },
    {
      label: "Blog List One Column",
      path: "/sidebarPost",
    },
  ];
  return (
    <>
      <Header />
      <Img src={ImageBack} alt="image" />
      <TypographyStyled1>
        Three Ideas for Cooking Goat Meat at Home
      </TypographyStyled1>
      <TypographyStyled2>
        <CardHeader
          avatar={
            <Avatar
              src={AvatarExp}
              sx={{ marginLeft: "20px", width: "65px", height: "65px" }}
              aria-label="recipe"
            />
          }
          title="Julie Christie . October 17,2021 . 3:33 pm . 2 comments"
        />
      </TypographyStyled2>

      <ButtonStylised variant="contained">Fashion</ButtonStylised>

      <HeaderPath paths={currentPaths} />

      <Grid
        container
        xs={12}
        style={{
          display: "flex",
          width: "1250px",
          marginLeft: "160px",
          marginTop: "110px",
        }}
        component="div"
      >
        <Grid item xs={8}>
          <Typography component="div" style={{ width: "810px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem
            id penatibus imperdiet. Turpis egestas ultricies purus auctor
            tincidunt lacus nunc. Convallis pellentesque quis fringilla
            sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem
            id penatibus imperdiet. Turpis egestas ultricies purus auctor
            tincidunt lacus nunc.
          </Typography>

          <Grid
            container
            xs={12}
            style={{
              display: "flex",

              marginTop: "60px",
            }}
          >
            <Grid item xs={8}>
              <img
                src={Image12}
                alt="image"
                style={{ width: "555px", height: "505px" }}
              />
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                src={Image13}
                alt="image"
                style={{ width: "230px", height: "230px", margin: "auto" }}
              />
              <img
                src={Image14}
                alt="image"
                style={{ width: "230px", height: "230px", margin: "auto" }}
              />
            </Grid>
          </Grid>

          <Typography component="div" style={{ marginTop: "60px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem
            id penatibus imperdiet. Turpis egestas ultricies purus auctor
            tincidunt lacus nunc. Convallis pellentesque quis fringilla
            sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem
            id penatibus imperdiet. Turpis egestas ultricies purus auctor
            tincidunt lacus nunc.
          </Typography>

          <Typography
            component="div"
            style={{
              width: "555px",
              color: "#5E6600",
              fontFamily: "Lato",
              fontStyle: "italic",
              fontSize: "25px",
              marginLeft: "135px",
              marginTop: "50px",
            }}
          >
            “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor
            tincidunt lacus nunc.
          </Typography>

          <img
            src={cotte}
            alt="image"
            style={{
              width: "120px",
              height: "120px",
              position: "relative",
              left: "585px",
              top: "-112px",
            }}
          />

          <Typography component="div">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem
            id penatibus imperdiet. Turpis egestas ultricies purus auctor
            tincidunt lacus nunc. Convallis pellentesque quis fringilla
            sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Purus lorem id
            penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt
            lacus nunc. Convallis pellentesque quis fringilla sagittis. Egestas
            in risus sit nunc nunc, arcu donec nam etiam. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Purus lorem id penatibus imperdiet.
          </Typography>

          <Typography
            component="div"
            style={{ display: "flex", marginTop: "90px" }}
          >
            <Typography style={{ fontSize: "20px" }}>Tags:</Typography>
            <ButtonStylised2 variant="contained">Design</ButtonStylised2>
            <ButtonStylised2 variant="contained">Photography</ButtonStylised2>
            <ButtonStylised2 variant="contained">Images</ButtonStylised2>
            <ButtonStylised2 variant="contained">Video</ButtonStylised2>
            <ButtonStylised2 variant="contained">Music</ButtonStylised2>
            <ButtonStylised2 variant="contained">Travel</ButtonStylised2>
          </Typography>

          <ContainerStylised>
            <Grid container spacing={1}>
              <Grid item xs={1}>
                <AvatarStylised alt="Remy Sharp" src={AvatarExp} />
              </Grid>
              <Grid
                item
                xs={10}
                style={{ position: "relative", top: "50px", left: "150px" }}
              >
                <Typography style={{ fontWeight: "bold" }} variant="subtitle2">
                  Leslie Alexander
                </Typography>
                <Typography style={{ fontSize: "16x", width: "550px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                  lorem id penatibus imperdiet.
                </Typography>
              </Grid>
            </Grid>
          </ContainerStylised>
        </Grid>
        <Grid item xs={4}>
          <br />
          <br />
          <br />
          <Typography sx={{ fontSize: "25px" }}>Categories</Typography>

          <Div></Div>
          <TableContainer component={Paper} style={{ marginTop: "30px" }}>
            <Table sx={{ minWidth: "auto" }} aria-label="spanning table">
              <TableBody>
                <TableRow>
                  <TableCell>Fashion</TableCell>
                  <TableCell align="right">16</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Food</TableCell>
                  <TableCell align="right">20</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Music</TableCell>
                  <TableCell align="right">12</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Travel</TableCell>
                  <TableCell align="right">36</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Typography sx={{ fontSize: "25px", marginTop: "50px" }}>
            Recent Comments
          </Typography>

          <Div></Div>

          <TableContainer component={Paper} style={{ marginTop: "10px" }}>
            <Table sx={{ minWidth: "auto" }} aria-label="spanning table">
              <TableBody>
                <TableRow>
                  <TableCell>
                    John Mccain Vegan baked oatmeal with fresh berries
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Ana 50 Foods That Are Super Healthy</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Camilla How Many Carbs Should You Eat for Weight Loss?
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Dailey 22 Foods That Can Give You More Energy
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <br />
          <br />

          <Typography sx={{ fontSize: "25px" }}>Archives</Typography>

          <Div></Div>

          <TableContainer component={Paper} style={{ marginTop: "10px" }}>
            <Table sx={{ minWidth: "auto" }} aria-label="spanning table">
              <TableBody>
                <TableRow>
                  <TableCell>October 2021</TableCell>
                  <TableCell align="right">12</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>September 2021</TableCell>
                  <TableCell align="right">6</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>August 2021</TableCell>
                  <TableCell align="right">23</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <br />
          <br />

          <Typography sx={{ fontSize: "25px" }}>Recent Posted</Typography>

          <Div></Div>

          <TableContainer component={Paper} style={{ marginTop: "10px" }}>
            <Table sx={{ minWidth: "auto" }} aria-label="spanning table">
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Grid container spacing={1}>
                      <Grid item xs={1}>
                        <ImgKelyStylised alt="Remy Sharp" src={Image14} />
                      </Grid>
                      <Grid
                        item
                        xs={10}
                        style={{
                          position: "relative",
                          top: "0px",
                          left: "50px",
                        }}
                      >
                        <Typography
                          style={{ fontWeight: "bold", fontSize: "12x" }}
                          variant="subtitle2"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </Typography>
                        <Typography style={{ fontSize: "10px" }}>
                          Leslie Alexander
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Grid container spacing={1}>
                      <Grid item xs={1}>
                        <ImgKelyStylised alt="Remy Sharp" src={Image14} />
                      </Grid>
                      <Grid
                        item
                        xs={10}
                        style={{
                          position: "relative",
                          top: "0px",
                          left: "50px",
                        }}
                      >
                        <Typography
                          style={{ fontWeight: "bold", fontSize: "12x" }}
                          variant="subtitle2"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </Typography>
                        <Typography style={{ fontSize: "10px" }}>
                          Leslie Alexander
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Grid container spacing={1}>
                      <Grid item xs={1}>
                        <ImgKelyStylised alt="Remy Sharp" src={Image14} />
                      </Grid>
                      <Grid
                        item
                        xs={10}
                        style={{
                          position: "relative",
                          top: "0px",
                          left: "50px",
                        }}
                      >
                        <Typography
                          style={{ fontWeight: "bold", fontSize: "12x" }}
                          variant="subtitle2"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </Typography>
                        <Typography style={{ fontSize: "10px" }}>
                          Leslie Alexander
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Grid container spacing={1}>
                      <Grid item xs={1}>
                        <ImgKelyStylised alt="Remy Sharp" src={Image14} />
                      </Grid>
                      <Grid
                        item
                        xs={10}
                        style={{
                          position: "relative",
                          top: "0px",
                          left: "50px",
                        }}
                      >
                        <Typography
                          style={{ fontWeight: "bold", fontSize: "12x" }}
                          variant="subtitle2"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </Typography>
                        <Typography style={{ fontSize: "10px" }}>
                          Leslie Alexander
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <br />
          <br />

          <Typography sx={{ fontSize: "25px" }}>Tags</Typography>

          <Div></Div>

          <Typography sx={{ marginTop: "30px" }}>
            <ButtonStylised2 sx={{ width: "140px" }} variant="contained">
              Design
            </ButtonStylised2>
            <ButtonStylised2 sx={{ width: "150px" }} variant="contained">
              Photography
            </ButtonStylised2>
            <ButtonStylised2 variant="contained">Images</ButtonStylised2>
            <ButtonStylised2 variant="contained">Video</ButtonStylised2>
            <ButtonStylised2 variant="contained">Music</ButtonStylised2>
            <ButtonStylised2 variant="contained">Travel</ButtonStylised2>
          </Typography>
        </Grid>
      </Grid>

      <Typography style={{ display: "flex", marginTop: "80px" }}>
        <Typography
          component="div"
          height={400}
          width="50%"
          style={{
            backgroundImage: `url(${imageColumn})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <LinkStylised
            variant="body2"
            style={{
              cursor: "pointer",
              position: "relative",
              top: "160px",
              left: "325px",
            }}
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            <KeyboardBackspaceIconStylised />
            PREVIOUS POST
          </LinkStylised>
          <TypographyStyled11>
            7 Reasons to Start Your Day With Lemon Water
          </TypographyStyled11>
        </Typography>
        <Typography
          component="div"
          height={400}
          width="50%"
          style={{
            backgroundImage: `url(${imageContact})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <LinkStylised
            variant="body2"
            style={{
              cursor: "pointer",
              position: "relative",
              top: "160px",
              left: "325px",
            }}
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            NEXT POST
            <EastIconStylised />
          </LinkStylised>
          <TypographyStyled11>
            7 Reasons to Start Your Day With Lemon Water
          </TypographyStyled11>
        </Typography>
      </Typography>

      <Typography
        sx={{
          fontFamily: "Rufina",
          fontWeight: 520,
          fontSize: "34px",
          lineHeight: 1.0,
          color: "black",
          width: "600px",
          marginTop: "45px",
          marginLeft: "695px",
          marginBottom: "70px",
        }}
      >
        5 Comments
      </Typography>

      <Comment />
      <Comment />
      <Comment />
      <Comment />

      <DivComment />

      <Typography
        sx={{
          fontFamily: "Rufina",
          fontWeight: 520,
          fontSize: "34px",
          lineHeight: 1.0,
          color: "black",
          width: "600px",
          marginTop: "45px",
          marginLeft: "695px",
        }}
      >
        Leave a Reply
      </Typography>

      <Typography style={{ marginLeft: "216px", marginTop: "50px" }}>
        <FormControl variant="standard">
          <InputLabel
            style={{ fontSize: "25px" }}
            shrink
            htmlFor="bootstrap-input"
          >
            Comment
          </InputLabel>
          <BootstrapInput style={{ marginTop: "30px" }} id="bootstrap-input" />
        </FormControl>
        <br />
        <br />
        <br />
        <FormControl variant="standard">
          <InputLabel
            style={{ fontSize: "25px" }}
            shrink
            htmlFor="bootstrap-input"
          >
            Name*
          </InputLabel>
          <BootstrapInput2 style={{ marginTop: "30px" }} id="bootstrap-input" />
        </FormControl>
        <br />
        <br />
        <br />
        <FormControl variant="standard">
          <InputLabel
            style={{ fontSize: "25px" }}
            shrink
            htmlFor="bootstrap-input"
          >
            Email*
          </InputLabel>
          <BootstrapInput2 style={{ marginTop: "30px" }} id="bootstrap-input" />
        </FormControl>
        <br />
        <br />
        <br />
        <FormControl variant="standard">
          <InputLabel
            style={{ fontSize: "25px" }}
            shrink
            htmlFor="bootstrap-input"
          >
            Website
          </InputLabel>
          <BootstrapInput2 style={{ marginTop: "30px" }} id="bootstrap-input" />
        </FormControl>
      </Typography>

      <ButtonStylised3 variant="contained">Post Comment</ButtonStylised3>

      <Typography sx={{ marginTop: "150px" }}>
        <Footer />
      </Typography>
    </>
  );
};

export default SidebarPost;
