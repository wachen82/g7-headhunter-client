import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Box } from '@mui/material';
import { logInSchema } from './log-in.shema';
import axios, { isAxiosError } from 'axios';
import { FormValues } from '../../../types/formValues';
import { apiUrl } from '../../../config/api';
import { ENDPOINTS } from '../../../services/endpoints/endpoints';
import { CustomSnackBar } from '../../common/CustomSnackBar/CustomSnackBar';
import { CustomBasicForm } from '../../common/CustomBasicForm/CustomBasicForm';
import { useSnackBar } from '../../../hooks/useSnackBar';
import { loginDataArr } from './login-data';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { setLogin } from '../../../state/authSlice';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {
        snackBarMessage,
        snackBarType,
        isSnackBarOpen,
        showSnackBar,
        hideSnackBar,
    } = useSnackBar();

    const defaultValues = {
        email: '',
        password: '',
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: yupResolver(logInSchema),
        defaultValues,
    });

    const onSubmit = async (data: FormValues): Promise<void> => {
        try {
            const res = await axios(`${apiUrl}${ENDPOINTS.signIn}`, {
                method: 'POST',
                data: data,
                withCredentials: true,
            });
            dispatch(setLogin({ user: res.data }));
            reset(defaultValues);

            switch (res.data.role) {
                case 'Admin':
                    navigate(`/admin/${res.data._id}`);
                    break;
                case 'Kursant':
                    navigate(`/user/${res.data._id}`);

                    break;
                case 'HR':
                    navigate(`/hr/${res.data._id}`);
                    break;
                default:
                    showSnackBar('Błąd logowania, spróbuj ponownie.');
            }
        } catch (err: unknown) {
            if (isAxiosError(err)) {
                if (err.response?.status === 403) {
                    showSnackBar(
                        'Logujesz się jako nieaktywny użytkownik. Czekaj na potwierdzenie przez administratora',
                    );
                } else {
                    showSnackBar('Taki użytkownik nie jest zarejestrowany');
                }
            } else {
                showSnackBar('Wystąpił niespodziewany błąd');
            }
        }
    };

    return (
        <Box width='400px' maxWidth='90%'>
            <CustomBasicForm
                onSubmit={onSubmit}
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
                additionalFormInfo={true}
                dataFormArr={loginDataArr}
                buttonText='Zaloguj się'
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
