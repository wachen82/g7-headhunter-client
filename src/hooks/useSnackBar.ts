import { useState } from 'react';
import { SnackBarEnum } from '../types/formValues';

export const useSnackBar = () => {
    const [snackBarMessage, setSnackBarMessage] = useState<string>('');
    const [snackBarType, setSnackBarType] = useState<string>(
        SnackBarEnum.ERROR_MESSAGE
    );
    const [isSnackBarOpen, setIsSnackBarOpen] = useState<boolean>(false);

    const showSnackBar = (
        message: string,
        type: string = SnackBarEnum.ERROR_MESSAGE
    ) => {
        setSnackBarMessage(message);
        setSnackBarType(type);
        setIsSnackBarOpen(true);
    };

    const hideSnackBar = () => {
        setIsSnackBarOpen(false);
    };

    return {
        snackBarMessage,
        snackBarType,
        isSnackBarOpen,
        showSnackBar,
        hideSnackBar,
    };
};
