import Header from "../../Component/Header";
import HeaderPath from "../../Component/HeaderPath";
import CardRight from "../../Component/CardRight";
import Footer from "../../Component/Footer";
import imageColumn from "../../Assets/imageOneColumn/imageColumn.png";
import { Img, TypographyStyled1, TypographyStyled2 } from "./style";
import { Typography } from "@mui/material";

const OneColumn = () => {
  const currentPaths = [
    { label: "Home", path: "/" },
    {
      label: "Blog",
      path: "/oneColumn",
    },
    {
      label: "Blog List One Column",
      path: "/oneColumn",
    },
  ];
  return (
    <>
      <Header />
      <Img src={imageColumn} alt="image" />
      <TypographyStyled1>Blog List - One Column</TypographyStyled1>
      <TypographyStyled2>
        It is easy way to create your beatiful blog for daily
      </TypographyStyled2>

      <HeaderPath paths={currentPaths} />

      <Typography sx={{ marginLeft: "240px", marginTop: "120px" }}>
        <CardRight />
        <CardRight />
        <CardRight />
        <CardRight />
        <CardRight />
      </Typography>

      <Typography sx={{ marginTop: "50px" }}>
        <Footer />
      </Typography>
    </>
  );
};

export default OneColumn;
