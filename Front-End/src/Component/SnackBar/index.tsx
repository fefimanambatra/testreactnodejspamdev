import { inject, observer } from "mobx-react";
import { RootStoreInterface } from "../../Store/AppStore";
import { FC, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

interface LoginProps {
  AppStore: RootStoreInterface;
}

interface AbstractEmptyInterface {}

const SnackBar: FC<AbstractEmptyInterface> = (props: any) => {
  const { AppStore } = props as LoginProps;
  const handleClose = () => {
    AppStore.updateSnackBar(false, "");
  };

  const Alert = (props: any, ref: any) => {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <Snackbar
      open={true}
      autoHideDuration={6000}
      onClose={handleClose}
      action={action}
    >
      <Alert
        onClose={handleClose}
        severity={AppStore.snackBarState.severity}
      >
        {AppStore.snackBarState.message}
      </Alert>
    </Snackbar>
  );
};

export default inject("AppStore")(observer(SnackBar));
