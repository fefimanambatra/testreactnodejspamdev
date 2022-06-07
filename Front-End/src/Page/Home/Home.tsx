import { FC } from "react";
import Avatar from "@mui/material/Avatar";
import ImageHome1 from "../../Assets/imageHome/ImageHome1.png";
import spice1 from "../../Assets/imageHome/spices1.png";
import spice2 from "../../Assets/imageHome/spices2.png";
import spice3 from "../../Assets/imageHome/spices3.png";
import ImageHome2 from "../../Assets/imageHome/ImageHome2.png";
import ImageHome3 from "../../Assets/imageHome/ImageHome3.png";
import Leaf from "../../Assets/imageHome/Leaf.png";
import LeafDroite from "../../Assets/imageHome/LeafDroite.png";
import man from "../../Assets/imageHome/man.png";
import man1 from "../../Assets/imageHome/man1.png";
import Header from "../../Component/Header";
import BoxTarif from "../../Component/BoxTarif";
import CardImgRound from "../../Component/CardImgRound";
import CardBottom from "../../Component/CardBottom";
import MakeReservation from "../../Component/MakeReservation";
import CardImgCalory from "../../Component/CardImgCalory";
import Footer from "../../Component/Footer";
import ImageHome4 from "../../Assets/imageHome/ImageHome4.png";
import AvatarExp from "../../Assets/imageHome/AvatarExp.png";
import quote from "../../Assets/imageHome/quote.png";
import {
  Div,
  CardHeaderStylised,
  Typography01,
  Typography1,
  Typography2,
  Typography3,
  Typography4,
  Typography5,
  Typography6,
  Typography7,
  Typography8,
  Typography9,
  Typography10,
  Typography11,
  Typography12,
  Typography13,
  Img,
  ContainerImg,
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Container2,
  Container3,
  Container4,
  Container5,
  Container6,
  Container7,
  Container8,
  Container9,
  Container10,
} from "./style";

const Home = () => {
  return (
    <>
      <Header />
      <Typography01>
        <Typography1>Healthy Eating is important part of lifestyle</Typography1>
        <Typography2 variant="subtitle2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue
          arcu
        </Typography2>
        <br />
        <br />
        <Img src={ImageHome1} alt="image" />

        <ContainerImg>
          <Img1 src={spice1} alt="image" />
          <Img1 src={spice2} alt="image" />
          <Img1 src={spice3} alt="image" />
        </ContainerImg>

        <Typography3>Scroll</Typography3>
        <Div></Div>
        <Img2 src={ImageHome2} alt="image" />
        <Typography4>Start to plan your diet today</Typography4>
        <Typography5 variant="subtitle2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue
          arcu
        </Typography5>

        <Typography6 variant="subtitle1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue
          arcu
        </Typography6>
        <Img3 src={ImageHome3} alt="image" />
      </Typography01>

      <Container2>
        <Typography7 variant="h3">Our Menu</Typography7>
        <Typography8 variant="subtitle2">
          This is a section of your menu. Give your section a brief description
        </Typography8>
        <Img4 src={ImageHome4} alt="image" />

        <Container3>
          <Container4>
            <BoxTarif />
            <BoxTarif />
          </Container4>

          <Container5>
            <BoxTarif />
            <BoxTarif />
          </Container5>
        </Container3>
      </Container2>

      <Container6>
        <Img6 src={Leaf} alt="image" />
        <Img7 src={man} alt="image" />
        <Img8 src={man1} alt="image" />
        <Typography9>Excellent cook</Typography9>
        <Typography10 variant="subtitle2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem
          id penatibus imperdiet. Turpis egestas ultricies purus auctor
          tincidunt lacus nunc.
        </Typography10>
        <Img5 src={LeafDroite} alt="image" />
      </Container6>

      <Container7>
        <CardImgRound />
        <CardImgRound />
        <CardImgRound />
      </Container7>

      <Container8>
        <CardBottom />
        <CardBottom />
      </Container8>

      <Container9>
        <MakeReservation />
      </Container9>

      <Typography11>Calories Energy Balance</Typography11>
      <Typography12 variant="subtitle2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography12>

      <Container10>
        <CardImgCalory />
        <CardImgCalory />
        <CardImgCalory />
      </Container10>

      <Typography13 variant="subtitle2">
        “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem
        id penatibus imperdiet. Turpis egestas ultricies purus Lorem ipsum dolor
        sit amet.
      </Typography13>
      <Img9 src={quote} alt="image" />
      <CardHeaderStylised
        avatar={
          <Avatar
            src={AvatarExp}
            sx={{ width: "100px", height: "100px" }}
            aria-label="recipe"
          />
        }
        title="John Doe"
        subheader="Bloger"
      />

      <Footer />
    </>
  );
};

export default Home;
