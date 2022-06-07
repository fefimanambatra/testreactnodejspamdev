import { FC } from "react";
import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  ContainaireStylised,
  TypographyStylised,
  TypographyStylised2,
  GridContainaireStylised,
  GridStylised,
  FormControlStylised,
  ButtonStylised,
} from "./style";

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

const MakeReservation = () => {
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
    <ContainaireStylised>
      <br />
      <br />
      <br />
      <br />
      <TypographyStylised>Make a Reservation</TypographyStylised>

      <TypographyStylised2>Get in touch with restaurant</TypographyStylised2>
      <br />
      <br />

      <GridContainaireStylised container={true}>
        <GridStylised item={true}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Basic example"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => (
                <TextField {...params} sx={{ width: 350 }} />
              )}
            />
          </LocalizationProvider>
        </GridStylised>

        <GridStylised item={true}>
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
        </GridStylised>

        <GridStylised item={true}>
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
        </GridStylised>
      </GridContainaireStylised>

      <br />
      <br />

      <ButtonStylised variant="contained">Book Now</ButtonStylised>

      <br />
      <br />
      <br />
      <br />
    </ContainaireStylised>
  );
};

export default MakeReservation;
