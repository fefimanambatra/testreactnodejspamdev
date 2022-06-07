import ImageMenu from "../../Assets/imageMenu/ImageMenu.png";
import Blueberry from "../../Assets/imageMenu/Blueberry.png";
import Starter1 from "../../Assets/imageMenu/ImageStarter1.png";
import ImageOrange from "../../Assets/imageMenu/ImageOrange.png";
import ImageSteack from "../../Assets/imageMenu/ImageSteack.png";
import Avocado from "../../Assets/imageMenu/Avocado.png";
import Header from "../../Component/Header";
import BoxTarif from "../../Component/BoxTarif";
import MakeReservation from "../../Component/MakeReservation";
import Footer from "../../Component/Footer";
import {
  Img,
  ImgBlueberry,
  Typography1,
  Typography2,
  Typography3,
  Typography4,
  Typography5,
  Typography6,
  Typography7,
  Typography8,
  ImageStarter1,
  ImageAvocado,
} from "./style";

const Menu = () => {
  return (
    <>
      <Header />
      <Img src={ImageMenu} alt="image" />
      <Typography1>View Our New Menu</Typography1>
      <Typography2>The freshest ingredients for you every day</Typography2>

      <ImgBlueberry src={Blueberry} alt="image" />
      <Typography3>Starters</Typography3>
      <Typography4>
        This is a section of your menu. Give your section a brief description
      </Typography4>
      <Typography5>
        <ImageStarter1 src={Starter1} alt="image" />
        <Typography6>
          <BoxTarif />
          <BoxTarif />
          <BoxTarif />
        </Typography6>
      </Typography5>

      <Typography3>Mains</Typography3>
      <Typography4>
        This is a section of your menu. Give your section a brief description
      </Typography4>
      <Typography5>
        <Typography6>
          <BoxTarif />
          <BoxTarif />
          <BoxTarif />
        </Typography6>
        <ImageStarter1 src={ImageSteack} alt="image" />
      </Typography5>

      <ImageAvocado src={Avocado} alt="image" />
      <Typography7>Pastries & Drinks</Typography7>
      <Typography4>
        This is a section of your menu. Give your section a brief description
      </Typography4>
      <Typography5>
        <ImageStarter1 src={ImageOrange} alt="image" />
        <Typography6>
          <BoxTarif />
          <BoxTarif />
          <BoxTarif />
        </Typography6>
      </Typography5>

      <Typography8>
        <MakeReservation />
      </Typography8>

      <Footer />
    </>
  );
};

export default Menu;
