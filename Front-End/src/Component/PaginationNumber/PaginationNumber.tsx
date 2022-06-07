import Pagination from '@mui/material/Pagination';
import {
  BoxStylised,
} from "./style";

const PaginationNumber = () => {

  return (
    <Pagination sx={{ marginLeft: "600px" }} count={10} variant="outlined" shape="rounded" />
  );
};

export default PaginationNumber;
