import { SnackBarEnum } from '../types/formValues';

export const handleErrorResponse = (error: any, showSnackBar: (message: string, type: SnackBarEnum) => void) => {
    if (error.response && error.response.status === 400) {
        const errorMessage = error.response.data.message;
        showSnackBar(errorMessage, SnackBarEnum.ERROR_MESSAGE);
    } else {
        showSnackBar(
            'Przepraszamy, spróbuj ponownie później',
            SnackBarEnum.ERROR_MESSAGE
        );
    }
};
