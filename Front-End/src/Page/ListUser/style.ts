import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

export const TitleStyled = styled("div")(({ theme }) => ({
  borderRadius: "5px 5px 5px 5px",
  boxShadow: "2px 2px #DADADA",
  background: "#F3F3F3",
  padding: "5px 0px 5px 0px",
  fontSize: "25px",
  textAlign: "center",
}));

export const ContanerStyled = styled("div")(({ theme }) => ({
  background: "#F7F7F7",
  padding: "15px 10px 10px 10px",
  borderRadius: "5px 5px 5px 5px",
  boxShadow: "2px 2px #DADADA",
  width: "85%",
  height: "70vh",
  marginLeft: "100px",
}));

export const ContentStyled = styled("div")(({ theme }) => ({
  height: "60vh",
  width: "100%",
}));

export const ButtonStyled = styled(Button)(({ theme }) => ({
  background: "#233000",
  color: "white",
  height: "40px",
  width: "100px",
  fontWeight: 0,
  "&:hover": {
    backgroundColor: "#233000",
  },
  marginLeft: "80px",
}));

export const ButtonStyled2 = styled(Button)(({ theme }) => ({
  background: "black",
  color: "white",
  height: "40px",
  width: "130px",
  fontWeight: 0,
  "&:hover": {
    backgroundColor: "black",
  },
  marginLeft: "1115px",
  marginTop: "-60px",
}));

export const DataGridStyled = styled(DataGrid)(({ theme }) => ({
  "& .MuiDataGrid-colCell": {
    border: "0.5px solid #DADADA",
    "& .MuiDataGrid-columnSeparator": {
      display: "none",
    },
  },
  "& .MuiDataGrid-cell": {
    border: "0.5px solid #DADADA",
  },
  "& .MuiDataGrid-row:hover": {
    backgroundColor: "#284853 !important",
    cursor: "pointer",
  },
}));
