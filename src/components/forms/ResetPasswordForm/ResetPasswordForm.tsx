import React, { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import axios, { isAxiosError } from 'axios';
import { resetPasswordScheme } from './reset-password.shema';
import { FormValues, SnackBarEnum } from '../../../types/formValues';
import { apiUrl } from '../../../config/api';
import { ENDPOINTS } from '../../../services/endpoints/endpoints';
import { CustomSnackBar } from '../../common/CustomSnackBar/CustomSnackBar';
import { CustomBasicForm } from '../../common/CustomBasicForm/CustomBasicForm';
import { resetPasswordData } from './reset-password-data';
import { useSnackBar } from '../../../hooks/useSnackBar';
import { routes } from '../../../routes/routesMap';

export const ResetPasswordForm = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
    const { token } = useParams<string>();
    const {
        snackBarMessage,
        snackBarType,
        isSnackBarOpen,
        showSnackBar,
        hideSnackBar,
    } = useSnackBar();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isSnackBarOpen && isFormSubmitted) {
            navigate(routes.signIn, { replace: true });
        }
    }, [isFormSubmitted, isSnackBarOpen]);

    const defaultValues = {
        token,
        password: '',
        passwordConfirmation: '',
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: yupResolver(resetPasswordScheme),
        defaultValues,
    });

    const onSubmit = async (data: FormValues): Promise<void> => {
        try {
            delete data.passwordConfirmation;
            const url = `${apiUrl}${ENDPOINTS.updatePassword}`;
            await axios(url, {
                method: 'PATCH',
                data,
            });
            showSnackBar(
                'Hasło zmienione pomyślnie. Zostaniesz przekierowany na stronę główną',
                SnackBarEnum.SUCCESS_MESSAGE
            );
            reset(defaultValues);
            setIsFormSubmitted(true);
        } catch (err: unknown) {
            if (isAxiosError(err)) {
                showSnackBar(
                    'Nie udało się ustawić nowego hasła. Błędny token'
                );
            } else {
                showSnackBar('Nie udało się ustawić nowego hasła');
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
                dataFormArr={resetPasswordData}
                buttonText="Ustaw nowe hasło"
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
