import React, { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import axios, { isAxiosError } from 'axios';
import { FormValues, SnackBarEnum } from '../../../types/formValues';
import { apiUrl } from '../../../config/api';
import { ENDPOINTS } from '../../../services/endpoints/endpoints';
import { CustomSnackBar } from '../../common/CustomSnackBar/CustomSnackBar';
import { CustomBasicForm } from '../../common/CustomBasicForm/CustomBasicForm';
import { registerInactiveSchema } from './register-inactive.sheme';
import { routes } from '../../../routes/routesMap';
import { useSnackBar } from '../../../hooks/useSnackBar';
import { registerInactiveDataArr } from './register-inactive-data';

export const RegisterInactiveForm = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
    const {
        snackBarMessage,
        snackBarType,
        isSnackBarOpen,
        showSnackBar,
        hideSnackBar,
    } = useSnackBar();
    const navigate = useNavigate();
    const defaultValues = {
        email: '',
        password: '',
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: yupResolver(registerInactiveSchema),
        defaultValues,
    });

    useEffect(() => {
        if (!isSnackBarOpen && isFormSubmitted) {
            navigate(routes.signIn, { replace: true });
        }
    }, [isFormSubmitted, isSnackBarOpen]);

    const onSubmit = async (data: FormValues): Promise<void> => {
        try {
            await axios(`${apiUrl}${ENDPOINTS.register}`, {
                method: 'POST',
                data: data,
            });
            showSnackBar(
                'Użytkownik zarejestrowany jako nieaktywny. Za chwilę zostaniesz przeniesiony do strony logowania',
                SnackBarEnum.SUCCESS_MESSAGE
            );
            setIsFormSubmitted(true);
        } catch (err: unknown) {
            if (isAxiosError(err)) {
                showSnackBar(err.response?.data.message);
            } else {
                showSnackBar('Nie udało się zarejestrować użytkownika');
            }
        }
    };

    return (
        <Box width="400px" maxWidth="90%">
            <CustomBasicForm
                onSubmit={onSubmit}
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
                dataFormArr={registerInactiveDataArr}
                buttonText="Zarejestruj się"
            />
            {isSnackBarOpen && (
                <CustomSnackBar
                    setAction={hideSnackBar}
                    actionState={isSnackBarOpen}
                    message={snackBarMessage}
                    type={snackBarType}
                />
            )}
        </Box>
    );
};
