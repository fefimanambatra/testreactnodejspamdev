import * as React from "react";
import FullScreen from "../FullScreen";
import Logo from "../../Assets/Logo/FoodZero.png";
import {
  DivContenerStylised,
  IconButtonStylised,
  MenuIconStylised,
  ButtonStylised,
  ImgStylised,
  NumTelStylised,
  AppBarStylised,
  GridContainerStylised,
  GridStylised,
} from "./style";

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <DivContenerStylised>
        <AppBarStylised position="fixed">
          <GridContainerStylised container={true}>
            <GridStylised item xs={12} sm={12} md={2}>
              <ImgStylised src={Logo} alt="LOGO" />
            </GridStylised>

            <GridStylised item xs={12} sm={8} md={6}>
              <IconButtonStylised onClick={handleClickOpen}>
                <MenuIconStylised />
              </IconButtonStylised>
            </GridStylised>

            <GridStylised item xs={12} sm={2} md={2}>
              <NumTelStylised>+86 852 346 000</NumTelStylised>
            </GridStylised>

            <GridStylised item xs={12} sm={2} md={2}>
              <ButtonStylised>Reservations</ButtonStylised>
            </GridStylised>
          </GridContainerStylised>
        </AppBarStylised>
      </DivContenerStylised>

      <FullScreen open={open} setClose={handleClose} />
    </>
  );
};

export default Header;
