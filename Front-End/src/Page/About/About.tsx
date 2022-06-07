import { FC } from "react";
import Grid from "@mui/material/Grid";
import Header from "../../Component/Header";
import MakeReservation from "../../Component/MakeReservation";
import Footer from "../../Component/Footer";
import imageAbout from "../../Assets/imageAbout/ImageAbout.png";
import imageTomato from "../../Assets/imageAbout/Tomato.png";
import imageIngredient from "../../Assets/imageAbout/ImageIngredient.png";
import imageChef from "../../Assets/imageAbout/ImageChef.png";
import imageChef2 from "../../Assets/imageAbout/ImageChef2.png";
import Rectangle from "../../Assets/imageAbout/Rectangle 18.png";
import rosemary from "../../Assets/imageAbout/rosemary.png";
import imageBread from "../../Assets/imageAbout/ImageBread.png";
import imageMeat from "../../Assets/imageAbout/ImageMeat.png";
import imageMeat2 from "../../Assets/imageAbout/ImageMeat2.png";
import imageFire from "../../Assets/imageAbout/ImageFire.png";
import RosemaryLeft from "../../Assets/imageAbout/rosemaryLeft.png";
import Ellipse from "../../Assets/imageAbout/Ellipse 16.png";
import Polygon from "../../Assets/imageAbout/Polygon 1.png";
import {
  TypographyStyled1,
  TypographyStyled2,
  TypographyStyled11,
  TypographyStyled22,
  Img,
  ImgTomato,
  TypographyStyled4,
  Img2,
} from "./style";
import { Typography } from "@mui/material";
import { relative } from "path";

