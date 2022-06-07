import Header from "../../Component/Header";
import HeaderPath from "../../Component/HeaderPath";
import CardBottom from "../../Component/CardBottom";
import PaginationNumber from "../../Component/PaginationNumber";
import Footer from "../../Component/Footer";
import imageColumn from "../../Assets/imageOneColumn/imageColumn.png";
import { Img, TypographyStyled1, TypographyStyled2 } from "./style";
import { Typography } from "@mui/material";

const TwoColumn = () => {
  const currentPaths = [
    { label: "Home", path: "/" },
    {
      label: "Blog",
      path: "/twoColumn",
    },
    {
      label: "Blog List Two Column",
      path: "/twoColumn",
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

      <Typography sx={{ marginTop: "65px"}}>
      <Typography sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <CardBottom />
        <CardBottom />
      </Typography>
       
      <Typography sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <CardBottom />
        <CardBottom />
      </Typography> 

      <Typography sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <CardBottom />
        <CardBottom />
      </Typography> 
      </Typography>

      <PaginationNumber />

      <Typography sx={{ marginTop: "50px" }}>
        <Footer />
      </Typography>
    </>
  );
};

export default TwoColumn;
