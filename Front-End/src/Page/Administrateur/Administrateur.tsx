import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { inject, observer } from "mobx-react";
import { FC, useEffect, useLayoutEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ListComponent from "../ListUser";
import AddDialog from "../../Component/CreateDialog/CreateDialog";
import EditDialog from "../../Component/EditDialog/EditDialog";
import { AuthStoreInterface } from "../../Store/AuthStore";
import { UserStoreInterface } from "../../Store/UserStore";
import DialogAuthentification from "../Authentification";
import { BoxStylised } from "./style";

const defaultNumCompte = {
  username: "",
  email: "",
  password: "",
};

interface AbstractEmptyInterface {}

interface ListCompteProps extends AbstractEmptyInterface {
  authStore: AuthStoreInterface;
  userStore: UserStoreInterface;
}

const SeConnecter: FC<AbstractEmptyInterface> = (props: any) => {
  const history = useHistory();
  const [screenSize, setScreenSize] = useState(1024);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openModalAuth, setOpenModalAuth] = useState(false);
  const [numCompte, setNumCompte] = useState<any>(defaultNumCompte);
  // const [valCode, setValCode] = useState();

  const { userStore, authStore } = props as ListCompteProps;

  const valueTitle = "CREATION COMPTE ADMINISTRATEUR";

  useLayoutEffect(() => {
    setScreenSize(window.innerWidth - 75);
    window.addEventListener("resize", () =>
      setScreenSize(window.innerWidth - 75)
    );
    return () =>
      window.removeEventListener("resize", () =>
        setScreenSize(window.innerWidth - 75)
      );
  }, []);

  const handleAuthOptions = (status: boolean) => (e?: any) => {
    setOpenModalAuth(status);
  };

  const columns: GridColDef[] = [
    {
      field: "username",
      headerName: "Nom d'administrateur",
      width: Math.ceil(446),
    },
    {
      field: "email",
      headerName: "Adresse E-mail",
      width: Math.ceil(446),
    },
    {
      field: "role",
      headerName: "Rôle utilisateur",
      width: Math.ceil(446),
    },
  ];

  useEffect(() => {
    userStore.getAllCompte();
    if (authStore.user?.role !== "admin") {
      history.push("/");
    }
  }, [userStore, authStore]);

  const onRowSelected = (dataSelected: any) => {
    userStore.setSelectedCompte(dataSelected);
    setOpenDeleteDialog(true);
  };

  const handleCloseAddDialog = () => {
    setOpenAddDialog(false);
    setOpenDeleteDialog(false);
  };

  const createNewDriver = () => {
    setOpenAddDialog(true);
  };

  const handleValidate = (e: any) => {
    e.preventDefault();
    userStore.newCompte(numCompte).then(() => {
      handleCloseAddDialog();
      userStore.getAllCompte();
    });
    numCompte.email = "";
    numCompte.password = "";
    numCompte.role = "";
    numCompte.username = "";
  };

  const handleValidateEdit = (e: any) => {
    e.preventDefault();

    userStore.updateCompte().then(() => {
      handleCloseAddDialog();
      userStore.getAllCompte();
    });
    numCompte.email = "";
    numCompte.password = "";
    numCompte.role = "";
    numCompte.username = "";
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setNumCompte({ ...numCompte, [name]: value });
  };

  const handleChangeEdit = (e: any) => {
    const { name, value } = e.target;

    userStore.setSelectedCompte({
      ...userStore.selectedCompte,
      [name]: value,
    });
  };

  const handleDelete = (e: any) => {
    e.preventDefault();

    userStore.DeleteCompte().then(() => {
      handleCloseAddDialog();
      userStore.getAllCompte();
    });
  };

  return (
    <>
      <ListComponent
        columns={columns}
        rows={userStore.listComptes}
        valueTitle={valueTitle}
        onRowClick={onRowSelected}
        createNewData={createNewDriver}
        withCreate={true}
      />

      <AddDialog
        open={openAddDialog}
        handleClose={handleCloseAddDialog}
        handleChange={handleChange}
        handleValidate={handleValidate}
        valeur={numCompte}
      />

      <EditDialog
        open={openDeleteDialog}
        handleClose={handleCloseAddDialog}
        handleChange={handleChangeEdit}
        valeur={userStore.selectedCompte}
        handleValidateEdit={handleValidateEdit}
        handleDelete={handleDelete}
      />

      <DialogAuthentification
        isOpen={openModalAuth}
        handleClose={handleAuthOptions(false)}
      />
    </>
  );
};

export default inject("userStore", "authStore")(observer(SeConnecter));
