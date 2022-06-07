import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";

const BoxStylised = styled(Box)(({ theme }) => ({
  sx: { flexGrow: 1 },
}));

export {
  BoxStylised,
};
