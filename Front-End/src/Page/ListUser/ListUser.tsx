import { GridColDef } from "@mui/x-data-grid";
import { toJS } from "mobx";
import { FC } from "react";
import authService from "../../services/AuthServices";
import { useHistory } from "react-router-dom";
import {
  TitleStyled,
  ContanerStyled,
  ButtonStyled,
  DataGridStyled,
  ContentStyled,
  ButtonStyled2,
} from "./style";

interface ListComponentProps {
  columns: GridColDef[];
  rows: any[];
  onRowClick?: (row: any) => void;
  createNewData?: (e: any) => void;
  withCreate: boolean;
  valueTitle?: string;
}

const ListUser: FC<ListComponentProps> = ({
  columns,
  rows,
  onRowClick,
  createNewData,
  valueTitle,
}) => {
  const items: any = toJS(rows);

  const history = useHistory();

  const handleRowClick = (k: any) => {
    if (onRowClick) {
      onRowClick(k.row);
    }
  };

  const handleLogout = () => {
    authService.signOut();

    history.replace("/");
  };

  return (
    <div>
      <div>
        {valueTitle && (
          <>
            <br />
            <br />
            <br />
            <br />
            <TitleStyled>{valueTitle}</TitleStyled>
            <br />
            <br />
            <br />
          </>
        )}
        <ContanerStyled>
          <br />
          <ButtonStyled size="small" onClick={createNewData}>
            Ajouter
          </ButtonStyled>
          <br />
          <ButtonStyled2 size="small" onClick={handleLogout}>
            Déconnexion
          </ButtonStyled2>
          <br />
          <div>
            <ContentStyled>
              <DataGridStyled
                rows={items}
                columns={columns}
                sortingOrder={["desc", "asc"]}
                disableColumnMenu={true}
                onRowClick={handleRowClick}
                hideFooterSelectedRowCount={true}
              />
            </ContentStyled>
          </div>
        </ContanerStyled>
      </div>
    </div>
  );
};

export default ListUser;