const About = () => {
  return (
    <>
      <Header />
      <Img src={imageAbout} alt="image" />
      <TypographyStyled1>Who We Are</TypographyStyled1>
      <TypographyStyled2>
        The most important thing for us is to give you the comfortable dining
        experience
      </TypographyStyled2>

      <Typography sx={{ marginTop: "-3px", height: "600px" }} component="div">
        <ImgTomato src={imageTomato} alt="image" />

        <img
          style={{
            paddingTop: "190px",
            paddingLeft: "420px",
            position: "relative",
            width: "550px",
            height: "400px",
            zIndex: 1,
          }}
          src={imageIngredient}
          alt="image"
        />

        <Typography
          style={{
            fontFamily: "Rufina",
            fontSize: "65px",
            position: "relative",
            top: "-235px",
            left: "245px",
            color: "black",
            width: "385px",
          }}
        >
          Our Story
        </Typography>

        <TypographyStyled4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem
          id penatibus imperdiet. Turpis egestas ultricies purus auctor
          tincidunt lacus nunc.
        </TypographyStyled4>
      </Typography>

      <Typography style={{ height: "1020px", marginTop: "150px" }}>
        <Grid
          container
          sx={{
            backgroundColor: "transparent",
            marginTop: "0px",
            marginLeft: "185px",
            display: "flex",
            width: "1200px",
            position: "relative",
            zIndex: 2,
          }}
          component="div"
        >
          <Grid xs={7} style={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontFamily: "Rufina",
                fontSize: "40px",
                color: "black",
              }}
            >
              Restaurant Manager
            </Typography>
            <Typography
              sx={{
                fontFamily: "Rufina",
                fontSize: "16px",
                color: "black",
              }}
            >
              Carson Hugn
            </Typography>

            <img
              style={{
                width: "500px",
                height: "580px",
              }}
              src={imageChef}
              alt="image"
            />
          </Grid>
          <Grid xs={5}>
            <Typography
              sx={{
                fontFamily: "Rufina",
                fontSize: "18px",
                color: "black",
                marginTop: "20px",
                width: "365px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed
              in pellentesque ornare nunc nisl.
            </Typography>
          </Grid>
        </Grid>

        {/* deuxieme grid */}

        <Grid
          container
          sx={{
            backgroundColor: "transparent",
            marginTop: "0px",
            marginLeft: "185px",
            display: "flex",
            width: "1200px",
            position: "absolute",
            top: "1680px",
            zIndex: 1,
          }}
          component="div"
        >
          <Grid xs={7}>
            <Typography
              sx={{
                fontFamily: "Rufina",
                fontSize: "18px",
                color: "black",
                marginTop: "545px",
                marginLeft: "250px",
                width: "365px",
                textAlign: "end",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed
              in pellentesque ornare nunc nisl. Augue habitant accumsan, ut
              parturient orci ac etiam congue mi.
            </Typography>
          </Grid>
          <Grid xs={5} style={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontFamily: "Rufina",
                fontSize: "40px",
                color: "black",
              }}
            >
              Executive Chef
            </Typography>
            <Typography
              sx={{
                fontFamily: "Rufina",
                fontSize: "16px",
                color: "black",
              }}
            >
              Jane Cooper
            </Typography>

            <img
              style={{
                width: "490px",
                height: "573px",
              }}
              src={imageChef2}
              alt="image"
            />
          </Grid>
        </Grid>
      </Typography>

      <Typography
        component="div"
        height={400}
        style={{
          backgroundImage: `url(${Rectangle}),url(${imageBread})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <TypographyStyled11>It looks delicious</TypographyStyled11>
        <TypographyStyled22>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </TypographyStyled22>
        <img
          style={{
            width: "100px",
            height: "100px",
            color: "white",
            marginLeft: "720px",
            marginTop: "40px",
          }}
          src={Ellipse}
          alt="image"
        />
        <img
          style={{
            width: "40px",
            height: "40px",
            position: "absolute",
            left: "755px",
            top: "2745px",
          }}
          src={Polygon}
          alt="image"
        />
      </Typography>

      <img
        style={{ height: "330px", marginLeft: "1302px" }}
        src={rosemary}
        alt="image"
      />
      <Typography
        component="div"
        style={{
          fontFamily: "Rufina",
          fontWeight: 520,
          fontSize: "94px",
          lineHeight: 1.0,
          color: "black",
          textAlign: "center",
          marginTop: "-180px",
        }}
      >
        Sophisticated Process
      </Typography>

      {/* SOFISTIQUE */}

      <Typography style={{ height: "1265px", marginTop: "100px" }}>
        <Grid
          container
          sx={{
            marginTop: "0px",
            marginLeft: "185px",
            display: "flex",
            width: "1200px",
            position: "relative",
            zIndex: 2,
          }}
          component="div"
        >
          <Grid xs={7} style={{ textAlign: "center" }}>
            <img
              style={{
                width: "430px",
                height: "400px",
              }}
              src={imageMeat}
              alt="image"
            />
          </Grid>
          <Grid xs={5}>
            <Typography
              style={{
                fontFamily: "Rufina",
                fontWeight: 560,
                fontSize: "50px",
                lineHeight: 1.0,
                color: "black",
                marginTop: "85px",
              }}
            >
              01.Slice
            </Typography>
            <Typography
              sx={{
                fontFamily: "Rufina",
                fontSize: "18px",
                color: "black",
                marginTop: "1px",
                width: "410px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              lorem id penatibus imperdiet. Turpis egestas ultricies purus
              auctor tincidunt lacus nunc. Convallis pellentesque quis fringilla
              sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam.
            </Typography>
          </Grid>
        </Grid>

        {/* grid 2 */}
        <Grid
          container
          sx={{
            backgroundColor: "transparent",
            marginTop: "0px",
            marginLeft: "185px",
            display: "flex",
            width: "1200px",
            position: "relative",
            zIndex: 1,
          }}
          component="div"
        >
          <Grid xs={7}>
            <Typography
              style={{
                fontFamily: "Rufina",
                fontWeight: 560,
                fontSize: "50px",
                lineHeight: 1.0,
                color: "black",
                marginTop: "120px",
                marginLeft: "199px",
              }}
            >
              03.Bake
            </Typography>
            <Typography
              sx={{
                fontFamily: "Rufina",
                fontSize: "18px",
                color: "black",
                marginLeft: "200px",
                marginTop: "1px",
                width: "380px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              lorem id penatibus imperdiet.
            </Typography>
          </Grid>
          <Grid xs={5}>
            <img
              style={{
                width: "330px",
                height: "300px",
              }}
              src={imageMeat2}
              alt="image"
            />
          </Grid>
        </Grid>

        {/* grid 3 */}
        <Grid
          container
          sx={{
            backgroundColor: "transparent",
            marginLeft: "185px",
            display: "flex",
            width: "1200px",
            position: "relative",
            top: "-55px",
            zIndex: 2,
          }}
          component="div"
        >
          <Grid xs={7}>
            <img
              style={{
                width: "330px",
                height: "300px",
                marginLeft: "200px",
              }}
              src={imageFire}
              alt="image"
            />
          </Grid>
          <Grid xs={5}>
            <Typography
              style={{
                fontFamily: "Rufina",
                fontWeight: 560,
                fontSize: "50px",
                lineHeight: 1.0,
                color: "black",
                marginTop: "70px",
                marginLeft: "55px",
              }}
            >
              02.Pickled
            </Typography>
            <Typography
              sx={{
                fontFamily: "Rufina",
                fontSize: "18px",
                color: "black",
                marginLeft: "20px",
                marginTop: "1px",
                width: "370px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              lorem id penatibus imperdiet.
            </Typography>
          </Grid>
        </Grid>
        <img
          style={{
            width: "495px",
            height: "316px",
            marginTop: "-95px",
          }}
          src={RosemaryLeft}
          alt="image"
        />
        <MakeReservation />
        <Footer />
      </Typography>
    </>
  );
};

export default About;
