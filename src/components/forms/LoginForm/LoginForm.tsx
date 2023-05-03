import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Box } from '@mui/material'
import { logInSchema } from './log-in.shema'
import axios, { isAxiosError } from 'axios'
import { FormValues, SnackBarEnum } from '../../../types/formValues'
import { apiUrl } from '../../../config/api'
import { ENDPOINTS } from '../../../services/endpoints/endpoints'
import { CustomSnackBar } from '../../common/CustomSnackBar/CustomSnackBar'
import { CustomBasicForm } from '../../common/CustomBasicForm/CustomBasicForm'
import { useSnackBar } from '../../../hooks/useSnackBar'
import { loginDataArr } from './login-data'

export const LoginForm = () => {
    const {
        snackBarMessage,
        snackBarType,
        isSnackBarOpen,
        showSnackBar,
        hideSnackBar,
    } = useSnackBar()

    const defaultValues = {
        email: '',
        password: '',
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: yupResolver(logInSchema),
        defaultValues,
    })

    const onSubmit = async (data: FormValues): Promise<void> => {
        try {
            const res = await axios(`${apiUrl}${ENDPOINTS.signIn}`, {
                method: 'POST',
                data: data,
            })
            if (res.data.role === 'Admin') {
                showSnackBar(
                    'Zalogowałeś się poprawnie jako Admin',
                    SnackBarEnum.SUCCESS_MESSAGE
                )
            } else if (!res.data.active) {
                showSnackBar(
                    'Zalogowałeś się jako nieaktywny użytkownik. Czekaj na potwierdzenie przez administratora',
                    SnackBarEnum.SUCCESS_MESSAGE
                )
                reset(defaultValues)
            }
        } catch (err: unknown) {
            if (isAxiosError(err)) {
                showSnackBar('Taki użytkownik nie jest zarejestrowany')
            } else {
                showSnackBar('Wystąpił niespodziewany błąd')
            }
        }
    }

    return (
        <Box width="400px" maxWidth="90%">
            <CustomBasicForm
                onSubmit={onSubmit}
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
                additionalFormInfo={true}
                dataFormArr={loginDataArr}
                buttonText="Zaloguj się"
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
    )
}
