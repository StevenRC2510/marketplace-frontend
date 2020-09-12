import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

interface SnackBarProps {
  message: string;
  actionType: string;
  open: boolean;
}

function Alert(props: any) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

export const AlertMessage = ({ message, actionType, open }: SnackBarProps) => {
  return (
    <Snackbar open={open}>
      <Alert severity={actionType}>{message}</Alert>
    </Snackbar>
  );
};

export default AlertMessage;
