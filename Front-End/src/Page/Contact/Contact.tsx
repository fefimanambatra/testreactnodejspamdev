import * as React from "react";
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Header from "../../Component/Header";
import imageContact from "../../Assets/imageContact/imageContact.png";
import imageCitrus from "../../Assets/imageContact/ImageCitrus.png";
import orange from "../../Assets/imageContact/Orange.png";
import imageAppart from "../../Assets/imageContact/ImageAppart.png";
import imgMint from "../../Assets/imageContact/Mint.png";
import Footer from "../../Component/Footer";
import {
  Img,
  Div,
  ButtonStylised,
  TypographyStyled1,
  TypographyStyled2,
  TypographyStyled,
  TypographyStyled3,
  TypographyStyled4,
  TypographyStyled5,
  TypographyStyled6,
  TypographyStyled7,
  TypographyStyled8,
  TypographyStyled9,
  TypographyStyled10,
  TypographyStyled11,
  TypographyStyled12,
  ImageCitrus,
  ImgOrange,
  ImageAppart,
  ContainaireStylised,
  TypographyStylised,
  TypographyStylised2,
  GridContainaireStylised,
  GridStylised,
  FormControlStylised,
  ButtonStylised2,
  ImgMint,
  BoxStylised,
  GridStylised2,
  GridStylised3,
  TextFieldStyled,
  BoxTop,
} from "./style";
import { Typography } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const hours = ["6:00 pm", "7:00 pm", "8:00 pm", "9:00 pm"];

const Persons = ["1 Persons", "2 Persons", "3 Persons"];

const Contact = () => {
  const [personName, setPersonName] = React.useState<string[]>([]);
  const [value, setValue] = React.useState<Date | null>(null);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <>
      <Header />
      <Img src={imageContact} alt="image" />
      <TypographyStyled1>Get in Touch</TypographyStyled1>
      <TypographyStyled2>
        The freshest ingredients for you every day
      </TypographyStyled2>

      <BoxTop>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <TypographyStyled>Open Time</TypographyStyled>
          </Grid>
          <Grid item xs={6}>
            <TypographyStyled4>Sunday - Friday</TypographyStyled4>
          </Grid>
          <Grid item xs={12}>
            <Div></Div>
          </Grid>
          <Grid item xs={4}>
            <TypographyStyled3>Brunch</TypographyStyled3>
            <TypographyStyled5>11:00–12:00</TypographyStyled5>
          </Grid>
          <Grid item xs={4}>
            <TypographyStyled3>Lunch</TypographyStyled3>
            <TypographyStyled5>13:00–17:00</TypographyStyled5>
          </Grid>
          <Grid item xs={4}>
            <TypographyStyled3>Dinner</TypographyStyled3>
            <TypographyStyled5>18:00–20:00</TypographyStyled5>
          </Grid>
        </Grid>
      </BoxTop>

      <ImgOrange src={orange} alt="image" />

      <BoxStylised>
        <GridStylised2
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={1}></Grid>
          <Grid item xs={4}>
            <ImageCitrus src={imageCitrus} alt="image" />
          </Grid>
          <Grid item xs={5}>
            <TypographyStyled9>
              We can be contacted via <br /> email{" "}
              <TypographyStyled10>info@foodzero.com</TypographyStyled10> <br />{" "}
              or telephone on
              <TypographyStyled10> +86 852 346 000</TypographyStyled10>
            </TypographyStyled9>
          </Grid>
          <Grid item xs={2}></Grid>
        </GridStylised2>
      </BoxStylised>

      <Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={1}></Grid>

          <Grid item xs={5}>
            <TypographyStyled11>
              We are located in 1959 Sepulveda Blvd.
            </TypographyStyled11>
            <br />
            <TypographyStyled12>Culver City, CA, 90230</TypographyStyled12>
            <ButtonStylised>View in maps</ButtonStylised>
          </Grid>
          <Grid item xs={4}>
            <ImageAppart src={imageAppart} alt="image" />
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Box>

      {/* RESERVATION */}

      <ContainaireStylised>
        <br />
        <br />
        <br />
        <br />
        <ImgMint src={imgMint} alt="image" />
        <TypographyStylised>Make a Reservation</TypographyStylised>

        <TypographyStylised2>Get in touch with restaurant</TypographyStylised2>
        <br />
        <br />

        <GridStylised3 container spacing={2}>
          <Grid item xs={6}>
            <TextFieldStyled
              id="outlined-basic"
              label="First Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextFieldStyled
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <TextFieldStyled
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <TextFieldStyled
              id="outlined-basic"
              label="Phone"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Date"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextFieldStyled {...params} />}
              />
            </LocalizationProvider>
          </Grid>

          <Grid item xs={6}>
            <FormControlStylised>
              <InputLabel id="demo-multiple-name-label">Hours</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
              >
                {hours.map((hour) => (
                  <MenuItem key={hour} value={hour}>
                    {hour}
                  </MenuItem>
                ))}
              </Select>
            </FormControlStylised>
          </Grid>

          <Grid item xs={12}>
            <FormControlStylised>
              <InputLabel id="demo-multiple-name-label">
                Person numbers
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Person numbers" />}
                MenuProps={MenuProps}
              >
                {Persons.map((Person) => (
                  <MenuItem key={Person} value={Person}>
                    {Person}
                  </MenuItem>
                ))}
              </Select>
            </FormControlStylised>
          </Grid>
        </GridStylised3>

        <br />
        <br />

        <ButtonStylised2 variant="contained">Book Now</ButtonStylised2>

        <br />
        <br />
        <br />
        <br />
      </ContainaireStylised>

      <Footer />
    </>
  );
};

export default Contact;
