import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Box } from '@mui/material'
import axios, { isAxiosError } from 'axios'
import { FormValues, SnackBarEnum } from '../../../types/formValues'
import { apiUrl } from '../../../config/api'
import { ENDPOINTS } from '../../../services/endpoints/endpoints'
import { CustomSnackBar } from '../../common/CustomSnackBar/CustomSnackBar'
import { CustomBasicForm } from '../../common/CustomBasicForm/CustomBasicForm'
import { useSnackBar } from '../../../hooks/useSnackBar'
import { resetPasswordEmailScheme } from './reset-password-email.scheme'
import { resetPasswordEmailData } from './reset-password-email-data'

export const ResetPasswordEmailForm = () => {
    const {
        snackBarMessage,
        snackBarType,
        isSnackBarOpen,
        showSnackBar,
        hideSnackBar,
    } = useSnackBar()
    const defaultValues = {
        email: '',
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: yupResolver(resetPasswordEmailScheme),
        defaultValues,
    })

    const onSubmit = async (data: FormValues): Promise<void> => {
        try {
            await axios(`${apiUrl}${ENDPOINTS.reset}`, {
                method: 'POST',
                data: data,
            })
            showSnackBar(
                'Wysłano link do resetu hasła na podany email',
                SnackBarEnum.SUCCESS_MESSAGE
            )
        } catch (err: unknown) {
            if (isAxiosError(err)) {
                showSnackBar('Nie znaleziono użytkownika o podanym mailu')
            } else {
                showSnackBar(
                    'Wysłanie linku nie powiodło się. Spróbuj ponownie'
                )
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
                dataFormArr={resetPasswordEmailData}
                buttonText="Przypomnij hasło"
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
