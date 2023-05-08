import React from 'react';
import MuiAlert, { AlertColor, AlertProps } from '@mui/material/Alert';
import { Snackbar } from '@mui/material';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface Props {
    setAction?: React.Dispatch<React.SetStateAction<boolean>>;
    actionState?: boolean;
    type: string;
    message: string;
}

export const CustomSnackBar = ({
    actionState,
    setAction,
    type,
    message,
}: Props) => {
    const handleClose = () => {
        if (setAction) {
            setAction(false);
        }
    };
    return (
        <Snackbar
            onClose={handleClose}
            open={actionState}
            autoHideDuration={5000}
        >
            <Alert onClose={handleClose} severity={type as AlertColor}>
                {message}
            </Alert>
        </Snackbar>
    );
};
